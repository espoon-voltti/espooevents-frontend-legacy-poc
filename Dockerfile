FROM node:12.6.0-alpine

WORKDIR /app
COPY . /app

RUN npm install
<<<<<<< HEAD
=======

>>>>>>> f3ac69f... fix: install npm packages, add pm2
RUN npm install pm2 -g

EXPOSE 8080

ENV NODE_ENV=production
<<<<<<< HEAD
=======

>>>>>>> f3ac69f... fix: install npm packages, add pm2
ENV publicUrl=http://localhost:8080
ENV helsinkiAuthId=x
ENV helsinkiAuthSecret=x
ENV helsinkiTargetApp=x
ENV sessionSecret=x

<<<<<<< HEAD
=======
# Create config from env and serve web root with httpd
>>>>>>> f3ac69f... fix: install npm packages, add pm2
CMD ["pm2-runtime", "server"]