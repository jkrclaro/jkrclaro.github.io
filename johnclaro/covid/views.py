import json
from datetime import timedelta

from django.shortcuts import render
from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from .models import JohnHopkinsCase, HSECase, HSECounty, HSESwab


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
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
        case = [case_qs.get_epoch(), case_qs.confirmedcovidcases]
        death = [case_qs.get_epoch(), case_qs.confirmedcoviddeaths]
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
        'first_case': HSECase.objects.first(),
        'last_case': HSECase.objects.last(),
        'cases': cases,
        'deaths': deaths,
        'genders': genders,
        'ages': ages,
        'counties': counties,
    }
    return render(request, 'covid/cases.html', context)


def show_swabs(request):
    first_swab = HSESwab.objects.first()
    last_swab = HSESwab.objects.last()
    seven_days_ago = first_swab.date_hpsc - timedelta(days=7)
    thirty_one_days_ago = first_swab.date_hpsc - timedelta(days=31)
    cases = []
    positives = []
    positives_7 = []
    cases_7 = []
    positives_31 = []
    cases_31 = []

    for case_qs in HSECase.objects.order_by('date'):
        cases.append([case_qs.get_epoch(), case_qs.confirmedcovidcases])

    for swab_qs in HSESwab.objects.order_by('date_hpsc'):
        positives.append([swab_qs.get_epoch(), swab_qs.pos1])

    for swab_7 in HSESwab.objects.filter(date_hpsc__gte=seven_days_ago):
        positives_7.append([swab_7.get_epoch(), swab_7.pos1])

    for case_7 in HSECase.objects.filter(date__gte=seven_days_ago):
        cases_7.append([case_7.get_epoch(), case_7.confirmedcovidcases])

    for swab_31 in HSESwab.objects.filter(date_hpsc__gte=thirty_one_days_ago):
        positives_31.append([swab_31.get_epoch(), swab_31.pos1])

    for case_31 in HSECase.objects.filter(date__gte=thirty_one_days_ago):
        cases_31.append([case_31.get_epoch(), case_31.confirmedcovidcases])

    context = {
        'first_swab': first_swab,
        'last_swab': last_swab,
        'positives': positives,
        'cases': cases,
        'positives_7': positives_7,
        'cases_7': cases_7,
        'positives_31': positives_31,
        'cases_31': cases_31,
    }
    return render(request, 'covid/swabs.html', context)


def show_vaccines(request):
    return render(request, 'covid/vaccines.html')


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def johnhopkins_upsert(request):
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
def hse_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    if not items:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    first_item = items[0]
    if 'date' in first_item:
        for item in items:
            HSECase.objects.upsert_case(**item)
    elif 'date_hpsc' in first_item:
        for item in items:
            HSESwab.objects.upsert_swab(**item)
    elif 'countyname' in first_item:
        for item in items:
            HSECounty.objects.upsert_county(**item)
    else:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    return Response(None, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_cases(request):
    cases = []
    for obj in HSECase.objects.order_by('date'):
        case = [obj.get_epoch(), obj.confirmedcovidcases]
        cases.append(case)
    return Response(cases, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_deaths(request):
    deaths = []
    for obj in HSECase.objects.order_by('date'):
        death = [obj.get_epoch(), obj.confirmedcoviddeaths]
        deaths.append(death)
    return Response(deaths, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_counties(request):
    counties = (
        {'name': obj.countyname, 'y': obj.confirmedcovidcases}
        for obj in HSECounty.objects.all()
    )
    return Response(counties, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_ages(request):
    covid = HSECase.objects.first()
    ages = [
        {'name': '1-4', 'y': covid.aged1to4},
        {'name': '5-14', 'y': covid.aged5to14},
        {'name': '15-24', 'y': covid.aged15to24},
        {'name': '25-34', 'y': covid.aged25to34},
        {'name': '35-44', 'y': covid.aged35to44},
        {'name': '45-54', 'y': covid.aged45to54},
        {'name': '55-64', 'y': covid.aged55to64},
        {'name': '65+', 'y': covid.aged65up},
    ]
    age_highest = max([
        covid.aged1to4,
        covid.aged5to14,
        covid.aged15to24,
        covid.aged25to34,
        covid.aged35to44,
        covid.aged45to54,
        covid.aged55to64,
        covid.aged65up,
    ])
    for age in ages:
        if age['y'] == age_highest:
            age['sliced'] = 1
            age['selected'] = 1
    return Response(ages, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_genders(request):
    covid = HSECase.objects.first()
    genders = [
        {'name': 'Male', 'y': covid.male, 'color': '#95CEFF'},
        {'name': 'Female', 'y': covid.female, 'color': '#F15C80'},
        {'name': 'Unknown', 'y': covid.unknown, 'color': '#696969'},
    ]
    gender_highest = max([
        covid.male,
        covid.female,
        covid.unknown
    ])
    for gender in genders:
        if gender['y'] == gender_highest:
            gender['sliced'] = 1
            gender['selected'] = 1
    return Response(genders, status.HTTP_200_OK)
