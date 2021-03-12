# website
[![Website](https://github.com/johnclaro/website/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/johnclaro/website/actions/workflows/main.yml)

My personal website

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
mkdir johnclaro/covid
python manage.py startapp covid johnclaro/covid
```

## Github Actions

Create SSH public/private keys
```sh-session
ssh-keygen -t rsa -C 'jkrclaro@gmail.com'
base64 -w0 id_rsa /home/bitnami/.ssh/id_rsa
```

## Lightsail

Restart Apache
```sh-session
sudo /opt/bitnami/ctlscript.sh restart apache
```

Auto-configure SSL
```sh-session
sudo /opt/bitnami/bncert-tool
```

Set owner of db.sqlite3 to daemon
```sh-session
# bitnami
sudo chown bitnami /home/bitnami/website/ && sudo chown bitnami /home/bitnami/website/db.sqlite3

# daemon
sudo chown daemon /home/bitnami/website/ && sudo chown daemon /home/bitnami/website/db.sqlite3
```

SSH as normal
```sh-session
ssh -i lightsail.pem bitnami@54.76.194.219
```