from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def show_covid(request):
    return render(request, 'covid.html')


@csrf_exempt
def upsert_covid(request):
    if request.method == 'POST':
        print(request.POST)
    return JsonResponse({'status': 200})
