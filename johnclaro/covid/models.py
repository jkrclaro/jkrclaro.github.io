from datetime import timedelta

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
        date = self.date.strftime('%d %b %Y')
        return date

    class Meta:
        db_table = 'hse_cases'
        ordering = ['-date']


class HSECounty(models.Model):
    origid = models.IntegerField(null=True, blank=True)
    countyname = models.CharField(max_length=255)
    populationcensus16 = models.IntegerField()
    igeasting = models.IntegerField()
    ignorthing = models.IntegerField()
    lat = models.FloatField()
    long = models.FloatField()
    uniquegeographicidentifier = models.CharField(max_length=255)
    confirmedcovidcases = models.IntegerField()
    populationproportioncovidcases = models.FloatField()
    confirmedcoviddeaths = models.CharField(max_length=255, null=True, blank=True)
    confirmedcovidrecovered = models.CharField(max_length=255, null=True, blank=True)
    x = models.FloatField()
    y = models.FloatField()
    fid = models.IntegerField()
    timestampdate = models.DateField()
    objects = managers.HSECountyManager()

    def __str__(self):
        return self.countyname

    class Meta:
        db_table = 'hse_counties'
        ordering = ['countyname']

    def get_hc_keys(self):
        codes = {
            # 'None': 'ie-5551',
            'Mayo': ('ie-mo',),
            'Kerry': ('ie-ky',),
            'Donegal': ('ie-dl',),
            'Clare': ('ie-ce',),
            'Longford': ('ie-ld',),
            'Cavan': ('ie-cn',),
            'Monaghan': ('ie-mn',),
            'Galway': ('ie-gy', 'ie-1510',),
            'Cork': ('ie-ck', 'ie-491',),
            'Waterford': ('ie-wd', 'ie-2363',),
            'Dublin': ('ie-dn', 'ie-1528', 'ie-7034', 'ie-7035',),
            'Louth': ('ie-lh',),
            'Meath': ('ie-mh',),
            'Offaly': ('ie-oy',),
            'Westmeath': ('ie-wh',),
            'Wexford': ('ie-wx',),
            'Carlow': ('ie-cw',),
            'Wicklow': ('ie-ww',),
            'Kildare': ('ie-ke',),
            'Kilkenny': ('ie-kk',),
            'Laoighis': ('ie-ls',),
            'Tipperary': ('ie-ty', 'ie-7033',),
            'Limerick': ('ie-lk', 'ie-1533',),
            'Roscommon': ('ie-rn',),
            'Sligo': ('ie-so',),
            'Leitrim': ('ie-lm',),
        }

        # Change key names based on HSE dataset
        codes['Laois'] = codes.pop('Laoighis')

        code = codes[self.countyname]
        return code


class HSESwab(models.Model):
    date_hpsc = models.DateField()
    hospitals = models.IntegerField()
    totallabs = models.IntegerField()
    nonhospitals = models.IntegerField()
    positive = models.IntegerField()
    prate = models.FloatField()
    test24 = models.IntegerField()
    test7 = models.IntegerField()
    pos7 = models.IntegerField()
    posr7 = models.FloatField()
    pos1 = models.IntegerField()
    posr1 = models.FloatField()
    fid = models.IntegerField()
    objects = managers.HSESwabManager()

    def __str__(self):
        date = self.date_hpsc.strftime('%d %b %Y')
        return date

    class Meta:
        db_table = 'hse_swabs'
        ordering = ['-date_hpsc']

    def subtract_7_days(self):
        seven_days_ago = self.date_hpsc - timedelta(days=7)
        return seven_days_ago
