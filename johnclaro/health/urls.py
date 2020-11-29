from django.urls import path

from .views import pace, body_fat

app_name = 'johnclaro.health'

urlpatterns = [
    path('pace', pace, name='pace'),
    path('body_fat', body_fat, name='body_fat')
]
