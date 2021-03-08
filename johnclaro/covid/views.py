import logging
import json
from django.shortcuts import render
from django.http import JsonResponse

from .models import JohnHopkinsCase, HSECase

logger = logging.getLogger(__name__)


def show_covid(request):
    cases = []
    deaths = []
    for case_qs in HSECase.objects.order_by('date'):
        date = int(case_qs.date.strftime('%s')) * 1000
        case = [date, case_qs.confirmedcovidcases]
        death = [date, case_qs.confirmedcoviddeaths]
        cases.append(case)
        deaths.append(death)
    print(deaths)
    context = {
        'first_case': HSECase.objects.first(),
        'cases': cases,
        'deaths': deaths
    }
    return render(request, 'covid.html', context)


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
        return JsonResponse({'status': 'Error 404'}, status=404)


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
        return JsonResponse({'status': 'Error 404'}, status=404)


def hse_swabs_upsert(request):
    if request.method == 'POST':
        items = json.loads(request.body.decode('utf-8'))
        if not items:
            return JsonResponse({'status': 'Body cannot be empty'}, status=400)

        return JsonResponse({'status': 'Swabs upserted'})
    else:
        return JsonResponse({'status': 'Error 404'}, status=404)
