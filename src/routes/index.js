const express = require("express");
/** 
TODO para hacer que esto funcione
**/
const router = express.Router();
//TODO Node module used to read files
const fs = require("fs");

const PATH_ROUTER = __dirname;

/**
 * TODO This function is going to clean the .js filed without the extension
 */

const cleanFileName = (fileName) => {
  /**
   * TODO this its going to return the filename without the .js extension
   */
  const clean = fileName.split(".").shift();
  return clean;
};

/**
 * TODO
 */
fs.readdirSync(PATH_ROUTER).filter((fileName) => {
  /**
   * TODO Return the file name cleaned
   */
  const prefixRoute = cleanFileName(fileName);
  if (prefixRoute !== "index") {
    console.log(`Cargando la ruta.........${prefixRoute}`);

    router.use(`/${prefixRoute}`, require(`./${prefixRoute}`).router);
  }
});

module.exports = { router };
