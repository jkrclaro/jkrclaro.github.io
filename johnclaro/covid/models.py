from datetime import datetime
from django.utils.timezone import make_aware

from django.db import models

from . import managers


class JohnHopkinsCase(models.Model):
    date = models.DateField()
    country = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recoveries = models.FloatField()
    objects = managers.JohnHopkinsCaseManager()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.cases}-{self.deaths}-' \
               f'{self.recoveries}'

    class Meta:
        db_table = 'john_hopkins_cases'
        unique_together = ('date', 'country', 'cases', 'deaths', 'recoveries',)
        ordering = ['-date']


class HSECase(models.Model):
    date = models.DateField(primary_key=True)
    confirmedcovidcases = models.IntegerField()
    totalconfirmedcovidcases = models.IntegerField()
    confirmedcoviddeaths = models.IntegerField()
    totalcoviddeaths = models.IntegerField()
    statisticsprofiledate = models.DateField()
    covidcasesconfirmed = models.IntegerField(null=True, blank=True)
    hospitalisedcovidcases = models.IntegerField(null=True, blank=True)
    requiringicucovidcases = models.IntegerField(null=True, blank=True)
    healthcareworkerscovidcases = models.IntegerField(null=True, blank=True)
    clustersnotified = models.IntegerField(null=True, blank=True)
    hospitalisedaged5 = models.IntegerField(null=True, blank=True)
    hospitalisedaged5to14 = models.IntegerField(null=True, blank=True)
    hospitalisedaged15to24 = models.IntegerField(null=True, blank=True)
    hospitalisedaged25to34 = models.IntegerField(null=True, blank=True)
    hospitalisedaged35to44 = models.IntegerField(null=True, blank=True)
    hospitalisedaged45to54 = models.IntegerField(null=True, blank=True)
    hospitalisedaged55to64 = models.IntegerField(null=True, blank=True)
    hospitalisedaged65up = models.IntegerField(null=True, blank=True)
    male = models.IntegerField(null=True, blank=True)
    female = models.IntegerField(null=True, blank=True)
    unknown = models.IntegerField(null=True, blank=True)
    aged1to4 = models.IntegerField(null=True, blank=True)
    aged5to14 = models.IntegerField(null=True, blank=True)
    aged15to24 = models.IntegerField(null=True, blank=True)
    aged25to34 = models.IntegerField(null=True, blank=True)
    aged35to44 = models.IntegerField(null=True, blank=True)
    aged45to54 = models.IntegerField(null=True, blank=True)
    aged55to64 = models.IntegerField(null=True, blank=True)
    aged65up = models.IntegerField(null=True, blank=True)
    median_age = models.IntegerField(null=True, blank=True)
    communitytransmission = models.IntegerField()
    closecontact = models.IntegerField()
    travelabroad = models.IntegerField()
    fid = models.IntegerField()
    objects = managers.HSECaseManager()

    def __str__(self):
        output = self.date.strftime('%Y-%m-%d') if self.date else ''
        return output

    class Meta:
        db_table = 'hse_cases'
        ordering = ['-date']
