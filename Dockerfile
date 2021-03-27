FROM node:12

WORKDIR /app

RUN npm install -g gatsby-cli

# COPY package.json ./

# COPY package.lock ./

# RUN npm install


# COPY . ./

EXPOSE 8000