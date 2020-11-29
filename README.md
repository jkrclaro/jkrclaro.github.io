# johnclaro-blog
My website.

# Initializing app

```
mkdir johnclaro/health
python manage.py startapp health johnclaro/health
```

# Loading data
```bash
python scripts/fixtures.py && python manage.py loaddata account.json && python manage.py loaddata survey.json
```