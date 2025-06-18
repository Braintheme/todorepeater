.PHONY: frontend-rebuild backend-rebuild all-rebuild clear

frontend-rebuild:
	docker compose down frontend
	docker compose build frontend --no-cache
	docker compose up -d frontend

backend-rebuild:
	docker compose down backend
	docker compose build backend --no-cache
	docker compose up -d backend

all-rebuild:
	docker compose down
	docker compose build --no-cache
	docker compose up -d

clear:
	docker system prune -a