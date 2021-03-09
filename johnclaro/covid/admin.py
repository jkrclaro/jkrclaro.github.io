from django.contrib import admin

from .models import JohnHopkinsCase, HSECase, HSECounty

admin.site.register(JohnHopkinsCase)
admin.site.register(HSECase)
admin.site.register(HSECounty)
