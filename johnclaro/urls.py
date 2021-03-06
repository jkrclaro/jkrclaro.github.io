from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

from .covid.views import show_covid, case_upsert

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='bio.html'), name='bio'),
    path('covid', show_covid, name='covid'),
    path('cases/upsert', case_upsert, name='case_upsert'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
