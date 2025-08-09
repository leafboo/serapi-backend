FROM node:22.17-alpine

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY index.js .

CMD [ "node", "index.js" ]