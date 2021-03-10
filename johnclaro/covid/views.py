import logging
import json
import datetime

from django.shortcuts import render
from django.http import JsonResponse

from .models import JohnHopkinsCase, HSECase, HSECounty

logger = logging.getLogger(__name__)


def show_covid(request):
    covid = HSECase.objects.first()
    genders = [
        {'name': 'Male', 'y': covid.male, 'color': '#95CEFF'},
        {'name': 'Female', 'y': covid.female, 'color': '#F15C80'},
        {'name': 'Unknown', 'y': covid.unknown, 'color': '#696969'},
    ]
    gender_highest = max([covid.male, covid.female, covid.unknown])
    for gender in genders:
        if gender['y'] == gender_highest:
            gender['sliced'] = 1
            gender['selected'] = 1

    ages = [
        {'name': '1-4', 'y': covid.aged1to4},
        {'name': '5-14', 'y': covid.aged5to14},
        {'name': '15-24', 'y': covid.aged15to24},
        {'name': '25-34', 'y': covid.aged25to34},
        {'name': '35-44', 'y': covid.aged35to44},
        {'name': '45-54', 'y': covid.aged45to54},
        {'name': '55-64', 'y': covid.aged55to64},
        {'name': '65+', 'y': covid.aged65up}
    ]
    age_highest = max([
        covid.aged1to4,
        covid.aged5to14,
        covid.aged15to24,
        covid.aged25to34,
        covid.aged35to44,
        covid.aged45to54,
        covid.aged55to64,
        covid.aged65up
    ])
    for age in ages:
        if age['y'] == age_highest:
            age['sliced'] = 1
            age['selected'] = 1

    cases = []
    deaths = []
    for case_qs in HSECase.objects.order_by('date'):
        case = [case_qs.confirmedcovidcases]
        death = [case_qs.confirmedcoviddeaths]
        cases.append(case)
        deaths.append(death)

    county_names = []
    county_cases = []
    counties = {}
    for county_qs in HSECounty.objects.all():
        county_names.append(county_qs.countyname)
        county_cases.append(county_qs.confirmedcovidcases)
    counties['names'] = county_names
    counties['cases'] = county_cases

    now = datetime.datetime.now()
    context = {
        'covid': HSECase.objects.first(),
        'cases': cases,
        'deaths': deaths,
        'genders': genders,
        'ages': ages,
        'counties': counties,
        'today': {
            'year': now.year,
            'month': now.month,
            'day': now.day,
            'hour': now.hour,
            'minute': now.minute,
            'second': now.second
        }
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


def hse_counties_upsert(request):
    if request.method == 'POST':
        items = json.loads(request.body.decode('utf-8'))
        if not items:
            return JsonResponse({'status': 'Body cannot be empty'}, status=400)
        else:
            for item in items:
                HSECounty.objects.upsert_county(**item)
        return JsonResponse({'status': 'County upserted'})
    else:
        return JsonResponse({'status': 'Error 404'}, status=404)
