from django.urls import path

from .views import (
    show_cases,
    show_swabs,
    show_vaccines,
    johnhopkins_cases_upsert,
    hse_cases_upsert,
    hse_swabs_upsert,
    hse_counties_upsert,
)

app_name = 'covid'

urlpatterns = [
    path('', show_cases, name='cases'),
    path('swabs', show_swabs, name='swabs'),
    path('vaccines', show_vaccines, name='vaccines'),
    path('johnhopkins/cases/upsert', johnhopkins_cases_upsert, name='johnhopkins_cases_upsert'),
    path('hse/cases/upsert', hse_cases_upsert, name='hse_cases_upsert'),
    path('hse/swabs/upsert', hse_swabs_upsert, name='hse_swabs_upsert'),
    path('hse/counties/upsert', hse_counties_upsert, name='hse_counties_upsert'),
]
