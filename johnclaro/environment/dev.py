import os
from ..settings import *
from ..settings import BASE_DIR


DEBUG = True
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

CORS_ALLOW_ALL_ORIGINS = True
