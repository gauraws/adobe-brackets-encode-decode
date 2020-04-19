/* eslint-disable new-cap */
'use strict';

/**
 *  File: _MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes String --> MD5
 *  MD5 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 *  References: Wikipedia
 *
 *  EXPERIMENTAL EXPERIMENTAL
 *  this is an experimental implementation of importing crypto-js;
 *  https://www.npmjs.com/package/crypto-js
 *
 *  PROCESS:
 *  1. Open a seperate folder, not within this working folder
 *  2. Run npm install crypto-js
 *  3. open the node_modules folder there
 *  4. Copy the crypto-js folder
 *  5. Navigate back to this working folder and paste the crpyto-js folder in lib folder
 *  6. update the "requirejs-config.json" file as following:
 *     A. Add the following under paths:
 *        "crypto-js": "./lib/crypto-js/index"
 *  7. now you can use:
 *     const cryptojs = require('crypto-js');
 *
 */


define((require, exports) =>{
  //    Function to rotate shift the string to the left
  const cryptojs = require('crypto-js');

  // MD5 encoder function
  const encodeToMD5 =(string) => {
    const hash = cryptojs.MD5(string).toString();
    return hash;
  };
  exports.encodeToMD5 =encodeToMD5;
});
