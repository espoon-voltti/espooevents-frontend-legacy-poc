FROM node:12.6.0-alpine

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install pm2 -g

EXPOSE 8080

ENV NODE_ENV=production
ENV publicUrl=http://localhost:8080
ENV helsinkiAuthId=x
ENV helsinkiAuthSecret=x
ENV helsinkiTargetApp=x
ENV sessionSecret=x

CMD ["pm2-runtime", "server"]
