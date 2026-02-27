#!/bin/bash

apt update -y
apt install -y apache2 php libapache2-mod-php php-cli php-mysql php-gd php-xml php-curl php-mbstring php-intl php-zip php-soap php-bcmath wget

systemctl enable apache2
systemctl start apache2

cd /var/www/html/

wget https://download.moodle.org/download.php/direct/stable405/moodle-latest-405.tgz
tar -zxvf moodle-latest-405.tgz
rm moodle-latest-405.tgz

mkdir -p /var/www/moodledata

chown -R www-data:www-data /var/www/moodledata/
chmod -R 755 /var/www/moodledata/

chown -R www-data:www-data moodle
chmod -R 755 moodle

PHPINI=$(php -i | grep "Loaded Configuration File" | awk '{print $5}')

sed -i "s/^max_input_vars.*/max_input_vars = 5000/" $PHPINI
sed -i "s/^memory_limit.*/memory_limit = 512M/" $PHPINI
sed -i "s/^post_max_size.*/post_max_size = 100M/" $PHPINI
sed -i "s/^upload_max_filesize.*/upload_max_filesize = 100M/" $PHPINI

systemctl restart apache2

echo "=== WEB SERVER MOODLE SIAP ==="
