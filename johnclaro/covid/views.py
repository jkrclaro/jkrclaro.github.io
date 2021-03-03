from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Covid


def show_covid(request):
    return render(request, 'covid.html')


@csrf_exempt
def upsert_covid(request):
    if request.method == 'POST':
        date = request.POST.get('date')
        country = request.POST.get('country')
        cases = request.POST.get('cases')
        deaths = request.POST.get('deaths')
        recovered = request.POST.get('recovered')
        Covid.objects.upsert_covid(
            date=date,
            country=country,
            cases=cases,
            deaths=deaths,
            recovered=recovered
        )

    return JsonResponse({'status': 200})
