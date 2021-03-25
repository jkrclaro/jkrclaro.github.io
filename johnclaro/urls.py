from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from django.shortcuts import redirect

from rest_framework import decorators, permissions, status
from rest_framework.response import Response


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def landingpage(request):
    return Response(None, status.HTTP_200_OK)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', landingpage, name='bio'),
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
