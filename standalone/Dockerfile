FROM node:12.20.0-alpine

WORKDIR  /usr/src/app
COPY package*.json /usr/src/app/
RUN yarn install
COPY . .
RUN yarn run build

ARG PORT=3333
ENV PORT=${PORT}

EXPOSE $PORT

USER node

CMD ["node", "dist/src/index.js"]
