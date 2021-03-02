#!/bin/bash

cp /home/bitnami/website/conf/sample-vhost.conf /opt/bitnami/apache2/conf/vhosts/sample-vhost.conf
cp /home/bitnami/website/conf/sample-https-vhost.conf /opt/bitnami/apache2/conf/vhosts/sample-https-vhost.conf
/opt/bitnami/ctlscript.sh restart apache
