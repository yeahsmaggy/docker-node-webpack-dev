#install lamp  amazon ami 
#https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html
sudo yum update -y
sudo yum install -y httpd24 php70 mysql56-server php70-mysqlnd
sudo service httpd start
sudo chkconfig httpd on
chkconfig --list httpd
sudo usermod -a -G apache ec2-user
exit
ssh -i "aws.pem" ec2-user@ec2-18-130-176-10.eu-west-2.compute.amazonaws.com
sudo chown -R ec2-user:apache /var/www
sudo chmod 2775 /var/www
find /var/www -type d -exec sudo chmod 2775 {} \;
find /var/www -type f -exec sudo chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
#add inbound rule port 80 to security group
#go to http://ec2-18-130-176-10.eu-west-2.compute.amazonaws.com/phpinfo.php
rm /var/www/html/phpinfo.php
sudo service mysqld start
sudo mysql_secure_installation
#pa55pa55 root password for mysql and ssh key
y
y
y
y
sudo chkconfig mysqld on

#https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-wordpress.html
sudo chown -R apache /var/www && sudo chgrp -R apache /var/www && sudo chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \;
sudo service httpd restart

#https://gist.github.com/davejamesmiller/1965636
#issue with home/site url

sudo vim /etc/httpd/conf/httpd.conf

#git
sudo yum install git
git clone git@bitbucket.org:weaveoftheride/codebloc.git
cp -r codebloc/* /var/www/html/
cp -r /var/www/html/* /var/www/html/codebloc


#ssh access for bitbucket
ssh-keygen
eval `ssh-agent` 
ssh-add ~/.ssh/id_rsa.pub
chmod 400 /home/ec2-user/.ssh/id_rsa.pub
cat ~/.ssh/id_rsa.pub

#transferring files to instance
scp -i aws.pem trail_hardtails.txt ec2-user@ec2-18-130-176-10.eu-west-2.compute.amazonaws.com:~
scp -i aws.pem .htaccess ec2-user@ec2-18-130-176-10.eu-west-2.compute.amazonaws.com:/var/www/html/

#transfer shared files folder to the remote server
scp -i aws.pem -r  shared/ ec2-user@ec2-18-130-176-10.eu-west-2.compute.amazonaws.com:/var/www/html/shared/

## RDS

# ajwelchdesigndb
# ajwddbuser
# 78ioHXPh8p16

mysql -h ajwelchdesigndb.c7jgicgke01s.eu-west-2.rds.amazonaws.com -P 3306 -u ajwddbuser -p
mysql -h ajwelchdesigndb.c7jgicgke01s.eu-west-2.rds.amazonaws.com -u ajwddbuser -p  ajwelchdesigndb < andrewwe_ajwelchdesign.sql


#fix issue with timber image resize
sudo yum install php70-gd
#https://serverfault.com/questions/809640/php5-gd-error-linux

#remember .htaccess is still set as 777

#setting up dns / my domain -> ec2 instance
#https://stackoverflow.com/questions/21763205/how-can-i-find-my-nameservers-on-amazon-ec2-server#21763724
#http://techshangrila.blogspot.com/2016/01/how-to-point-godaddy-domain-to-amazon.html


# set up godaddy to route to ec2
# Since your domain is registered with Godaddy, you can continue using their DNS service and point “A” record for your website to your Amazon Ec2 server
# You will have to update “A” record for the following
# @ A Your Amazon Ec2 server I
# WWW A Your Amazon Ec2 server I
# If you have additional subdomains, you will need to add “A” record for them as well

# lets encrypt tutorial https://medium.com/@idevdebug/create-ssl-certificate-with-lets-encrypt-for-ec2-amazon-linux-ami-1ec31df59e1d
# ran into this problem http://tomaskalabis.com/wordpress/letsencrypt-unable-to-find-a-virtual-host-listening-on-port-80/
# ran into this problem https://serverfault.com/questions/469345/install-configure-mod-ssl-on-amazon-ec2-instance
# to install mod_ssl run yum install mod24_ssl  instead

# capistrano deployment
# https://stackoverflow.com/questions/12967918/deploy-with-capistrano-using-a-pem-file

# other ref
#https://avastechnology.wordpress.com/2012/09/25/installing-and-configuring-apache2-on-aws-amazon-linux-ami/

# todo
# update salts
# html to markdown http://domchristie.github.io/turndown/