# hack to school

Team คิตะคิตะโปรแกรมมิ่งคิต้านอิคุโย้ / 喜多来たプログラミングキタ～ン郁代ぉ!

## Pre-requisite

- node 18 (Preferred nvm)
- pnpm 7
- docker or postgresql

## Setup

- pnpm install
- start postgresql database or use docker compose up
- set .env (in root level and in apps/client)
- pnpm dev

## Run the app with docker compose

```yml
services:
  kitakita:
    image: # Registry Location
    restart: unless-stopped
    ports:
      - "4200:4200"
      - "4201:4201"
    environment:
      - DATABASE_URL=
      - NEXT_PUBLIC_GRAPHQL_ENDPOINT=
      - JWT_SECRET=
      # And some other variable to override ex. BACKEND_PORT
```

## 喜多ちゃん

![](https://media.tenor.com/KJ_he9DiCg0AAAAd/kita-ikuyo-bocchi-the-rock.gif)
