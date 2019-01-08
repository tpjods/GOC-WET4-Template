FROM centos:7

RUN yum -y update

RUN yum install -y httpd

COPY angular-httpd.conf /etc/httpd/conf.d/

EXPOSE 80

CMD ["/usr/sbin/httpd","-D","FOREGROUND"]

# https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358

# docker build -t angular-httpd .

# docker run --rm -dit --name NRCAN -p 80:80 -v "%cd%/../dist/:/var/www/html" angular-httpd
