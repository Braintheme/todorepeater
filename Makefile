.PHONY: up down logs fe-re rebuild-frontend be-re rebuild clear

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

fe-re rebuild-frontend:
	docker compose build frontend --no-cache
	docker compose up -d --force-recreate --no-deps frontend

be-re:
	docker compose stop backend || true
	docker compose rm -f backend || true
	docker compose build backend --no-cache
	docker compose up -d backend

rebuild:
	docker compose down
	docker compose build --no-cache
	docker compose up -d

clear:
	docker system prune -a
