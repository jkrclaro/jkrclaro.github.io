from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

from .covid.views import (
    show_covid,
    johnhopkins_cases_upsert,
    hse_cases_upsert,
    hse_swabs_upsert,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='bio.html'), name='bio'),
    path('covid', show_covid, name='covid'),
    path('johnhopkins/cases/upsert', johnhopkins_cases_upsert, name='johnhopkins_cases_upsert'),
    path('hse/cases/upsert', hse_cases_upsert, name='hse_cases_upsert'),
    path('hse/swabs/upsert', hse_swabs_upsert, name='hse_swabs_upsert'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
