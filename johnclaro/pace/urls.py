from django.urls import path

from .views import index

app_name = 'johnclaro.pace'

urlpatterns = [
    path('', index, name='index')
]
