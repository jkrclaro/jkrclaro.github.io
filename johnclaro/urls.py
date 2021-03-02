from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static

from .views import show_covid, upsert_covid

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='bio.html'), name='bio'),
    path('covid', show_covid, name='covid'),
    path('covid/upsert', upsert_covid, name='covid_upsert'),
]

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static('/media/', document_root='media')  # might be wrong
