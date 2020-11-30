# johnclaro-blog
My website.

# Initializing app

```
mkdir johnclaro/uptime
python manage.py startapp uptime johnclaro/uptime
```

# Loading data
```bash
python scripts/fixtures.py && python manage.py loaddata account.json && python manage.py loaddata survey.json
```