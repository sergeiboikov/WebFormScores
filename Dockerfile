# specify the node base image with your desired version node:<version>
FROM node:15

#create work folder for the app
WORKDIR /usr/src/app

#install dependenies
COPY package*.json ./

# install npm
RUN npm install

#copy source code
COPY . .

# replace this with your application's default port
EXPOSE 8080