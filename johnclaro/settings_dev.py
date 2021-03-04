import os
from .settings import *
from .settings import BASE_DIR

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
