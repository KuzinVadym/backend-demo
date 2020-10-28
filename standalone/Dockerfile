FROM node:12-alpine as standalone_prepare

RUN set -ex && \
    mkdir -p /var/backend/standalone

WORKDIR /var/backend/standalone

COPY package.json yarn.lock ./

RUN apk add --no-cache bash && \
    npm install

FROM node:12-alpine

COPY --from=standalone_prepare /var/backend/standalone /var/backend/standalone

COPY . /var/backend/standalone

WORKDIR /var/backend/standalone

RUN npm run build

RUN cp -r ./dist/src/* .

CMD ["npm", "run", "start"]

EXPOSE 3002