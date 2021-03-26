from django.test import TestCase
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

from .models import HSECase


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
            male=0,
            female=0,
            unknown=0,
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

    def test_should_pass_when_get_epoch_matches_unix_timestamp(self):
        hse_case = HSECase.objects.get(date='2020-02-09')
        output = hse_case.get_epoch()
        expected = 1581206400000
        self.assertEqual(output, expected)
    
    def test_should_pass_when_get_hse_cases_api_matches_expected_data(self):
        response = self.client.post('/covid/hse/cases')
        output = response.json()
        expected = [[1581206400000, 1]]
        self.assertEqual(output, expected)

    def test_should_pass_when_get_hse_deaths_api_matches_expected_data(self):
        response = self.client.post('/covid/hse/deaths')
        output = response.json()
        expected = [[1581206400000, 2]]
        self.assertEqual(output, expected)
