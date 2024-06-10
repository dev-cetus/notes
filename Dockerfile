FROM node:lts-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

# Bundle app source
COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]