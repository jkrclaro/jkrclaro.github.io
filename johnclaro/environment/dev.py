import os
from ..settings import *
from ..settings import BASE_DIR, SIMPLE_JWT


DEBUG = True
SECRET_KEY = 'whyareyoureadingmydevelopmentsecretkey'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

CORS_ALLOW_ALL_ORIGINS = True

SIMPLE_JWT['SIGNING_KEY'] = SECRET_KEY
