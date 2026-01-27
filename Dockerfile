FROM node:18

# RUN mkdir app

WORKDIR  /usr/src/app

RUN apt-get update
RUN apt-get install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

# # Install necessary system dependencies for Puppeteer/Chromium
# RUN apk add --no-cache chromium nodejs-current npm  && apk add --no-cache udev ttf-freefont chromium
#     # Note: This installs the necessary libs to make the browser work with Puppeteer

# # Set environment variables for Puppeteer
# ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true 
# ENV NODE_ENV=production

COPY package.json  package-lock.json ./ 
RUN npm install

COPY ./ .



RUN npm run clear

EXPOSE 8000
CMD ["npm", "start"]