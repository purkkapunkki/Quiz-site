# Project 2: Quiz site

This is a quiz site for repeated practice of learned content, where you can create and take any quizes of your choosing. Please register a user account to use the site.

To run this application execute the following command:
```
(docker ps -aq | xargs --no-run-if-empty docker stop | xargs --no-run-if-empty docker rm) && docker network prune --force && docker-compose up
```

To run the tests execute the following command:
```
docker-compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf
```
