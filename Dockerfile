FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package.json  package-lock.json ./ 
RUN npm install

COPY ./ .




EXPOSE 8000
CMD ["npm", "start"]