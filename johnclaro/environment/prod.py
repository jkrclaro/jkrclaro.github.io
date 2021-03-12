import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ORIGIN_WHITELIST = [
    'https://podplayer.vercel.app',
]
CSRF_TRUSTED_ORIGINS = [
    'https://podplayer.vercel.app',
]
