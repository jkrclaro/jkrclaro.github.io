from django.urls import path, re_path

from .views import get_http, do_ping

app_name = 'johnclaro.uptime'

urlpatterns = [
    path('', get_http, name='get_http'),
    path('ping/<host>', do_ping, name='ping'),
]
