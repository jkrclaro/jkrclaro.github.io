from django.test import TestCase
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

from .models import HSECase, HSECounty, HSESwab


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
            confirmedcovidcases=424242,
            totalconfirmedcovidcases=424242,
            confirmedcoviddeaths=424242,
            totalcoviddeaths=424242,
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
            hospitalisedaged65to74=0,
            hospitalisedaged75to84=0,
            hospitalisedaged85up=0,
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
            aged65to74=0,
            aged75to84=0,
            aged85up=0,
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
            timestampdate='2020-02-09',
        )
    
        HSESwab.objects.upsert_swab(
            date_hpsc='2020-02-09',
            hospitals=1,
            totallabs=1,
            nonhospitals=1,
            positive=424242,
            prate=2.1,
            test24=1,
            test7=1,
            pos7=1,
            posr7=2.1,
            pos1=424242,
            posr1=2.1,
            fid=1,
        )

    def test_should_pass_when_get_epoch_matches_unix_timestamp(self):
        hse_case = HSECase.objects.get(date='2020-02-09')
        output = hse_case.get_epoch()
        expected = 1581206400000
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_cases_response_matches_expected(self):
        response = self.client.post('/hse/cases')
        output = response.json()
        expected = [[1581206400000, 424242]]
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_latest_case_response_matches_expected(self):
        response = self.client.post('/hse/cases/latest')
        output = response.json()
        expected = {
            'confirmedcovidcases': '424,242',
            'confirmedcoviddeaths': '424,242',
            'latest_date': '09 Feb 2020',
            'oldest_date': '09 Feb 2020',
            'totalconfirmedcovidcases': '424,242',
            'totalcoviddeaths': '424,242'
        }
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_deaths_response_matches_expected(self):
        response = self.client.post('/hse/deaths')
        output = response.json()
        expected = [[1581206400000, 424242]]
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_counties_response_matches_expected(self):
        response = self.client.post('/hse/counties')
        output = response.json()
        expected = [
            {'name': 'Wexford', 'y': 1},
        ]
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_ages_response_matches_expected(self):
        response = self.client.post('/hse/ages')
        output = response.json()
        expected = [
            {'name': '1-4', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '5-14', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '15-24', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '25-34', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '35-44', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '45-54', 'y': 0, 'sliced': 1, 'selected': 1}, 
            {'name': '55-64', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '65-74', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '75-84', 'y': 0, 'sliced': 1, 'selected': 1},
            {'name': '85+', 'y': 0, 'sliced': 1, 'selected': 1},
        ]
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_genders_response_matches_expected(self):
        response = self.client.post('/hse/genders')
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

    def test_should_pass_when_get_hse_swabs_response_matches_expected(self):
        response = self.client.post('/hse/swabs')
        output = response.json()
        expected = {
            'positives': [
                [1581206400000, 424242]
            ],
            'cases': [
                [1581206400000, 424242]
            ],
        }
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_swab_response_matches_expected(self):
        response = self.client.post('/hse/swabs/latest')
        output = response.json()
        expected = {
            'latest_date': '09 Feb 2020',
            'oldest_date': '09 Feb 2020',
            'pos1': '424,242',
            'positive': '424,242',
            'posr1': '2.1',
            'prate': '2.1'
        }
        self.assertEqual(output, expected)
