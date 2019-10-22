<<<<<<< HEAD
<<<<<<< HEAD
FROM node:12.6.0-alpine
=======
FROM node:8
>>>>>>> 1f022ee... style: format Dockerfile
=======
FROM node:12.6.0-alpine
>>>>>>> 6f82409... perf: upgrade node image to newest version

WORKDIR /app
COPY . /app

RUN npm install
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f3ac69f... fix: install npm packages, add pm2
=======
>>>>>>> 1f022ee... style: format Dockerfile
RUN npm install pm2 -g

EXPOSE 8080

ENV NODE_ENV=production
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f3ac69f... fix: install npm packages, add pm2
=======
>>>>>>> 1f022ee... style: format Dockerfile
ENV publicUrl=http://localhost:8080
ENV helsinkiAuthId=x
ENV helsinkiAuthSecret=x
ENV helsinkiTargetApp=x
ENV sessionSecret=x

<<<<<<< HEAD
<<<<<<< HEAD
=======
# Create config from env and serve web root with httpd
>>>>>>> f3ac69f... fix: install npm packages, add pm2
=======
>>>>>>> 1f022ee... style: format Dockerfile
CMD ["pm2-runtime", "server"]