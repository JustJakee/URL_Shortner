/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('urlForm').addEventListener('submit', function (event) {\n  event.preventDefault();\n  var API_ENDPOINT = \"https://ymawlmw1ig.execute-api.us-east-2.amazonaws.com/v1\";\n  var longURL = document.getElementById('longURL').value.trim();\n  fetch(API_ENDPOINT + '/GenerateShortURL', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      longURL: longURL\n    })\n  }).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json();\n  }).then(function (data) {\n    console.log('Response data:', data);\n    document.getElementById('shortURL').innerHTML = \"<strong>Short URL:</strong> <a href=\\\"\".concat(data.shortURL, \"\\\" target=\\\"_blank\\\">\").concat(data.shortURL, \"</a>\");\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n    document.getElementById('shortURL').innerHTML = '<span style=\"color: red;\">Failed to generate short URL. Please try again.</span>';\n  });\n});\n\n//# sourceURL=webpack://url-shortner/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;