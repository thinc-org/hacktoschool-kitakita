FROM node:18-alpine AS base

WORKDIR /kitakita

RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g pnpm

COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

FROM base AS builder

COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma
RUN pnpm install --frozen-lockfile
RUN pnpm build
RUN pnpm pkg set scripts.postinstall="echo no-postinstall"
RUN pnpm prune --prod

# FROM base AS dependencies

# COPY apps/client/package.json ./apps/client/package.json
# COPY apps/server/package.json ./apps/server/package.json
# RUN pnpm install --frozen-lockfile --only=production --ignore-script

FROM base AS deploy

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /kitakita/node_modules ./node_modules
COPY --from=builder /kitakita/apps/client/node_modules apps/client/node_modules
COPY --from=builder /kitakita/apps/server/node_modules apps/server/node_modules

COPY apps/client/package.json ./apps/client/package.json
COPY apps/server/package.json ./apps/server/package.json

COPY --from=builder /kitakita/apps/client/.next ./apps/client/.next
COPY --from=builder /kitakita/apps/client/public ./apps/client/public
COPY --from=builder /kitakita/apps/server/dist ./apps/server/dist

CMD ["pnpm", "start"]
