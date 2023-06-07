FROM node:16-alpine

# ? install node
RUN apk add python3 make g++ 

# ? create a new user (optional)
USER node 

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# ? copy package.json and package-lock.json
COPY --chown=node:node package*.json ./

# ? ci is exact install ( without upgraded version )
RUN npm i

# ? first . my PC
# ? second . docker working dir
COPY --chown=node:node . ./

# ? give access to 3000 port of docker
EXPOSE 3000

# RUN chmod +x /bin/sh
# RUN ls -a /bin/
RUN npm run build
CMD npm start
