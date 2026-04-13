# Docker: ports and commands

The frontend and backend use **different host ports** so they never clash with Next.js on `3000` or other local services.

| Service | Host URL | Notes |
|---------|----------|--------|
| Frontend (Next.js) | [http://localhost:3000](http://localhost:3000) | UI only |
| Backend (Nest) | [http://localhost:4000](http://localhost:4000) | REST API |
| Swagger | [http://localhost:4000/api](http://localhost:4000/api) | API docs |
| PostgreSQL | `localhost:5432` | Primary DB for the API (`DATABASE_URL` in `backend/.env`) |
| MySQL | `localhost:3306` | Still started by Compose; the API does **not** use it unless you point `DATABASE_URL` at MySQL and switch the TypeORM driver back to `mysql` |

The API listen port is set in `backend/.env` as `API_PORT` (defaults to **4000** in code if unset). In Docker, the backend uses host mapping `4000:4000`.

The database URL is `DATABASE_URL` (PostgreSQL in the default setup, e.g. `postgresql://todo:password@postgres:5432/todo` inside Compose). See `backend/.env.example`.

Environment variables are documented in `backend/.env.example`. Copy it to `backend/.env` and adjust values before the first run.

## Run

Start the full stack in the background:

```bash
make up
```

or:

```bash
docker compose up -d
```

Stop:

```bash
make down
```

Follow logs for all services:

```bash
make logs
```

## Rebuild images

Rebuild **all** services and start them:

```bash
make rebuild
```

**Frontend only** (no build cache; container is recreated):

```bash
make rebuild-frontend
```

Short alias, same behavior:

```bash
make fe-re
```

**Backend only**:

```bash
make be-re
```

## Other

Prune unused Docker images and build cache (use with care—this can affect other projects on your machine):

```bash
make clear
```

After changing a `Dockerfile` or dependencies, `make rebuild` or a targeted `make rebuild-frontend` / `make be-re` is usually enough.
