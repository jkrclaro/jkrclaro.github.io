# johnclaro-blog
My website.

# Initializing app

```
mkdir johnclaro/books
python manage.py startapp books johnclaro/books
```

# Loading data
```bash
python scripts/fixtures.py && python manage.py loaddata account.json && python manage.py loaddata survey.json
```