# johnclaro-blog
My website.

# Projects
[ ] Uptime - Get alerts when a website goes down
[ ] Cron - Be notified when crons don't run properly
[ ] Speed - Monitor your website speed
[ ] Domain - Prevent domains from getting hijacked
[ ] SSL - Never forget to renew your SSL certificates

# Initializing app

```
mkdir johnclaro/uptime
python manage.py startapp uptime johnclaro/uptime
```

# Loading data
```bash
python scripts/fixtures.py && python manage.py loaddata account.json && python manage.py loaddata survey.json
```