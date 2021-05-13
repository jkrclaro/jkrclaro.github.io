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
ssh -i bitnami.pem bitnami@54.170.19.198
```

## Github Actions

Create SSH public/private keys
```sh-session
ssh-keygen -t rsa -C 'jkrclaro@gmail.com'
echo $(cat .ssh/id_rsa.pub) >> .ssh/authorized_keys
base64 -w0 .ssh/id_rsa
```

## Terraform

- Launch EC2
  - Install [Git](https://cloudaffaire.com/how-to-install-git-in-aws-ec2-instance/)
  - Install [Python & Pip](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-linux.html)
  - Install [gcc](https://linuxhostsupport.com/blog/how-to-install-gcc-on-centos-7/)
  - Update [SQLite version of Python](https://github.com/apache/airflow/issues/14208)
- Create Elastic IP
  - Associate Elastic IP to EC2
- Initialize Airflow
  - airflow db init
  - airflow users create --username john --firstname John --lastname Claro --role Admin --email jkrclaro@gmail.com
  - Modify airflow.cfg
    - dags_folder
    - load_examples = False
    - load_default_connections = False
    - default_timezone = Europe/Dublin
    - default_ui_timezone = Europe/Dublin
  - airflow webserver --port 8080 -D
  - airflow scheduler