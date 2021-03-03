import pickle
import base64
import logging

from django.shortcuts import render
from django.http import JsonResponse

from .models import Covid

logger = logging.getLogger(__name__)


def show_covid(request):
    covids = Covid.objects.all()
    return render(request, 'covid.html', {'covids': covids})


def upsert_covid(request):
    logger.info(request)
    if request.method == 'POST':
        df_b64 = request.POST.get('df_b64')
        df = pickle.loads(base64.b64decode(df_b64.encode()))

        for index, row in df.iterrows():
            Covid.objects.upsert_covid(
                date=row.date,
                country=row.country,
                cases=row.cases,
                deaths=row.deaths,
                recoveries=row.recoveries
            )
        return JsonResponse({'status': 'Successfully upserted covid data'})
    else:
        return JsonResponse({'status': 'Got GET request'})
