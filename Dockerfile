FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

# Install necessary system dependencies for Puppeteer/Chromium
RUN apk add --no-cache chromium nodejs-current npm  && apk add --no-cache udev ttf-freefont chromium
    # Note: This installs the necessary libs to make the browser work with Puppeteer

# Set environment variables for Puppeteer
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true 
ENV NODE_ENV=production

COPY package.json  package-lock.json ./ 
RUN npm install

COPY ./ .



RUN npm run clear

EXPOSE 8000
CMD ["npm", "start"]