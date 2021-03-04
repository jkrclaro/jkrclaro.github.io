import os
import getpass

from django.core.wsgi import get_wsgi_application


settings_module = 'johnclaro.settings'
if getpass.getuser() != 'jc':
    settings_module = 'johnclaro.settings_prod'

print(f'manage.py => {settings_module}')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
