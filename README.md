# Project 2: Quiz site

This is a quiz site for repeated practice of learned content, where you can create and take any quizes of your choosing. Please register a user account to use the site.

## Running the application
Run the following command in the project's root directory:
```
docker-compose up
```
Press <kbd>Ctrl</kbd>+<kbd>C</kbd> to stop the application.

## Running the tests
Run the following command in the project's root directory:
```
docker-compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf
```
