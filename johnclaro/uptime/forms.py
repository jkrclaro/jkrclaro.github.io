from django import forms


check_rate_choices = [
    (0, 'Constant'),
    (30, '30 Secs'),
    (60, '1 Min'),
    (300, '5 Mins'),
    (900, '15 Mins'),
    (1800, '30 Mins'),
    (3600, '1 Hour'),
    (86400, '24 Hours'),
]


class HTTPForm(forms.Form):
    check_rate = forms.ChoiceField(label='Check rate', choices=check_rate_choices, widget=forms.RadioSelect())
    url = forms.URLField(label='URL', max_length=255)


class PingForm(forms.Form):
    check_rate = forms.ChoiceField(label='Check rate', choices=check_rate_choices, widget=forms.RadioSelect())
    url = forms.URLField(label='IPv4 or Domain', max_length=255)
