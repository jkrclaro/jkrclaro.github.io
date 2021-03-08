import logging
import json
from django.shortcuts import render
from django.http import JsonResponse

from .models import JohnHopkinsCase, HSECase

logger = logging.getLogger(__name__)


def show_covid(request):
    case = HSECase.objects.first()
    return render(request, 'covid.html', {'case': case})


def johnhopkins_cases_upsert(request):
    if request.method == 'POST':
        items = json.loads(request.body.decode('utf-8'))
        if not items:
            return JsonResponse({'status': 'Body cannot be empty'}, status=400)

        for item in items:
            JohnHopkinsCase.objects.upsert_case(
                date=item['date'],
                country=item['country'],
                cases=item['cases'],
                deaths=item['deaths'],
                recoveries=item['recoveries']
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
        items = json.loads(request.body.decode('utf-8'))
        if not items:
            return JsonResponse({'status': 'Body cannot be empty'}, status=400)

        return JsonResponse({'status': 'Swabs upserted'})
    else:
        return JsonResponse(status=404)
