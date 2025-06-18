#  Builder
FROM node:24.2.0 as base

WORKDIR /usr/src/backend

RUN npm install -g pnpm@10.12.1

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . ./

RUN pnpm build

# Development
FROM base as dev

EXPOSE 3000

CMD ["pnpm", "start:dev"]

# Production
FROM node:24.2.0 as prod

WORKDIR /usr/src/backend

ENV NODE_ENV=production

RUN npm install -g pnpm@10.12.1

RUN chown -R node:node /usr/src/backend

USER node

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=base /usr/src/backend/dist ./dist

CMD ["node", "dist/src/main.js"]
