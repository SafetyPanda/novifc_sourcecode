#!/bin/bash

# rebuildSite.sh - Quick, hacked together rebuilder

$localRepo="/root/novifc_sourcecode"
$websiteDirectory1="/var/www/novisplace.org"
$websiteDirectory2=/var/www/novisplace_site
rm -rf $websiteDirectory1
rm -rf $websiteDirectory2

cp -r "$localRepo/novisplace_site/" /var/www/
chmod 777 /var/www/novisplace_site/startSite.sh

/var/www/novisplace_site/startSite.sh