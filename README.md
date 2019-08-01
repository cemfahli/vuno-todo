# VUNO-Todo
A (not so) simple todo list using Vue.js, Node.js, and MongoDB.

## Installation
1. The Vue front end needs to be built first: run ``npm run build`` from inside the vue-app directory.
2. Start/Manage a Mongodb instance.
  - By default, this application uses:
    - database: todo
    - username: userTodo
    - password: changeMe
    - Host: localhost
    - Port: 27017
  - these defaults can be changed in the ./config.js file or through environmental variables.
3. Review other defaults in the ./config.js file and change accordingly (secret, port, etc.).
4. Run server using ``npm run start`` from the top level directory (same directory as this readme file).
