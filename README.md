# Project Title

Joby

## Description

Full-stack website created for the purpose of learning to code.

## Getting Started

### Required programs to run project

* Node.js version 16 or greater

### Browser project was tested on

  * Platform:  Chrome on Windows
  * Version: 99.0.4844.51
  * Release Date: 2022-03-01

### Installing

* Open downloaded project folder and navigate to joby-server.
* Open .env-example file and add your SERVER_PORT, DB_CONNECTION, HASH_SECRET, TOKEN_SECRET, PUBLIC_PATH, IMG_FOLDER_NAME, SERVER_DOMAIN.
* Change .env-example file name into .env.
* If you changed SERVER_PORT in .env (.env-example), navigate from project folder to joby > src > services and in each file change baseUrl
  port to the same as in .env (.env-example) file.
* Open project folder with terminal.
* Navigate to server (joby-server) folder:
  ```
  $ cd joby-server
  ```
* Run npm i command to install server dependencies
  ```
  $ npm i
  ```
* Open project folder again with another terminal.
* Navigate to client (joby) folder:
  ```
  $ cd joby
  ```
* Run npm i command to install client dependencies
  ```
  $ npm i
  ```

### Executing program

* After installing client and server dependencies run npm start in both terminals.
  ```
  $ npm start
  ```

## Authors

 * Justas Peldžius


## Acknowledgments

Inspiration, code snippets, etc.
* Žilvinas Vidmantas
* Rokas Banaitis