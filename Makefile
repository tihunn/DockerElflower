postgres:
	docker run -p 5432:5432 --rm --name myPostgres --network my -v myDB:/var/lib/postgresql/data -e POSTGRES_USER=elflower -e POSTGRES_PASSWORD=superUser postgres

server:
    docker run -p 3007:3007 --rm --name elnode --network my --env-file ./config/development.evn -v C:/elflow/server:/app -v /app/node_modules elnode

client:
    docker run -d -p 3000:3000 -d --rm --name fronttest -v C:/docker-mern/docker-mern/client/src:/app/src --env-file ./config/development.evn fronttest

dev:
    docker-compose -f docker-compose.yml up -d

build:
    docker-compose -f docker-compose.production.yml build