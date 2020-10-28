FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN cp -r ./dist/src/* .

CMD ["npm", "run", "start"]

EXPOSE 3333
