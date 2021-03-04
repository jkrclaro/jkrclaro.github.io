import os
from distutils.util import strtobool

from django.core.wsgi import get_wsgi_application


DEBUG = bool(strtobool(os.environ.get('DEBUG', 'True')))
settings_module = 'johnclaro.settings'
if not DEBUG:
    settings_module = 'johnclaro.settings_prod'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
