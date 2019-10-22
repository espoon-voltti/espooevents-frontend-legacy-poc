FROM node:8

# At this stage everything might be useful

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

# Create config from env and serve web root with httpd
CMD ["pm2-runtime", "server"]