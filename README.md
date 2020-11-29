# johnclaro-blog
My website.

# Initializing app

```
mkdir johnclaro/pace
python manage.py startapp pace johnclaro/pace
```

# Loading data
```bash
python scripts/fixtures.py && python manage.py loaddata account.json && python manage.py loaddata survey.json
```