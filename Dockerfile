FROM node:20

WORKDIR /myapps

COPY . .

RUN npm install
EXPOSE  8000
CMD [ "node","REST_API" ]