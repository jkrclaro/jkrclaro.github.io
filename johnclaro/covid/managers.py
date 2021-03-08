from datetime import datetime

from django.db import models
from django.db.utils import IntegrityError
from django.utils.timezone import make_aware


TIME_FORMAT = '%Y-%m-%d %H:%M:%S'


class JohnHopkinsCaseManager(models.Manager):
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


class HSECaseManager(models.Manager):
    def upsert_case(self, **kwargs):
        try:
            item = self.objects.filter(date=kwargs['date'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)
