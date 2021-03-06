from django.db import models
from django.db.utils import IntegrityError


class JohnHopkinsManager(models.Manager):
    def upsert_john_hopkins(self, date, country, cases, deaths, recoveries):
        try:
            john_hopkins = self.create(
                date=date,
                country=country,
                cases=cases,
                deaths=deaths,
                recoveries=recoveries
            )
            return john_hopkins
        except IntegrityError:
            pass


class JohnHopkins(models.Model):
    date = models.DateTimeField()
    country = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recoveries = models.FloatField()
    objects = JohnHopkinsManager()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.cases}-{self.deaths}-' \
                f'{self.recoveries}'

    class Meta:
        db_table = 'john_hopkins'
        unique_together = ('date', 'country', 'cases', 'deaths', 'recoveries',)
        ordering = ['-date']
