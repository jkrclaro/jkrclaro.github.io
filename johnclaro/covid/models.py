from django.db import models
from django.db.utils import IntegrityError


class CovidManager(models.Manager):
    def upsert_covid(self, date, country, cases, deaths, recovered):
        try:
            covid = self.create(
                date=date,
                country=country,
                cases=cases,
                deaths=deaths,
                recovered=recovered
            )
            return covid
        except IntegrityError:
            pass


class Covid(models.Model):
    date = models.DateTimeField()
    country = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recovered = models.FloatField()
    objects = CovidManager()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.cases}-{self.deaths}-' \
                f'{self.recovered}'

    class Meta:
        db_table = 'covids'
        unique_together = ('date', 'country', 'cases', 'deaths', 'recovered',)
