from django.urls import path

from .views import index

app_name = 'johnclaro.uptime'

urlpatterns = [
    path('', index, name='index'),
]
