## LOCAL

- "REACT_APP_REQUEST_URL={{PUSHMORE_URL}} npm start"

## DOCKER

- in Dockerfile change "RUN npm run build" to "REACT_APP_REQUEST_URL={{PUSHMORE_URL}} npm build"
- "docker compose up"
