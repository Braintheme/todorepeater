.PHONY: fe-re be-re rebuild clear

fe-re:
	docker compose down frontend
	docker compose build frontend --no-cache
	docker compose up -d frontend

be-re:
	docker compose down backend
	docker compose build backend --no-cache
	docker compose up -d backend

rebuild:
	docker compose down
	docker compose build --no-cache
	docker compose up -d

clear:
	docker system prune -a