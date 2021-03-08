from datetime import datetime
from django.utils.timezone import make_aware

from django.db import models
from django.db.utils import IntegrityError


class CaseManager(models.Manager):
    def upsert_case(self, **kwargs):
        try:
            kwargs['date'] = make_aware(
                datetime.strptime(kwargs['date'], '%Y-%m-%d %H:%M:%S')
            )
            print(kwargs['date'], type(kwargs['date']))
            print('---')
            self.create(**kwargs)
        except IntegrityError:
            pass


class Case(models.Model):
    date = models.DateTimeField()
    country = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recoveries = models.FloatField()
    objects = CaseManager()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.cases}-{self.deaths}-' \
               f'{self.recoveries}'

    class Meta:
        db_table = 'cases'
        unique_together = ('date', 'country', 'cases', 'deaths', 'recoveries',)
        ordering = ['-date']


class HSECase(models.Model):
    date = models.DateTimeField(primary_key=True)
    confirmedcovidcases = models.IntegerField()
    totalconfirmedcovidcases = models.IntegerField()
    confirmedcoviddeaths = models.IntegerField()
    totalcoviddeaths = models.IntegerField()
    statisticsprofiledate = models.DateTimeField()
    covidcasesconfirmed = models.IntegerField()
    hospitalisedcovidcases = models.IntegerField()
    requiringicucovidcases = models.IntegerField()
    healthcareworkerscovidcases = models.IntegerField()
    clustersnotified = models.IntegerField()
    hospitalisedaged5 = models.IntegerField()
    hospitalisedaged5to14 = models.IntegerField()
    hospitalisedaged15to24 = models.IntegerField()
    hospitalisedaged25to34 = models.IntegerField()
    hospitalisedaged35to44 = models.IntegerField()
    hospitalisedaged45to54 = models.IntegerField()
    hospitalisedaged55to64 = models.IntegerField()
    hospitalisedaged65up = models.IntegerField()
    male = models.IntegerField()
    female = models.IntegerField()
    unknown = models.IntegerField()
    aged1to4 = models.IntegerField()
    aged5to14 = models.IntegerField()
    aged15to24 = models.IntegerField()
    aged25to34 = models.IntegerField()
    aged35to44 = models.IntegerField()
    aged45to54 = models.IntegerField()
    aged55to64 = models.IntegerField()
    aged65up = models.IntegerField()
    median_age = models.IntegerField()
    communitytransmission = models.IntegerField()
    closecontact = models.IntegerField()
    travelabroad = models.IntegerField()
    fid = models.DateTimeField()
    objects = CaseManager()

    class Meta:
        db_table = 'hse_cases'
        ordering = ['-date']
