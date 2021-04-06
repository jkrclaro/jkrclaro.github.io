import json
from datetime import timedelta

from django.shortcuts import render
from django.contrib.humanize.templatetags.humanize import intcomma
from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from .models import JohnHopkinsCase, HSECase, HSECounty, HSESwab


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
    return Response(None)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_cases_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    for item in items:
        HSECase.objects.upsert_case(**item)
    else:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    return Response(None)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_counties_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    for item in items:
        HSECounty.objects.upsert_county(**item)
    else:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    return Response(None)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def hse_swabs_upsert(request):
    items = json.loads(request.body.decode('utf-8'))
    for item in items:
        HSESwab.objects.upsert_swab(**item)
    else:
        return Response(None, status.HTTP_400_BAD_REQUEST)

    return Response(None)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_cases(request):
    cases = []
    for obj in HSECase.objects.order_by('date'):
        case = [obj.get_epoch(), obj.confirmedcovidcases]
        cases.append(case)
    return Response(cases)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_deaths(request):
    deaths = []
    for obj in HSECase.objects.order_by('date'):
        death = [obj.get_epoch(), obj.confirmedcoviddeaths]
        deaths.append(death)
    return Response(deaths)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_counties(request):
    counties = (
        {'name': obj.countyname, 'y': obj.confirmedcovidcases}
        for obj in HSECounty.objects.all()
    )
    return Response(counties)


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
    return Response(ages)


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
    return Response(genders)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_latest_case(request):
    case = HSECase.objects.first()
    oldest_case = HSECase.objects.last()
    data = {
        'latest_date': case.date.strftime('%d %b %Y'),
        'confirmedcovidcases': intcomma(case.confirmedcovidcases),
        'confirmedcoviddeaths': intcomma(case.confirmedcoviddeaths),
        'totalconfirmedcovidcases': intcomma(case.totalconfirmedcovidcases),
        'totalcoviddeaths': intcomma(case.totalcoviddeaths),
        'oldest_date': oldest_case.date.strftime('%d %b %Y'),
    }
    return Response(data)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_swabs(request):
    cases = []
    positives = []
    days = request.data.get('days', 0)

    cases_qs = HSECase.objects
    swabs_qs = HSESwab.objects
    if days:
        first_swab = HSESwab.objects.first()
        date = first_swab.date_hpsc - timedelta(days=days)
        cases_qs = cases_qs.filter(date__gte=date)
        swabs_qs = swabs_qs.filter(date_hpsc__gte=date)

    for case_qs in cases_qs.order_by('date'):
        case = (
            case_qs.get_epoch(),
            case_qs.confirmedcovidcases,
        )
        cases.append(case)

    for swab_qs in swabs_qs.order_by('date_hpsc'):
        swab = (
            swab_qs.get_epoch(),
            swab_qs.pos1,
        )
        positives.append(swab)

    data = {
        'positives': positives,
        'cases': cases,
    }
    return Response(data)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def get_hse_latest_swab(request):
    swab = HSESwab.objects.first()
    oldest_swab = HSESwab.objects.last()
    data = {
        'latest_date': swab.date_hpsc.strftime('%d %b %Y'),
        'pos1': intcomma(swab.pos1),
        'posr1': intcomma(swab.posr1),
        'prate': intcomma(swab.prate),
        'positive': intcomma(swab.positive),
        'oldest_date': oldest_swab.date_hpsc.strftime('%d %b %Y'),
    }
    return Response(data)
