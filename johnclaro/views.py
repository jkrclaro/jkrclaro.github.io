from django.shortcuts import render
from django.http import JsonResponse


def show_covid(request):
    return render(request, 'covid.html')


def upsert_covid(request):
    if request.method == 'POST':
        print('Got this data', request)
    return JsonResponse({'status': 200})
