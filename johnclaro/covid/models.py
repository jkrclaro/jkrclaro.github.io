import logging

from django.db import models
from django.db.utils import IntegrityError

logger = logging.getLogger('default')


class CovidManager(models.Manager):
    def upsert_covid(self, date, country, cases, deaths, recoveries):
        try:
            covid = self.create(
                date=date,
                country=country,
                cases=cases,
                deaths=deaths,
                recoveries=recoveries
            )
            return covid
        except IntegrityError:
            pass
        except Exception as exception:
            logger.error(exception)


class Covid(models.Model):
    date = models.DateTimeField()
    country = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recoveries = models.FloatField()
    objects = CovidManager()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.cases}-{self.deaths}-' \
                f'{self.recoveries}'

    class Meta:
        db_table = 'covids'
        unique_together = ('date', 'country', 'cases', 'deaths', 'recoveries',)
        ordering = ['-date']
