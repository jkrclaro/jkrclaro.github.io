import logging
import json
from django.shortcuts import render
from django.http import JsonResponse

from .models import Case, HSECase

logger = logging.getLogger(__name__)


def show_covid(request):
    cases = Case.objects.all()
    return render(request, 'covid.html', {'cases': cases})


def johnhopkins_cases_upsert(request):
    if request.method == 'POST':
        if not request.POST:
            return JsonResponse({'status': 'Data cannot be empty'}, status=400)

        Case.objects.upsert_case(
            date=request.POST.get('date'),
            country=request.POST.get('country'),
            cases=request.POST.get('cases'),
            deaths=request.POST.get('deaths'),
            recoveries=request.POST.get('recoveries')
        )
        return JsonResponse({'status': 'Case upserted'})
    else:
        return JsonResponse(status=404)


def hse_cases_upsert(request):
    if request.method == 'POST':
        items = json.loads(request.body.decode('utf-8'))
        if not items:
            return JsonResponse({'status': 'Body cannot be empty'}, status=400)
        else:
            for item in items:
                HSECase.objects.upsert_case(**item)
        return JsonResponse({'status': 'Case upserted'})
    else:
        return JsonResponse(status=404)


def hse_swabs_upsert(request):
    if request.method == 'POST':
        Case.objects.upsert_case(
            date=request.POST.get('date'),
            country=request.POST.get('country'),
            cases=request.POST.get('cases'),
            deaths=request.POST.get('deaths'),
            recoveries=request.POST.get('recoveries')
        )
        return JsonResponse({'status': 'Case upserted'})
    else:
        return JsonResponse(status=404)
