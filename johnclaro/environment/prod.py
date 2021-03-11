import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ORIGIN_WHITELIST = [
    "https://fireside.johnclaro.com",
]
