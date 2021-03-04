import os
import getpass

from django.core.wsgi import get_wsgi_application


settings_module = 'johnclaro.environment.dev'
if getpass.getuser() == 'daemon':
    settings_module = 'johnclaro.environment.prod'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
