import os
import getpass
import secrets
from datetime import timedelta


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALLOWED_HOSTS = [
    '*'
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',
    'johnclaro.accounts.apps.AccountsConfig',
    'johnclaro.covid.apps.CovidConfig',
    'johnclaro.podplayer.apps.PodplayerConfig',
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsPostCsrfMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'johnclaro.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'johnclaro/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'johnclaro.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

PV = 'django.contrib.auth.password_validation'
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': f'{PV}.UserAttributeSimilarityValidator'},
    {'NAME': f'{PV}.MinimumLengthValidator'},
    {'NAME': f'{PV}.CommonPasswordValidator'},
    {'NAME': f'{PV}.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'

AUTH_USER_MODEL = 'accounts.User'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DATETIME_FORMAT': '%b %m, %Y'
}

if getpass.getuser() not in ('daemon', 'bitnami',):
    DEBUG = True
    SECRET_KEY = 'dev-secret-key'
    CORS_ALLOW_ALL_ORIGINS = True
    STATICFILES_DIRS = (
        os.path.join(BASE_DIR, 'static'),
    )
else:
    DEBUG = False
    SECRET_KEY = secrets.token_urlsafe(32)
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    CORS_ALLOWED_ORIGINS = (
        'https://podplayer.vercel.app',
    )
    CSRF_TRUSTED_ORIGINS = (
        'https://podplayer.vercel.app',
    )

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=183),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=365),
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('JWT',),
}
