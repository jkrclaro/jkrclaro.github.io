from django.shortcuts import render, redirect

from .helpers import ping
from .forms import HTTPForm, PingForm


def get_http(request):
    form = HTTPForm()
    if request.method == 'POST':
        form = HTTPForm(request.POST)
        if form.is_valid():
            return redirect('uptime:get_http')

    context = {'form': form}
    return render(request, 'uptime/http.html', context)


def get_ping(request):
    form = PingForm()
    if request.method == 'POST':
        form = PingForm(request.POST)
        if form.is_valid():
            return redirect('uptime:get_ping')

    context = {'form': form}
    return render(request, 'uptime/ping.html', context)
