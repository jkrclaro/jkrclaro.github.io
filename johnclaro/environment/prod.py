import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ALLOW_ALL_ORIGINS = True
CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False
