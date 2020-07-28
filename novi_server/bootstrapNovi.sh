#!/bin/bash

###
# Bootstrap Novi #
#
# THIS SHOULD ONLY BE RUN ONCE ON UBUNTU or DEBIAN DISTROS
###

#             #
# SETUP STUFF #
#             #

$websiteDirectory="/var/www/novisplace.org"
$nginxDirectory="/etc/nginx"

#
# CHECK FOR ROOT OR SUDO
#

if [ "$EUID" -ne 0 ]
  then echo "Please run as root or with sudo..."
  exit
fi

#
# OPENING TEXT
#

echo "#############################################"
echo "#             NOVI BOOTSTRAP                #"
echo "#    Novi Source Code by James Gillman      #"
echo "#                                           #"
echo "# WARNING: ONLY RUN ON DEBIAN BASED DISTROS #"
echo "#-------------------------------------------#"
echo "#         PRESS ANY KEY TO CONTINUE         #"
echo "#############################################"


#
# INSTALL PACKAGES
#

apt update && apt upgrade

apt install ruby -y
apt install ruby-dev -y
apt install libopus-dev -y
apt install nginx -y
apt install cron -y
apt install dialog -y
apt install maven -y
apt install nodejs -y

gem install discordrb
gem install configatron
gem install streamio-ffmpeg
gem install specific_install
gem specfic_install https://github.com/xivapi/xivapi-ruby.git

#
# CONFIGURE NGINX & WEBSITE 
#

rm /etc/nginx/sites-enabled/default

# COPY OVER CONFIG FILES

rm -rf $nginxDirectory/sites-available
cp -r nginx_config/sites-available $nginxDirectory

cp nginx_config/

#SET FIREWALL SETTINGS
ufw allow 'NGINX Full'
ufw allow ssh
ufw enable

# RESTART NGINX
nginx -s reload
service nginx restart

#
# INSTALL CERTBOT
#

apt-get install software-properties-common
add-apt-repository universe
add-apt-repository ppa:certbot/certbot
apt-get update
apt-get install certbot python3-certbot-nginx
certbot --nginx

#
# SET CRON JOB FOR MOOGLEBOT
#

systemctl enable cron.service
systemctl start cron.service

crontab -l > mycron

echo "@reboot sleep 60 && ruby /root/novifc_sourcecode/mooglebot/mooglebot.rb &" >> mycron
crontab mycron
rm mycron

#
# START MOOGLEBOT & START WEBSITE
#

cp -r /root/novifc_sourcecode/novisplace_site $websiteDirectory

chmod 777 $websiteDirectory/novisplace_site/startSite.sh
$websiteDirectory/novisplace_site/startSite.sh

sleep 10

shutdown -r +1 "REBOOTING IN 1 MINUTE!!!!"

