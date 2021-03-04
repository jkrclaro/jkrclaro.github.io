import os
import getpass

from django.core.wsgi import get_wsgi_application


settings_module = 'johnclaro.settings_dev'
if getpass.getuser() == 'daemon':
    settings_module = 'johnclaro.settings_prod'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
