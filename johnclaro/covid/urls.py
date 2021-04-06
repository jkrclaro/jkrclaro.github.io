from django.urls import path

from .views import (
    johnhopkins_upsert,
    get_hse_cases,
    get_hse_latest_case,
    get_hse_deaths,
    get_hse_counties,
    get_hse_ages,
    get_hse_genders,
    get_hse_swabs,
    get_hse_latest_swab,
    hse_cases_upsert,
    hse_counties_upsert,
    hse_swabs_upsert,
)

app_name = 'covid'

urlpatterns = [
    path('hse/cases', get_hse_cases, name='get_hse_cases'),
    path('hse/cases/latest', get_hse_latest_case, name='get_hse_latest_case'),
    path('hse/cases/upsert', hse_cases_upsert, name='hse_cases_upsert'),
    path('hse/deaths', get_hse_deaths, name='get_hse_deaths'),
    path('hse/counties', get_hse_counties, name='get_hse_counties'),
    path('hse/counties/upsert', hse_counties_upsert, name='hse_counties_upsert'),
    path('hse/ages', get_hse_ages, name='get_hse_ages'),
    path('hse/genders', get_hse_genders, name='get_hse_genders'),
    path('hse/swabs', get_hse_swabs, name='get_hse_swabs'),
    path('hse/swabs/latest', get_hse_latest_swab, name='get_hse_latest_swab'),
    path('hse/swabs/upsert', hse_swabs_upsert, name='hse_swabs_upsert'),
    path('johnhopkins/upsert', johnhopkins_upsert, name='johnhopkins_upsert'),
]
