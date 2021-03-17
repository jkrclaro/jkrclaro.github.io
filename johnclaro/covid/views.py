import json

from django.shortcuts import render
from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from .models import JohnHopkinsCase, HSECase, HSECounty, HSESwab


def show_cases(request):
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
        date = int(case_qs.date.strftime('%s')) * 1000
        case = [date, case_qs.confirmedcovidcases]
        death = [date, case_qs.confirmedcoviddeaths]
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

    context = {
        'covid': HSECase.objects.first(),
        'cases': cases,
        'deaths': deaths,
        'genders': genders,
        'ages': ages,
        'counties': counties,
    }
    return render(request, 'covid/cases.html', context)


def show_swabs(request):
    cases = []
    for case_qs in HSECase.objects.order_by('date'):
        case = [case_qs.confirmedcovidcases]
        cases.append(case)

    positives = []
    for swab_qs in HSESwab.objects.order_by('date_hpsc'):
        positive = [int(swab_qs.pos7 / 7)]
        positives.append(positive)

    context = {
        'swab': HSESwab.objects.first(),
        'positives': positives,
        'cases': cases
    }
    return render(request, 'covid/swabs.html', context)


def show_vaccines(request):
    return render(request, 'covid/vaccines.html')


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def johnhopkins_cases_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    if not items:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    for item in items:
        JohnHopkinsCase.objects.upsert_case(
            date=item['date'],
            country=item['country'],
            cases=item['cases'],
            deaths=item['deaths'],
            recoveries=item['recoveries']
        )
    return Response(None, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_cases_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    if not items:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    for item in items:
        HSECase.objects.upsert_case(**item)

    return Response(None, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_swabs_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    if not items:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    for item in items:
        HSESwab.objects.upsert_swab(**item)

    return Response(None, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_counties_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    if not items:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    for item in items:
        HSECounty.objects.upsert_county(**item)

    return Response(None, status.HTTP_200_OK)
