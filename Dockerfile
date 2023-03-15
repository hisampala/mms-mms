FROM node:18-alpine3.15 as dev
WORKDIR /app
COPY package*.json  ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
CMD npm run start