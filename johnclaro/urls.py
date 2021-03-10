from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

from .covid.views import (
    show_cases,
    show_swabs,
    show_vaccines,
    johnhopkins_cases_upsert,
    hse_cases_upsert,
    hse_swabs_upsert,
    hse_counties_upsert,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='bio.html'), name='bio'),
    path('covid', show_cases, name='cases'),
    path('covid/swabs', show_swabs, name='swabs'),
    path('covid/vaccines', show_vaccines, name='vaccines'),
    path('johnhopkins/cases/upsert', johnhopkins_cases_upsert, name='johnhopkins_cases_upsert'),
    path('hse/cases/upsert', hse_cases_upsert, name='hse_cases_upsert'),
    path('hse/swabs/upsert', hse_swabs_upsert, name='hse_swabs_upsert'),
    path('hse/counties/upsert', hse_counties_upsert, name='hse_counties_upsert'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
