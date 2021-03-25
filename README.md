# backend
[![Test](https://github.com/johnclaro/backend/actions/workflows/test.yml/badge.svg)](https://github.com/johnclaro/backend/actions/workflows/test.yml)
[![Deploy](https://github.com/johnclaro/backend/actions/workflows/deploy.yml/badge.svg)](https://github.com/johnclaro/backend/actions/workflows/deploy.yml)

Backend for my personal website

## Installation

Python 3.8.7
```sh-session
pip install -r requirements.txt
```

## Usage

Run the app
```sh-session
python manage.py runserver
```


## Django

To create an app
```sh-session
mkdir johnclaro/nike
python manage.py startapp nike johnclaro/nike
```

## Lightsail

Auto-configure SSL
```sh-session
sudo /opt/bitnami/bncert-tool
```

Set owner of db.sqlite3 to daemon
```sh-session
# bitnami
sudo chown bitnami /home/bitnami/backend/ && sudo chown bitnami /home/bitnami/backend/db.sqlite3

# daemon
sudo chown daemon /home/bitnami/backend/ && sudo chown daemon /home/bitnami/backend/db.sqlite3
```

Restart Apache
```sh-session
sudo /opt/bitnami/ctlscript.sh restart apache
```

SSH as normal
```sh-session
ssh -i lightsail.pem bitnami@54.76.194.219
```

## Github Actions

Create SSH public/private keys
```sh-session
ssh-keygen -t rsa -C 'jkrclaro@gmail.com'
echo $(cat .ssh/id_rsa.pub) >> .ssh/authorized_keys
base64 -w0 .ssh/id_rsa
```