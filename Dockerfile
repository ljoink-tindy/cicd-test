FROM node:16-alpine3.14 as build

WORKDIR /root

RUN apk update && apk add git

RUN git clone https://github.com/ljoink-tindy/cicd-test.git

WORKDIR /root/cicd-test

RUN npm i

CMD git pull && npm start