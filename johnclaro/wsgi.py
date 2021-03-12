import os
import getpass

from django.core.wsgi import get_wsgi_application


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'johnclaro.settings')

application = get_wsgi_application()
