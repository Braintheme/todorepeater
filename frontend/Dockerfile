# Dependencies + source (dev base)
FROM node:24.2.0 AS base

WORKDIR /usr/src/frontend

RUN npm install -g pnpm@10.12.1

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

COPY . ./

# Development
FROM base AS dev

EXPOSE 3000

CMD ["pnpm", "exec", "next", "dev", "--hostname", "0.0.0.0", "--port", "3000"]

# Production build
FROM base AS builder

RUN pnpm build

# Production
FROM node:24.2.0 AS prod

WORKDIR /usr/src/frontend

ENV NODE_ENV=production

RUN npm install -g pnpm@10.12.1

RUN chown -R node:node /usr/src/frontend

USER node

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /usr/src/frontend/.next ./.next
COPY --from=builder /usr/src/frontend/public ./public
COPY --from=builder /usr/src/frontend/next.config.ts ./

EXPOSE 3000

CMD ["pnpm", "exec", "next", "start", "--hostname", "0.0.0.0", "--port", "3000"]
