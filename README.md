# website
[![Website](https://github.com/johnclaro/website/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/johnclaro/website/actions/workflows/main.yml)

My personal website

## App

```
mkdir johnclaro/covid
python manage.py startapp covid johnclaro/covid
```

## SSH

```bash
ssh -i lightsail.pem bitnami@54.76.194.219
```

## Lightsail

Restart Apache
```
sudo /opt/bitnami/ctlscript.sh restart apache
```

Auto-configure SSL
```bash
sudo /opt/bitnami/bncert-tool
```

Create SSH public/private keys
```bash
ssh-keygen -t rsa -C 'jkrclaro@gmail.com'
```

Set owner of db.sqlite3 to daemon
```bash
# bitnami
sudo chown bitnami /home/bitnami/website/ && sudo chown bitnami /home/bitnami/website/db.sqlite3

# daemon
sudo chown daemon /home/bitnami/website/ && sudo chown daemon /home/bitnami/website/db.sqlite3
```