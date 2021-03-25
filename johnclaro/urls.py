from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from django.shortcuts import redirect


def landingpage(request):
    localhost = 'http://localhost:3000'
    frontend = 'https://www.johnclaro.com'
    url = localhost if settings.DEBUG else frontend
    return redirect(url)


urlpatterns = [
    path('', landingpage, name='bio'),
    path('admin/', admin.site.urls),
    path('ironman', TemplateView.as_view(template_name='ironman.html'), name='ironman'),
    path('covid/', include('johnclaro.covid.urls'), name='covid'),
    path('podplayer/', include('johnclaro.podplayer.urls'), name='podplayer'),
    path('accounts/', include('johnclaro.accounts.urls'), name='accounts'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
