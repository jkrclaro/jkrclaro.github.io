import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ALLOWED_ORIGINS = [
    'https://podplayer.vercel.app/'
]
