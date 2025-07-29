FROM node:24

COPY package.json /app/
COPY index.js /app/

WORKDIR /app

RUN npm install 

