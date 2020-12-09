from django import forms


http_choices = [
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
    check_rate = forms.ChoiceField(label='Check rate', choices=http_choices, widget=forms.RadioSelect, initial=900)
    url = forms.URLField(label='URL', max_length=255)
