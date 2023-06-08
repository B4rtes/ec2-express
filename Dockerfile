FROM node:16 as development

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

# It's only for internal network between docker containers
EXPOSE 8080

CMD ["npm", "run", "dev"]


FROM node:16-alpine as production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev
# --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

RUN npm run build

CMD ["node", "dist/index.js"]