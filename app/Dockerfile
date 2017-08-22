FROM node:6

ADD . /var/www/app

RUN cd /var/www/app; npm install --production

EXPOSE 8123

CMD ["node", "/var/www/app/index.js"]
