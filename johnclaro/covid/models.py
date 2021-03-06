from django.db import models
from django.db.utils import IntegrityError


class CaseManager(models.Manager):
    def upsert_case(self, date, country, cases, deaths, recoveries):
        try:
            case = self.create(
                date=date,
                country=country,
                cases=cases,
                deaths=deaths,
                recoveries=recoveries
            )
            return case
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
