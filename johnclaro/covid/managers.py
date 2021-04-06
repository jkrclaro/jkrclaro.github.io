from datetime import datetime

from django.db import models
from django.db.utils import IntegrityError


class HSECaseManager(models.Manager):
    def upsert_case(self, **kwargs):
        try:
            item = self.get(date=kwargs['date'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)


class HSECountyManager(models.Manager):
    def upsert_county(self, **kwargs):
        try:
            item = self.get(countyname=kwargs['countyname'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)


class HSESwabManager(models.Manager):
    def upsert_swab(self, **kwargs):
        try:
            item = self.get(date_hpsc=kwargs['date_hpsc'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)
