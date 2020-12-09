from django.shortcuts import render, redirect
from django.http import JsonResponse

from .helpers import ping
from .forms import HTTPForm


def get_http(request):
    form = HTTPForm()
    if request.method == 'POST':
        form = HTTPForm(request.POST)
        if form.is_valid():
            return redirect('uptime:get_http')

    context = {'form': form}
    return render(request, 'uptime/index.html', context)


def do_ping(request, host):
    data = {'status': ping(host)}
    return JsonResponse(data)
