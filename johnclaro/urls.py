from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='bio.html'), name='bio'),
    path('covid/', include('johnclaro.covid.urls'), name='covid'),
    path('podplayer/', include('johnclaro.podplayer.urls'), name='podplayer'),
    path('accounts/', include('johnclaro.accounts.urls'), name='accounts'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
