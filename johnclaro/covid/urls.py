from django.urls import path

from .views import (
    show_vaccines,
    johnhopkins_upsert,
    hse_upsert,
    get_hse_cases,
    get_hse_case,
    get_hse_deaths,
    get_hse_counties,
    get_hse_ages,
    get_hse_genders,
    get_swab,
    get_swabs,
)

app_name = 'covid'

urlpatterns = [
    path('hse/case', get_hse_case, name='get_hse_case'),
    path('hse/cases', get_hse_cases, name='get_hse_cases'),
    path('hse/deaths', get_hse_deaths, name='get_hse_deaths'),
    path('hse/counties', get_hse_counties, name='get_hse_counties'),
    path('hse/ages', get_hse_ages, name='get_hse_ages'),
    path('hse/genders', get_hse_genders, name='get_hse_genders'),
    path('hse/swab', get_swab, name='get_swab'),
    path('hse/swabs', get_swabs, name='get_swabs'),
    path('vaccines', show_vaccines, name='vaccines'),
    path('johnhopkins/upsert', johnhopkins_upsert, name='johnhopkins_upsert'),
    path('hse/upsert', hse_upsert, name='hse_upsert'),
]
