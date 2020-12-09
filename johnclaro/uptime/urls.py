from django.urls import path, re_path

from .views import get_http, get_ping

app_name = 'johnclaro.uptime'

urlpatterns = [
    path('http', get_http, name='get_http'),
    path('ping', get_ping, name='get_ping'),
]
