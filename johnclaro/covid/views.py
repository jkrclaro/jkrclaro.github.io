import pickle
import base64

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError


def show_covid(request):
    return render(request, 'covid.html')


@csrf_exempt
def upsert_covid(request):
    if request.method == 'POST':
        engine = create_engine('sqlite:///db.sqlite3', echo=False)
        df_b64 = request.POST.get('df_b64')
        df = pickle.loads(base64.b64decode(df_b64.encode()))

        try:
            df.to_sql(
                'covids',
                con=engine,
                if_exists='append',
                index_label='id'
            )
            response = engine.execute('SELECT * FROM covids').fetchall()
            print(response)
        except OperationalError as error:
            print(error)
            pass

    return JsonResponse({'status': 200})
