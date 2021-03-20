from django.urls import path

from .views import (
    show_cases,
    show_swabs,
    show_vaccines,
    johnhopkins_upsert,
    hse_upsert,
)

app_name = 'covid'

urlpatterns = [
    path('', show_cases, name='cases'),
    path('swabs', show_swabs, name='swabs'),
    path('vaccines', show_vaccines, name='vaccines'),
    path('johnhopkins/upsert', johnhopkins_upsert, name='johnhopkins_upsert'),
    path('hse/upsert', hse_upsert, name='hse_upsert'),
]
