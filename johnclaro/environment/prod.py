import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = False
SECRET_KEY = os.environ['SECRET_KEY']
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ALLOWED_ORIGINS = [
    'https://podplayer.vercel.app'
]
