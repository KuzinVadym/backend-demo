FROM node:12-alpine as main_prepare

RUN set -ex && \
    mkdir -p /var/backend/main

WORKDIR /var/backend/main

COPY package.json yarn.lock ./

RUN apk add --no-cache bash && \
    npm install

FROM node:12-alpine

COPY --from=main_prepare /var/backend/main /var/backend/main

COPY . /var/backend/main

WORKDIR /var/backend/main

RUN npm run build

RUN cp -r ./dist/src/* .

CMD ["npm", "run", "start"]

EXPOSE 3002