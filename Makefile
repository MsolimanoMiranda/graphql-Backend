## CONSTANTS ##

## TASKS ##

install: ## Instalación de dependencias
	rm -rf node_modules               && \
	rm -rf yarn.lock                  && \
	npm install

client-start: ## Inicia la aplicación en local
	yarn client:start

docker-client-start: ## Inicia la aplicación en local
	docker-compose start

docker-client-stop:
	docker-compose stop

docker-client-create: ## Inicia la aplicación en local
	docker-compose up -d --build

docker-client-delete: ## Inicia la aplicación en local
	docker-compose -f docker-compose.yml down --rmi all -v

client-build: ## Construye compilado de la aplicación
	rm -rf dist                       && \
	rm -rf stats.json                 && \
	yarn lint                         && \
	yarn test                         && \
	yarn client:build