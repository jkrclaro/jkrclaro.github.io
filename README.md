# website
My website

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

Copy conf files then restart Apache
```
sudo cp /opt/bitnami/apache2/conf/vhosts/sample-vhost.conf.disabled /opt/bitnami/apache2/conf/vhosts/sample-vhost.conf
sudo cp /opt/bitnami/apache2/conf/vhosts/sample-https-vhost.conf.disabled /opt/bitnami/apache2/conf/vhosts/sample-https-vhost.conf
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