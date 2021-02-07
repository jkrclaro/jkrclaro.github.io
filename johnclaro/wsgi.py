"""
WSGI config for johnclaro project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/home/bitnami/website')
os.environ.setdefault('PYTHON_EGG_CACHE', '/home/bitnami/website/egg_cache')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'johnclaro.settings')

application = get_wsgi_application()
