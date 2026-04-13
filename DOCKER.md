# Docker: ports and commands

The frontend and backend use **different host ports** so they never clash with Next.js on `3000` or other local services.

| Service | Host URL | Notes |
|---------|----------|--------|
| Frontend (Next.js) | [http://localhost:3000](http://localhost:3000) | UI only |
| Backend (Nest) | [http://localhost:4000](http://localhost:4000) | REST API |
| Swagger | [http://localhost:4000/api](http://localhost:4000/api) | API docs |
| MySQL | `localhost:3306` | As defined in `docker-compose.yml` |

The API port is set in `backend/.env` as `API_PORT` (the app defaults to **4000** in code if unset). In Docker, the backend container uses that port with mapping `4000:4000`.

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
