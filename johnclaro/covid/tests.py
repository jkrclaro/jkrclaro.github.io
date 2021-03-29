from django.test import TestCase
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

from .models import HSECase, HSECounty


class HSECaseTestCase(TestCase):

    def setUp(self):
        User = get_user_model()
        user = User.objects.create_user(
            username='foobar',
            email='foobar@gmail.com',
            password='f00b4r123!'
        )
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access}')

        HSECase.objects.upsert_case(
            date='2020-02-09',
            confirmedcovidcases=1,
            totalconfirmedcovidcases=1,
            confirmedcoviddeaths=2,
            totalcoviddeaths=1,
            statisticsprofiledate='2020-02-09',
            covidcasesconfirmed=0,
            hospitalisedcovidcases=0,
            requiringicucovidcases=0,
            healthcareworkerscovidcases=0,
            clustersnotified=0,
            hospitalisedaged5=0,
            hospitalisedaged5to14=0,
            hospitalisedaged15to24=0,
            hospitalisedaged25to34=0,
            hospitalisedaged35to44=0,
            hospitalisedaged45to54=0,
            hospitalisedaged55to64=0,
            hospitalisedaged65up=0,
            male=3,
            female=2,
            unknown=1,
            aged1to4=0,
            aged5to14=0,
            aged15to24=0,
            aged25to34=0,
            aged35to44=0,
            aged45to54=0,
            aged55to64=0,
            aged65up=0,
            median_age=0,
            communitytransmission=1,
            closecontact=1,
            travelabroad=1,
            fid=1,
        )

        HSECounty.objects.upsert_county(
            origid=0,
            countyname='Wexford',
            populationcensus16=1,
            igeasting=1,
            ignorthing=1,
            lat=1.2,
            long=1.2,
            uniquegeographicidentifier='http://data.geohive.ie/resource/county/2ae19629-143d-13a3-e055-000000000001',
            confirmedcovidcases=1,
            populationproportioncovidcases=1.2,
            confirmedcoviddeaths=None,
            confirmedcovidrecovered=None,
            x=1.2,
            y=1.2,
            fid=1,
            timestampdate='2020-02-09'
        )

    def test_should_pass_when_get_epoch_matches_unix_timestamp(self):
        hse_case = HSECase.objects.get(date='2020-02-09')
        output = hse_case.get_epoch()
        expected = 1581206400000
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_cases_response_matches_expected(self):
        response = self.client.post('/covid/hse/cases')
        output = response.json()
        expected = [[1581206400000, 1]]
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_deaths_response_matches_expected(self):
        response = self.client.post('/covid/hse/deaths')
        output = response.json()
        expected = [[1581206400000, 2]]
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_counties_response_matches_expected(self):
        response = self.client.post('/covid/hse/counties')
        output = response.json()
        expected = [{'name': 'Wexford', 'y': 1}]
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_ages_response_matches_expected(self):
        response = self.client.post('/covid/hse/ages')
        output = response.json()
        expected = [
            {'name': '1-4', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '5-14', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '15-24', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '25-34', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '35-44', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '45-54', 'y': 0, 'sliced': 1, 'selected': 1}, 
            {'name': '55-64', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '65+', 'y': 0, 'sliced': 1, 'selected': 1}
        ]
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_genders_response_matches_expected(self):
        response = self.client.post('/covid/hse/genders')
        output = response.json()
        expected = [
            {
                'name': 'Male',
                'y': 3,
                'color': '#95CEFF',
                'sliced': 1,
                'selected': 1
            },
            {
                'name': 'Female',
                'y': 2,
                'color': '#F15C80'
            },
            {
                'name': 'Unknown',
                'y': 1,
                'color': '#696969'
            }
        ]
        self.assertEqual(output, expected)
