from django.test import TestCase

from .models import HSECase


class HSECaseTestCase(TestCase):

    def setUp(self):
        HSECase.objects.upsert_case(
            date='2020-02-09',
            confirmedcovidcases=1,
            totalconfirmedcovidcases=1,
            confirmedcoviddeaths=1,
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

    def test_hse_cases_epoch_date(self):
        hse_case = HSECase.objects.get(date='2020-02-09')
        self.assertEqual(hse_case.get_epoch(), 1581206400000)
