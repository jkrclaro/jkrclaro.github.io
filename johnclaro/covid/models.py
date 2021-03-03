from django.db import models


class Covid(models.Model):
    date = models.DateTimeField()
    country = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recovered = models.FloatField()

    def __str__(self):
        return f'{self.date}-{self.country}-{self.state}-{self.cases}-{self.deaths}-{self.recovered}'

    class Meta:
        db_table = 'covids'
