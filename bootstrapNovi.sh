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

#
# CHECK FOR ROOT OR SUDO
#

if [ "$EUID" -ne 0 ]
  then echo "Please run as root or with sudo..."
  exit
fi

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

gem install discordrb
gem install configatron
gem install streamio-ffmpeg
gem install specific_install
gem specfic_install https://github.com/xivapi/xivapi-ruby.git

#
# CONFIGURE NGINX & WEBSITE WIP
#
nano /etc/nginx/conf.d/novisplace.org.conf
   31  sudo nginx -t
   32  sudo rm /etc/nginx/sites-enabled/default 
   33  sudo nginx -t
   34  nginx -s reload
   35  service nginx restart
   36  ufw allow 'NGINX Full'
   37  ufw allow ssh
   38  ufw enable
   39  service nginx restart
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

cp -r /root/novifc_sourcecode/novisplace_site

