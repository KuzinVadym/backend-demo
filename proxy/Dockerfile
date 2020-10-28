FROM node:12-alpine as proxy_prepare

RUN set -ex && \
    mkdir -p /var/backend/proxy

WORKDIR /var/backend/proxy

COPY package.json yarn.lock ./

RUN apk add --no-cache bash && \
    npm install

FROM node:12-alpine

COPY --from=proxy_prepare /var/backend/proxy /var/backend/proxy

COPY . /var/backend/proxy

WORKDIR /var/backend/proxy

RUN npm run build

RUN cp -r ./dist/src/* .

CMD ["npm", "run", "start"]

EXPOSE 3002