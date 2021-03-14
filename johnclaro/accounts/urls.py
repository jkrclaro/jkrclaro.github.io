from django.urls import path

from rest_framework_simplejwt.views import (
    TokenRefreshView
)
from .views import LoginView, user_retrieve, register

app_name = 'accounts'

urlpatterns = [
    path('user', user_retrieve, name='user_retrieve'),
    path('register', register, name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('refresh', TokenRefreshView.as_view(), name='refresh')
]
