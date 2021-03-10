from django.contrib import admin

from .models import JohnHopkinsCase, HSECase, HSECounty, HSESwab

admin.site.register(JohnHopkinsCase)
admin.site.register(HSECase)
admin.site.register(HSECounty)
admin.site.register(HSESwab)
