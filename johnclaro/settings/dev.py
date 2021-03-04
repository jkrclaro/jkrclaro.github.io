import os
from .base import *
from .base import BASE_DIR


DEBUG = True
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
