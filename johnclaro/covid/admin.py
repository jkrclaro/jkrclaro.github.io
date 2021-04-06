from django.contrib import admin

from .models import HSECase, HSECounty, HSESwab

admin.site.register(HSECase)
admin.site.register(HSECounty)
admin.site.register(HSESwab)
