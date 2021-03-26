from django.urls import path

from .views import (
    show_cases,
    show_swabs,
    show_vaccines,
    johnhopkins_upsert,
    hse_upsert,
    get_hse_cases,
    get_hse_deaths,
)

app_name = 'covid'

urlpatterns = [
    path('', show_cases, name='cases'),
    path('hse/cases', get_hse_cases, name='get_hse_cases'),
    path('hse/deaths', get_hse_deaths, name='get_hse_deaths'),
    path('swabs', show_swabs, name='swabs'),
    path('vaccines', show_vaccines, name='vaccines'),
    path('johnhopkins/upsert', johnhopkins_upsert, name='johnhopkins_upsert'),
    path('hse/upsert', hse_upsert, name='hse_upsert'),
]
