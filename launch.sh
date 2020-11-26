#!/bin/bash

mv /home/bitnami/johnclaro-blog/conf/bitnami.conf /opt/bitnami/apache2/conf/bitnami/bitnami.conf
/opt/bitnami/ctlscript.sh restart apache
