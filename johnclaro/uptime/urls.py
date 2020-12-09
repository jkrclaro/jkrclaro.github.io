from django.urls import path, re_path

from .views import index, do_ping

app_name = 'johnclaro.uptime'

urlpatterns = [
    path('', index, name='index'),
    path('ping/<host>', do_ping, name='ping'),
]
