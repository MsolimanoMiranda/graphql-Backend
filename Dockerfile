
FROM node:current-alpine3.13
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN apk --no-cache add curl
RUN npm install 
COPY . .
