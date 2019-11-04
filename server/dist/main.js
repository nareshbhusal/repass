/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nvar PORT = process.env.PORT;\nvar port = PORT || 5000;\napp.listen(port, function () {\n  console.log(\"listening at port \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _process$env = process.env,\n    DB_NAME = \"repassdb\",\n    DB_USER = \"postgres\",\n    DB_PASS = \"nnnsss\",\n    HOST = \"localhost\";\nmodule.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {\n  host: HOST,\n  dialect: 'postgres',\n  pool: {\n    max: 5,\n    min: 0,\n    acquire: 30000,\n    idle: 1000\n  },\n  define: {\n    timestamps: false\n  },\n  logging: false\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/controllers/Listing/getVote.js":
/*!********************************************!*\
  !*** ./src/controllers/Listing/getVote.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar getVote =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(listingId, username) {\n    var listing, downvotesList, upvotesList, votesData, inDownvotesList, inUpvotesList;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Listing.findOne({\n              where: {\n                id: listingId\n              }\n            });\n\n          case 2:\n            listing = _context.sent;\n            downvotesList = listing.downs || [];\n            upvotesList = listing.ups || [];\n            votesData = {\n              ups: upvotesList,\n              downs: downvotesList,\n              total: upvotesList.length - downvotesList.length\n            };\n\n            if (username) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", votesData);\n\n          case 8:\n            inDownvotesList = downvotesList.indexOf(username) !== -1;\n            inUpvotesList = upvotesList.indexOf(username) !== -1; // self refers to\n            // null for no votes\n            // 0 for downvote &\n            // 1 for upvote on the listing\n\n            if (!inDownvotesList) {\n              _context.next = 14;\n              break;\n            }\n\n            return _context.abrupt(\"return\", _objectSpread({\n              self: 0\n            }, votesData));\n\n          case 14:\n            if (!inUpvotesList) {\n              _context.next = 18;\n              break;\n            }\n\n            return _context.abrupt(\"return\", _objectSpread({\n              self: 1\n            }, votesData));\n\n          case 18:\n            return _context.abrupt(\"return\", _objectSpread({\n              self: null\n            }, votesData));\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getVote(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getVote;\n\n//# sourceURL=webpack:///./src/controllers/Listing/getVote.js?");

/***/ }),

/***/ "./src/controllers/Listing/postComment.js":
/*!************************************************!*\
  !*** ./src/controllers/Listing/postComment.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar updateListing = __webpack_require__(/*! ./updateListing */ \"./src/controllers/Listing/updateListing.js\"); // post a listing as a post on a sub\n// save the post id on the Sub, User, Listings, \n// and parent listing's children column(array)\n\n\nvar postComment =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(comment) {\n    var username, parent, newListing, newListingId, userInRecords, userListings, listing, children;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = comment.user;\n            parent = comment.parent;\n            _context.next = 4;\n            return Listing.create(comment);\n\n          case 4:\n            newListing = _context.sent;\n            newListingId = newListing.id;\n            _context.next = 8;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 8:\n            userInRecords = _context.sent;\n            userListings = userInRecords.listings || [];\n            userListings.unshift(newListingId); // update user's listings\n\n            _context.next = 13;\n            return updateUser({\n              listings: userListings\n            }, {\n              where: {\n                username: username\n              }\n            });\n\n          case 13:\n            _context.next = 15;\n            return Listing.findOne({\n              where: {\n                id: parent\n              }\n            });\n\n          case 15:\n            listing = _context.sent;\n            children = listing.children || [];\n            children.unshift(newListingId);\n            _context.next = 20;\n            return updateListing(parent, {\n              children: children\n            });\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function postComment(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = postComment;\n\n//# sourceURL=webpack:///./src/controllers/Listing/postComment.js?");

/***/ }),

/***/ "./src/controllers/Listing/postPost.js":
/*!*********************************************!*\
  !*** ./src/controllers/Listing/postPost.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar updateSub = __webpack_require__(/*! ../sub/updateSub */ \"./src/controllers/sub/updateSub.js\");\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\"); // post a listing as a post on a sub\n// save the post id on the Sub, User, and Listings\n\n\nvar postPost =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(listing) {\n    var newListing, listingId, username, sub, user, userListings, subInRecords, subListings;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Listing.create(listing);\n\n          case 2:\n            newListing = _context.sent;\n            listingId = newListing.id;\n            username = listing.user;\n            sub = listing.sub;\n            _context.next = 8;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 8:\n            user = _context.sent;\n            userListings = user.listings || [];\n            userListings.unshift(listingId);\n            _context.next = 13;\n            return updateUser(username, {\n              listings: userListings\n            });\n\n          case 13:\n            _context.next = 15;\n            return Sub.findOne({\n              where: {\n                name: sub\n              }\n            });\n\n          case 15:\n            subInRecords = _context.sent;\n\n            if (subInRecords) {\n              _context.next = 18;\n              break;\n            }\n\n            throw new Error(\"r/\".concat(sub, \" doesn't exist\"));\n\n          case 18:\n            subListings = subInRecords.listings || [];\n            subListings.unshift(listingId);\n            _context.next = 22;\n            return updateSub(sub, {\n              listings: subListings\n            });\n\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function postPost(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = postPost;\n\n//# sourceURL=webpack:///./src/controllers/Listing/postPost.js?");

/***/ }),

/***/ "./src/controllers/Listing/updateListing.js":
/*!**************************************************!*\
  !*** ./src/controllers/Listing/updateListing.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar updateListing =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(listingId, dataToUpdate) {\n    var changeInKarma,\n        listing,\n        username,\n        user,\n        karma,\n        newKarma,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            changeInKarma = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;\n            _context.next = 3;\n            return Listing.update(_objectSpread({}, dataToUpdate), {\n              where: {\n                id: listingId\n              }\n            });\n\n          case 3:\n            _context.prev = 3;\n            _context.next = 6;\n            return Listing.findOne({\n              where: {\n                id: listingId\n              }\n            });\n\n          case 6:\n            listing = _context.sent;\n            username = listing.user;\n            _context.next = 10;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 10:\n            user = _context.sent;\n            karma = user.karma || 0;\n            newKarma = karma + changeInKarma;\n            _context.next = 15;\n            return updateUser(username, {\n              karma: newKarma\n            });\n\n          case 15:\n            _context.next = 21;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](3);\n            console.log('couldn\\'t change karma');\n            console.log(_context.t0);\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 17]]);\n  }));\n\n  return function updateListing(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateListing;\n\n//# sourceURL=webpack:///./src/controllers/Listing/updateListing.js?");

/***/ }),

/***/ "./src/controllers/Listing/vote.js":
/*!*****************************************!*\
  !*** ./src/controllers/Listing/vote.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateListing = __webpack_require__(/*! ./updateListing */ \"./src/controllers/Listing/updateListing.js\");\n\nvar getVote = __webpack_require__(/*! ./getVote */ \"./src/controllers/Listing/getVote.js\"); // Modify the state of vote on a listing for user\n\n\nvar vote =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(listingId, username, type) {\n    var votesData, vote, downvotesList, upvotesList, changeInKarma, score;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return getVote(listingId, username);\n\n          case 2:\n            votesData = _context.sent;\n            vote = votesData.self;\n            downvotesList = votesData.downs || [];\n            upvotesList = votesData.ups || [];\n            changeInKarma = 0;\n\n            if (vote === 1 && type === 'up') {\n              changeInKarma = -1;\n              upvotesList.splice(upvotesList.indexOf(username), 1);\n            } else if ((vote === 0 || vote === null) && type === 'up') {\n              if (vote === null) {\n                changeInKarma = 1;\n              } else {\n                changeInKarma = 2;\n              }\n\n              upvotesList.push(username);\n              downvotesList.splice(downvotesList.indexOf(username), 1);\n            } else if (vote === 0 && type === 'down') {\n              changeInKarma = 1;\n              downvotesList.splice(downvotesList.indexOf(username), 1);\n            } else if ((vote === 1 || vote === null) && type === 'down') {\n              if (vote === null) {\n                changeInKarma = -1;\n              } else {\n                changeInKarma = -2;\n              }\n\n              upvotesList.splice(upvotesList.indexOf(username), 1);\n              downvotesList.push(username);\n            }\n\n            score = upvotesList.length - downvotesList.length;\n            _context.next = 11;\n            return updateListing(listingId, {\n              ups: upvotesList,\n              downs: downvotesList,\n              score: score\n            }, changeInKarma);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function vote(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = vote;\n\n//# sourceURL=webpack:///./src/controllers/Listing/vote.js?");

/***/ }),

/***/ "./src/controllers/sub/toggleModerator.js":
/*!************************************************!*\
  !*** ./src/controllers/sub/toggleModerator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar updateSub = __webpack_require__(/*! ./updateSub */ \"./src/controllers/sub/updateSub.js\");\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar addModerator =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(subName, username) {\n    var user, subInRecords, mods, moderator;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 3:\n            user = _context.sent;\n            _context.next = 6;\n            return Sub.findOne({\n              where: {\n                name: subName\n              }\n            });\n\n          case 6:\n            subInRecords = _context.sent;\n            mods = subInRecords.mods || [];\n\n            if (mods.indexOf(username) === -1) {\n              mods.push(username);\n            } else {\n              mods.splice(mods.indexOf(username), 1);\n            }\n\n            _context.next = 11;\n            return updateSub(subName, {\n              mods: mods\n            });\n\n          case 11:\n            moderator = user.moderator || [];\n\n            if (moderator.indexOf(subName) === -1) {\n              moderator.push(subName);\n            } else {\n              moderator.splice(moderator.indexOf(subName), 1);\n            }\n\n            _context.next = 15;\n            return updateUser(username, {\n              moderator: moderator\n            });\n\n          case 15:\n            _context.next = 20;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 17]]);\n  }));\n\n  return function addModerator(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = addModerator;\n\n//# sourceURL=webpack:///./src/controllers/sub/toggleModerator.js?");

/***/ }),

/***/ "./src/controllers/sub/updateSub.js":
/*!******************************************!*\
  !*** ./src/controllers/sub/updateSub.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar updateSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(sub, dataToUpdate) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Sub.update(_objectSpread({}, dataToUpdate), {\n              where: {\n                name: sub\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateSub;\n\n//# sourceURL=webpack:///./src/controllers/sub/updateSub.js?");

/***/ }),

/***/ "./src/controllers/user/addCookie.js":
/*!*******************************************!*\
  !*** ./src/controllers/user/addCookie.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var addCookie = function addCookie(req, user) {\n  req.session.user = {};\n  req.session.user.username = user.username;\n};\n\nmodule.exports = addCookie;\n\n//# sourceURL=webpack:///./src/controllers/user/addCookie.js?");

/***/ }),

/***/ "./src/controllers/user/clearSession.js":
/*!**********************************************!*\
  !*** ./src/controllers/user/clearSession.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ./updateUser */ \"./src/controllers/user/updateUser.js\"); // clear session id from the browser and the database\n\n\nvar clearSession =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, user) {\n    var session_ids, username;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            session_ids = user.session_ids;\n            username = user.username;\n            session_ids = session_ids.split(',').filter(function (session_id) {\n              return session_id !== req.sessionID;\n            }).toString();\n            _context.next = 5;\n            return updateUser(username, {\n              session_ids: session_ids\n            });\n\n          case 5:\n            req.session.destroy(function (err) {\n              if (err) {\n                return console.log(err);\n              }\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function clearSession(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = clearSession;\n\n//# sourceURL=webpack:///./src/controllers/user/clearSession.js?");

/***/ }),

/***/ "./src/controllers/user/toggleSub.js":
/*!*******************************************!*\
  !*** ./src/controllers/user/toggleSub.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar updateUser = __webpack_require__(/*! ./updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar updateSub = __webpack_require__(/*! ../sub/updateSub */ \"./src/controllers/sub/updateSub.js\"); // adds or removes user subscription from a sub\n\n\nvar toggleSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(username, sub) {\n    var user, userSubs, toAdd, subInRecords, users;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 2:\n            user = _context.sent;\n            userSubs = user.subs || [];\n\n            if (userSubs.indexOf(sub) === -1) {\n              userSubs.push(sub);\n              toAdd = true;\n            } else {\n              userSubs.splice(userSubs.indexOf(sub), 1);\n              toAdd = false;\n            }\n\n            _context.next = 7;\n            return updateUser(username, {\n              subs: userSubs\n            });\n\n          case 7:\n            _context.next = 9;\n            return Sub.findOne({\n              where: {\n                name: sub\n              }\n            });\n\n          case 9:\n            subInRecords = _context.sent;\n\n            if (subInRecords) {\n              _context.next = 12;\n              break;\n            }\n\n            throw new Error(\"No such sub as \" + sub + \" to subscribe?\");\n\n          case 12:\n            users = subInRecords.users || [];\n\n            if (toAdd) {\n              users.push(username);\n            } else {\n              users.splice(users.indexOf(username), 1);\n            }\n\n            _context.next = 16;\n            return updateSub(sub, {\n              users: users\n            });\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function toggleSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = toggleSub;\n\n//# sourceURL=webpack:///./src/controllers/user/toggleSub.js?");

/***/ }),

/***/ "./src/controllers/user/updateSessionIDs.js":
/*!**************************************************!*\
  !*** ./src/controllers/user/updateSessionIDs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ./updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar updateSessionIDs =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, user) {\n    var session_ids;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            session_ids = user.session_ids;\n\n            if (session_ids) {\n              session_ids = session_ids.split(',');\n            } else {\n              session_ids = [];\n            }\n\n            if (session_ids.length > 4) {\n              session_ids.pop();\n            }\n\n            session_ids.unshift(req.sessionID);\n            session_ids = session_ids.toString();\n            _context.next = 7;\n            return updateUser(user.username, {\n              session_ids: session_ids\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateSessionIDs(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateSessionIDs;\n\n//# sourceURL=webpack:///./src/controllers/user/updateSessionIDs.js?");

/***/ }),

/***/ "./src/controllers/user/updateUser.js":
/*!********************************************!*\
  !*** ./src/controllers/user/updateUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(username, dataToUpdate) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.update(_objectSpread({}, dataToUpdate), {\n              where: {\n                username: username\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateUser;\n\n//# sourceURL=webpack:///./src/controllers/user/updateUser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar db = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar corsMiddleware = __webpack_require__(/*! ./middlewares/cors */ \"./src/middlewares/cors.js\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar path = __webpack_require__(/*! path */ \"path\"); // Session and cookiesparser\n\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar redis = __webpack_require__(/*! redis */ \"redis\");\n\nvar RedisStore = __webpack_require__(/*! connect-redis */ \"connect-redis\")(session);\n\nvar app = express();\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar routes = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\nvar clientPath = path.join(__dirname, '../../client');\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: path.resolve(__dirname, \"/\".concat(\"development\".toLowerCase(), \".env\"))\n}); // Create redis client\n\n\nvar client = redis.createClient();\nclient.on('connect', function () {\n  console.log('Redis connected');\n}); // Configure middlewares\n\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(corsMiddleware);\napp.use(cors({\n  credentials: true,\n  origin: true\n})); // express cookies\n\napp.use(session({\n  genid: function genid(req) {\n    return uuid(); //use UUIDs for session IDs\n  },\n  secret: \"session_top_secret\",\n  saveUninitialized: true,\n  resave: true,\n  store: new RedisStore({\n    client: client\n  }),\n  cookie: {\n    secure: false,\n    maxAge: 30 * 24 * 60 * 1000 // 30 days\n\n  }\n})); // Initialise database\n\ndb.authenticate().then(function () {\n  return console.log('Database connected');\n})[\"catch\"](function (err) {\n  return console.log(err);\n}); // Set routes\n\napp.use(routes);\n\nif (false) {}\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/cors.js":
/*!*********************************!*\
  !*** ./src/middlewares/cors.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cors(req, res, next) {\n  res.header('Access-Control-Allow-Credentials: true');\n  res.header('Access-Control-Allow-Origin: *');\n  res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');\n  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');\n  next();\n}\n\nmodule.exports = cors;\n\n//# sourceURL=webpack:///./src/middlewares/cors.js?");

/***/ }),

/***/ "./src/middlewares/requireLogin.js":
/*!*****************************************!*\
  !*** ./src/middlewares/requireLogin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../models/User */ \"./src/models/User.js\");\n\nvar clearHeaderCache = function clearHeaderCache(res) {\n  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');\n};\n\nvar requireLogin =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res, next) {\n    var authError, sessionError, username, user, isAuthorized;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            authError = {\n              err: 'Error authenticating. Please login or register!'\n            };\n            sessionError = {\n              err: 'Sessions not supported'\n            }; // Check if session exists\n\n            if (req.session) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(403).send(authError));\n\n          case 4:\n            if (req.session.user) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(403).send(authError));\n\n          case 6:\n            _context.prev = 6;\n            username = req.session.user.username;\n            _context.next = 10;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 10:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 19;\n              break;\n            }\n\n            isAuthorized = user.session_ids.split(',').some(function (session_id) {\n              return session_id === req.sessionID;\n            });\n\n            if (!isAuthorized) {\n              _context.next = 18;\n              break;\n            }\n\n            clearHeaderCache(res);\n            return _context.abrupt(\"return\", next());\n\n          case 18:\n            // clear the browser session\n            req.session.destroy(function (err) {\n              if (err) {\n                console.log(err);\n              }\n            });\n\n          case 19:\n            return _context.abrupt(\"return\", res.status(403).send(authError));\n\n          case 22:\n            _context.prev = 22;\n            _context.t0 = _context[\"catch\"](6);\n            console.log('error checking authroization status', _context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Critical server error :('\n            }));\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[6, 22]]);\n  }));\n\n  return function requireLogin(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = requireLogin;\n\n//# sourceURL=webpack:///./src/middlewares/requireLogin.js?");

/***/ }),

/***/ "./src/models/Listing.js":
/*!*******************************!*\
  !*** ./src/models/Listing.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar listing = db.define('listing', {\n  id: {\n    type: Sequelize.INTEGER,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  user: {\n    type: Sequelize.STRING\n  },\n  sub: {\n    type: Sequelize.STRING\n  },\n  body: {\n    type: Sequelize.STRING\n  },\n  isLink: {\n    type: Sequelize.BOOLEAN\n  },\n  title: {\n    // title in null except for posts\n    type: Sequelize.STRING\n  },\n  ups: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  downs: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  score: {\n    type: Sequelize.INTEGER,\n    defaultValue: 1\n  },\n  children: {\n    // ids of sub-listings\n    type: Sequelize.ARRAY(Sequelize.INTEGER)\n  },\n  parent: {\n    // id of parent listing\n    type: Sequelize.INTEGER\n  },\n  originalPost: {\n    type: Sequelize.INTEGER\n  },\n  isNSFW: {\n    type: Sequelize.BOOLEAN\n  },\n  isSpoiler: {\n    type: Sequelize.BOOLEAN\n  },\n  createdAt: {\n    type: Sequelize.STRING\n  },\n  updatedAt: {\n    type: Sequelize.STRING\n  },\n  deleted: {\n    type: Sequelize.BOOLEAN,\n    defaultValue: false\n  }\n});\nmodule.exports = listing; // listings can be posts, comments or replies\n\n//# sourceURL=webpack:///./src/models/Listing.js?");

/***/ }),

/***/ "./src/models/Sub.js":
/*!***************************!*\
  !*** ./src/models/Sub.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar sub = db.define('sub', {\n  name: {\n    type: Sequelize.STRING,\n    primaryKey: true\n  },\n  description: {\n    type: Sequelize.STRING\n  },\n  users: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  listings: {\n    type: Sequelize.ARRAY(Sequelize.INTEGER)\n  },\n  mods: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  createdBy: {\n    type: Sequelize.STRING\n  },\n  createdAt: {\n    type: Sequelize.STRING\n  },\n  rules: {\n    type: Sequelize.JSON\n  }\n});\nmodule.exports = sub;\n\n//# sourceURL=webpack:///./src/models/Sub.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\"); // listings are associated with their ids\n// subs can be subpasses(subreddits), posts or even users\n\n\nvar user = db.define('user', {\n  username: {\n    type: Sequelize.STRING,\n    primaryKey: true\n  },\n  password: {\n    type: Sequelize.STRING\n  },\n  description: {\n    type: Sequelize.STRING\n  },\n  listings: {\n    type: Sequelize.ARRAY(Sequelize.INTEGER)\n  },\n  karma: {\n    type: Sequelize.INTEGER\n  },\n  subs: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  email: {\n    type: Sequelize.STRING\n  },\n  followers: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  following: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  saved: {\n    type: Sequelize.ARRAY(Sequelize.INTEGER)\n  },\n  createdAt: {\n    type: Sequelize.STRING\n  },\n  votes: {\n    type: Sequelize.JSON\n  },\n  moderator: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  session_ids: {\n    type: Sequelize.STRING\n  }\n});\nmodule.exports = user;\n\n//# sourceURL=webpack:///./src/models/User.js?");

/***/ }),

/***/ "./src/routes/auth/index.js":
/*!**********************************!*\
  !*** ./src/routes/auth/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar login = __webpack_require__(/*! ./login */ \"./src/routes/auth/login.js\");\n\nvar logout = __webpack_require__(/*! ./logout */ \"./src/routes/auth/logout.js\");\n\nvar register = __webpack_require__(/*! ./register */ \"./src/routes/auth/register.js\");\n\nrouter.post('/login', login);\nrouter.post('/logout', logout);\nrouter.post('/register', register);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/auth/index.js?");

/***/ }),

/***/ "./src/routes/auth/login.js":
/*!**********************************!*\
  !*** ./src/routes/auth/login.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateSessionIDs = __webpack_require__(/*! ../../controllers/user/updateSessionIDs */ \"./src/controllers/user/updateSessionIDs.js\");\n\nvar addCookie = __webpack_require__(/*! ../../controllers/user/addCookie */ \"./src/controllers/user/addCookie.js\");\n\nvar login =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, username, password, error, user, _error;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, username = _req$body.username, password = _req$body.password;\n\n            if (!(!username || !password)) {\n              _context.next = 4;\n              break;\n            }\n\n            error = {\n              err: 'Please fill in all fields'\n            };\n            return _context.abrupt(\"return\", res.status(403).send(error));\n\n          case 4:\n            _context.prev = 4;\n            _context.next = 7;\n            return User.findOne({\n              where: {\n                username: username,\n                password: password\n              }\n            });\n\n          case 7:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 11;\n              break;\n            }\n\n            _error = {\n              err: 'Wrong username or password'\n            };\n            return _context.abrupt(\"return\", res.status(400).send(_error));\n\n          case 11:\n            _context.next = 13;\n            return updateSessionIDs(req, user);\n\n          case 13:\n            addCookie(req, user);\n            return _context.abrupt(\"return\", res.status(200).send(user.username));\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](4);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send(':('));\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 17]]);\n  }));\n\n  return function login(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = login;\n\n//# sourceURL=webpack:///./src/routes/auth/login.js?");

/***/ }),

/***/ "./src/routes/auth/logout.js":
/*!***********************************!*\
  !*** ./src/routes/auth/logout.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar clearSession = __webpack_require__(/*! ../../controllers/user/clearSession */ \"./src/controllers/user/clearSession.js\");\n\nvar logout =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (req.session) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Already logged out!'\n            }));\n\n          case 2:\n            if (!req.session.user) {\n              _context.next = 22;\n              break;\n            }\n\n            _context.prev = 3;\n            username = req.session.user.username;\n            _context.next = 7;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 7:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 14;\n              break;\n            }\n\n            _context.next = 11;\n            return clearSession(req, user);\n\n          case 11:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Logged out'\n            }));\n\n          case 14:\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Already logged out!'\n            }));\n\n          case 15:\n            _context.next = 20;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](3);\n            res.status(500).send('something went wrong while trying to log out!');\n\n          case 20:\n            _context.next = 23;\n            break;\n\n          case 22:\n            res.status(204).send({\n              err: 'Already logged out!'\n            });\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 17]]);\n  }));\n\n  return function logout(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = logout;\n\n//# sourceURL=webpack:///./src/routes/auth/logout.js?");

/***/ }),

/***/ "./src/routes/auth/register.js":
/*!*************************************!*\
  !*** ./src/routes/auth/register.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar updateSessionIDs = __webpack_require__(/*! ../../controllers/user/updateSessionIDs */ \"./src/controllers/user/updateSessionIDs.js\");\n\nvar addCookie = __webpack_require__(/*! ../../controllers/user/addCookie */ \"./src/controllers/user/addCookie.js\");\n\nvar registerUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, username, email, password, error, userInRecords, _error, user, newUser;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password; // const { username, email, password } = req.query;\n            // server side validation\n\n            if (!(!username || !password || !email)) {\n              _context.next = 4;\n              break;\n            }\n\n            error = {\n              err: 'Please fill in all fields'\n            };\n            return _context.abrupt(\"return\", res.status(403).send(error));\n\n          case 4:\n            _context.prev = 4;\n            _context.next = 7;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 7:\n            userInRecords = _context.sent;\n\n            if (!userInRecords) {\n              _context.next = 11;\n              break;\n            }\n\n            _error = {\n              err: 'Username taken!'\n            };\n            return _context.abrupt(\"return\", res.status(409).send(_error));\n\n          case 11:\n            // create the user\n            user = {\n              username: username,\n              password: password,\n              email: email,\n              createdAt: new Date().getTime().toString()\n            };\n            _context.next = 14;\n            return User.create(user);\n\n          case 14:\n            newUser = _context.sent;\n            _context.next = 17;\n            return updateSessionIDs(req, newUser);\n\n          case 17:\n            addCookie(req, newUser);\n            return _context.abrupt(\"return\", res.status(201).send(newUser.username));\n\n          case 21:\n            _context.prev = 21;\n            _context.t0 = _context[\"catch\"](4);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('Server error while trying to register user'));\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 21]]);\n  }));\n\n  return function registerUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = registerUser;\n\n//# sourceURL=webpack:///./src/routes/auth/register.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar authRouter = __webpack_require__(/*! ./auth/index */ \"./src/routes/auth/index.js\");\n\nvar subRouter = __webpack_require__(/*! ./sub/index */ \"./src/routes/sub/index.js\");\n\nvar usersRouter = __webpack_require__(/*! ./users/index */ \"./src/routes/users/index.js\");\n\nvar listingRouter = __webpack_require__(/*! ./listing/index */ \"./src/routes/listing/index.js\");\n\nvar themeRouter = __webpack_require__(/*! ./theme/index */ \"./src/routes/theme/index.js\");\n\nrouter.use('/', themeRouter);\nrouter.use('/', authRouter);\nrouter.use('/', listingRouter);\nrouter.use('/', subRouter);\nrouter.use('/', usersRouter); // router.use('', (req, res) => {\n//     return res.status(404).send('404 route');\n// })\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/listing/createListing.js":
/*!*********************************************!*\
  !*** ./src/routes/listing/createListing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar postComment = __webpack_require__(/*! ../../controllers/Listing/postComment */ \"./src/controllers/Listing/postComment.js\");\n\nvar postPost = __webpack_require__(/*! ../../controllers/Listing/postPost */ \"./src/controllers/Listing/postPost.js\");\n\nvar isValid = function isValid(listing, type) {\n  if (type === 'post' && !listing.title) {\n    return false;\n  }\n\n  if (type === 'comment' && !listing.body) {\n    return false;\n  }\n\n  return true;\n};\n\nvar createListing =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res, next) {\n    var _req$params, sub, id, listing, errors, type, username;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$params = req.params, sub = _req$params.sub, id = _req$params.id;\n            listing = req.body; // let listing = req.query;\n\n            errors = [];\n            console.log(listing); // validation\n\n            if (!sub) {\n              errors.push({\n                err: 'Paramaters not satisified'\n              });\n            } //establish type of listing -- post or comment\n\n\n            if (id) {\n              type = 'comment';\n            } else {\n              type = 'post';\n            }\n\n            if (isValid(listing, type)) {\n              _context.next = 9;\n              break;\n            }\n\n            errors.push({\n              err: 'Please fill in all fields'\n            });\n            return _context.abrupt(\"return\", res.status(400).send(errors));\n\n          case 9:\n            _context.prev = 9;\n            username = req.session.user.username;\n            listing = _objectSpread({}, listing, {\n              sub: sub,\n              user: username,\n              originalPost: id,\n              createdAt: new Date().getTime().toString(),\n              ups: [username]\n            });\n\n            if (!(type === 'post')) {\n              _context.next = 17;\n              break;\n            }\n\n            _context.next = 15;\n            return postPost(listing);\n\n          case 15:\n            _context.next = 20;\n            break;\n\n          case 17:\n            listing.parent = id;\n            _context.next = 20;\n            return postComment(listing);\n\n          case 20:\n            return _context.abrupt(\"return\", res.status(201).send({\n              msg: 'Created listing!'\n            }));\n\n          case 23:\n            _context.prev = 23;\n            _context.t0 = _context[\"catch\"](9);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error! could not create listing'\n            }));\n\n          case 27:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 23]]);\n  }));\n\n  return function createListing(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = createListing;\n\n//# sourceURL=webpack:///./src/routes/listing/createListing.js?");

/***/ }),

/***/ "./src/routes/listing/deleteListing.js":
/*!*********************************************!*\
  !*** ./src/routes/listing/deleteListing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateListing = __webpack_require__(/*! ../../controllers/Listing/updateListing */ \"./src/controllers/Listing/updateListing.js\");\n\nvar deleteListing =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, id;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.session.user.username;\n            id = req.params.id;\n            _context.prev = 2;\n            _context.next = 5;\n            return updateListing(id, {\n              deleted: true\n            });\n\n          case 5:\n            return _context.abrupt(\"return\", res.status(202).send({\n              msg: 'Deleted listing!'\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error while deleting listing!'\n            }));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 8]]);\n  }));\n\n  return function deleteListing(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = deleteListing;\n\n//# sourceURL=webpack:///./src/routes/listing/deleteListing.js?");

/***/ }),

/***/ "./src/routes/listing/editListing.js":
/*!*******************************************!*\
  !*** ./src/routes/listing/editListing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar updateListing = __webpack_require__(/*! ../../controllers/Listing/updateListing */ \"./src/controllers/Listing/updateListing.js\");\n\nvar editListing =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var updatedListing, listingId, username, listingInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            updatedListing = req.body;\n            updatedListing.updatedAt = new Date().getTime().toString();\n            listingId = req.params.id;\n            username = req.session.user.username;\n            _context.next = 7;\n            return Listing.findOne({\n              where: {\n                id: listingId,\n                user: username\n              }\n            });\n\n          case 7:\n            listingInRecords = _context.sent;\n\n            if (!listingInRecords) {\n              res.status(400).send({\n                err: 'Listing does not exist'\n              });\n            }\n\n            _context.next = 11;\n            return updateListing(listingId, updatedListing);\n\n          case 11:\n            return _context.abrupt(\"return\", res.status(201).send({\n              msg: 'Listing updated'\n            }));\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Could not edit listing'\n            }));\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 14]]);\n  }));\n\n  return function editListing(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = editListing;\n\n//# sourceURL=webpack:///./src/routes/listing/editListing.js?");

/***/ }),

/***/ "./src/routes/listing/getListing.js":
/*!******************************************!*\
  !*** ./src/routes/listing/getListing.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar isThisOP =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(listing) {\n    var originalPost;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n\n            if (listing.parent) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 3:\n            _context.next = 5;\n            return Listing.findOne({\n              where: {\n                id: listing.originalPost\n              }\n            });\n\n          case 5:\n            originalPost = _context.sent;\n\n            if (!(originalPost.user === listing.user)) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", true);\n\n          case 8:\n            return _context.abrupt(\"return\", false);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", false);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function isThisOP(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getListing =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var id, listing, username, isOP;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            id = req.params.id;\n            id = parseInt(id) || -999; //to avoid server error when id is not of type number\n\n            _context2.next = 5;\n            return Listing.findOne({\n              where: {\n                id: id\n              }\n            });\n\n          case 5:\n            listing = _context2.sent;\n\n            if (listing) {\n              _context2.next = 8;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(404).send({\n              err: 'Listing not found'\n            }));\n\n          case 8:\n            // determine vote of the current user on the listing\n            listing.dataValues.vote = null;\n\n            if (req.session) {\n              if (req.session.user) {\n                username = req.session.user.username;\n\n                if (listing.ups) {\n                  if (listing.ups.indexOf(username) !== -1) {\n                    listing.dataValues.vote = 1;\n                  }\n                }\n\n                if (listing.downs) {\n                  if (listing.downs.indexOf(username) !== -1) {\n                    listing.dataValues.vote = 0;\n                  }\n                }\n              }\n            }\n\n            _context2.next = 12;\n            return isThisOP(listing);\n\n          case 12:\n            isOP = _context2.sent;\n            listing.isThisOP = isOP;\n            return _context2.abrupt(\"return\", res.status(200).send(listing));\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(_context2.t0);\n            return _context2.abrupt(\"return\", res.status(500).send({\n              err: 'Server error while getting listing!'\n            }));\n\n          case 21:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 17]]);\n  }));\n\n  return function getListing(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getListing;\n\n//# sourceURL=webpack:///./src/routes/listing/getListing.js?");

/***/ }),

/***/ "./src/routes/listing/getListings.js":
/*!*******************************************!*\
  !*** ./src/routes/listing/getListings.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Listing = __webpack_require__(/*! ../../models/Listing */ \"./src/models/Listing.js\");\n\nvar sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar postsPerBatch = 20;\n\nvar getQueryConfig = function getQueryConfig(_ref) {\n  var username = _ref.username,\n      _ref$search = _ref.search,\n      search = _ref$search === void 0 ? '' : _ref$search,\n      t = _ref.t,\n      sub = _ref.sub,\n      _ref$page = _ref.page,\n      page = _ref$page === void 0 ? 1 : _ref$page;\n  var days = t;\n  var offset = postsPerBatch * (page - 1);\n  var queryConfig = {\n    where: {\n      title: _defineProperty({}, sequelize.Op.iLike, \"%\".concat(search, \"%\"))\n    },\n    attributes: ['id'],\n    limit: postsPerBatch,\n    offset: offset\n  };\n\n  if (days) {\n    var startTime = new Date();\n    startTime.setHours(startTime.getHours() - days * 24);\n    var endTime = new Date();\n    startTime = startTime.getTime().toString();\n    endTime = endTime.getTime().toString();\n    queryConfig.order = [['score', 'DESC']];\n\n    if (days !== 'all') {\n      queryConfig.where.createdAt = _defineProperty({}, sequelize.Op.between, [startTime, endTime]);\n    }\n  } else {\n    // sortorder - `new`\n    queryConfig.order = [['createdAt', 'DESC']];\n  }\n\n  if (sub && sub !== 'all') {\n    queryConfig.where.sub = sub;\n  } else if (username) {\n    queryConfig.where.user = username;\n  }\n\n  return queryConfig;\n};\n\nvar getListings =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$params, username, sub, _req$query, t, search, page, queryConfig, listings;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _req$params = req.params, username = _req$params.username, sub = _req$params.sub;\n            _req$query = req.query, t = _req$query.t, search = _req$query.search, page = _req$query.page; //top of time t\n\n            queryConfig = getQueryConfig({\n              username: username,\n              sub: sub,\n              t: t,\n              search: search,\n              page: page\n            });\n            _context.next = 6;\n            return Listing.findAll(queryConfig);\n\n          case 6:\n            _context.t0 = _context.sent;\n\n            if (_context.t0) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.t0 = [];\n\n          case 9:\n            listings = _context.t0;\n            return _context.abrupt(\"return\", res.send(listings));\n\n          case 13:\n            _context.prev = 13;\n            _context.t1 = _context[\"catch\"](0);\n            console.log(_context.t1);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'server error'\n            }));\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 13]]);\n  }));\n\n  return function getListings(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getListings;\n\n//# sourceURL=webpack:///./src/routes/listing/getListings.js?");

/***/ }),

/***/ "./src/routes/listing/index.js":
/*!*************************************!*\
  !*** ./src/routes/listing/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar getListing = __webpack_require__(/*! ./getListing */ \"./src/routes/listing/getListing.js\");\n\nvar createListing = __webpack_require__(/*! ./createListing */ \"./src/routes/listing/createListing.js\");\n\nvar editListing = __webpack_require__(/*! ./editListing */ \"./src/routes/listing/editListing.js\");\n\nvar deleteListing = __webpack_require__(/*! ./deleteListing */ \"./src/routes/listing/deleteListing.js\");\n\nvar voteListing = __webpack_require__(/*! ./voteListing */ \"./src/routes/listing/voteListing.js\");\n\nvar getListings = __webpack_require__(/*! ./getListings */ \"./src/routes/listing/getListings.js\");\n\nvar requireLogin = __webpack_require__(/*! ../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nrouter.post('/r/:sub/:id', requireLogin, createListing); // commenting\n\nrouter.post('/r/:sub/', requireLogin, createListing);\nrouter.post('/:id/vote/:type', requireLogin, voteListing);\nrouter.put('/r/:sub/:id', requireLogin, editListing); //put\n\nrouter.get('/listing/:id/', getListing);\nrouter.get('/r/:sub/:id/', getListing);\nrouter[\"delete\"]('/r/:sub/:id', requireLogin, deleteListing);\nrouter[\"delete\"]('/:id', requireLogin, deleteListing);\nrouter.get('/listings/u/:username', getListings);\nrouter.get('/listings/r/:sub', getListings);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/listing/index.js?");

/***/ }),

/***/ "./src/routes/listing/voteListing.js":
/*!*******************************************!*\
  !*** ./src/routes/listing/voteListing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar vote = __webpack_require__(/*! ../../controllers/Listing/vote */ \"./src/controllers/Listing/vote.js\");\n\nvar voteListing =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res, next) {\n    var username, _req$params, id, type;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.session.user.username;\n            _req$params = req.params, id = _req$params.id, type = _req$params.type;\n\n            if (!(type !== 'up' && type !== 'down')) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next());\n\n          case 4:\n            _context.prev = 4;\n            _context.next = 7;\n            return vote(id, username, type);\n\n          case 7:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Successfully voted!'\n            }));\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](4);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Could not vote'\n            }));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 10]]);\n  }));\n\n  return function voteListing(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = voteListing;\n\n//# sourceURL=webpack:///./src/routes/listing/voteListing.js?");

/***/ }),

/***/ "./src/routes/sub/createSub.js":
/*!*************************************!*\
  !*** ./src/routes/sub/createSub.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar toggleModerator = __webpack_require__(/*! ../../controllers/sub/toggleModerator */ \"./src/controllers/sub/toggleModerator.js\");\n\nvar createSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, name, description, username, subInRecords, error, sub;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _req$body = req.body, name = _req$body.name, description = _req$body.description;\n            name = name.trim();\n            description = description.trim();\n            username = req.session.user.username;\n            _context.next = 7;\n            return Sub.findOne({\n              where: {\n                name: name\n              }\n            });\n\n          case 7:\n            subInRecords = _context.sent;\n\n            if (!subInRecords) {\n              _context.next = 11;\n              break;\n            }\n\n            // sub already exists\n            error = {\n              err: 'Sub already exists'\n            };\n            return _context.abrupt(\"return\", res.status(409).send(error));\n\n          case 11:\n            sub = {\n              name: name,\n              description: description,\n              createdBy: username,\n              mods: [],\n              createdAt: new Date().getTime().toString()\n            };\n            sub.mods.push(username);\n            _context.next = 15;\n            return Sub.create(sub);\n\n          case 15:\n            _context.next = 17;\n            return toggleModerator(sub.name, username);\n\n          case 17:\n            return _context.abrupt(\"return\", res.status(201).send({\n              msg: 'Sub created'\n            }));\n\n          case 20:\n            _context.prev = 20;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send(':('));\n\n          case 24:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 20]]);\n  }));\n\n  return function createSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = createSub;\n\n//# sourceURL=webpack:///./src/routes/sub/createSub.js?");

/***/ }),

/***/ "./src/routes/sub/deleteSub.js":
/*!*************************************!*\
  !*** ./src/routes/sub/deleteSub.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar authError = {\n  err: 'You\\'re not authorized to delete this sub!'\n};\nvar notFoundError = {\n  err: 'Sub does not exist'\n};\n\nvar deleteSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var sub, username, subInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            sub = req.params.sub;\n            username = req.session.user.username;\n            _context.next = 5;\n            return Sub.findOne({\n              where: {\n                name: sub\n              }\n            });\n\n          case 5:\n            subInRecords = _context.sent;\n\n            if (!(subInRecords.createdBy !== username)) {\n              _context.next = 11;\n              break;\n            }\n\n            console.log('not a mod');\n            return _context.abrupt(\"return\", res.status(403).send(authError));\n\n          case 11:\n            console.log('deleting');\n            _context.next = 14;\n            return Sub.destroy({\n              where: {\n                name: sub\n              }\n            });\n\n          case 14:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Deleted sub!'\n            }));\n\n          case 15:\n            _context.next = 21;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error trying to delete sub'\n            }));\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 17]]);\n  }));\n\n  return function deleteSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = deleteSub;\n\n//# sourceURL=webpack:///./src/routes/sub/deleteSub.js?");

/***/ }),

/***/ "./src/routes/sub/editSub.js":
/*!***********************************!*\
  !*** ./src/routes/sub/editSub.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateSub = __webpack_require__(/*! ../../controllers/sub/updateSub */ \"./src/controllers/sub/updateSub.js\");\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar editSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, sub, updatedSub, authError, subInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.session.user.username;\n            sub = req.params.sub;\n            updatedSub = req.body;\n            authError = 'You are not authenticated to make changes to the sub!';\n            _context.prev = 4;\n            _context.next = 7;\n            return Sub.findOne({\n              where: {\n                name: sub\n              }\n            });\n\n          case 7:\n            subInRecords = _context.sent;\n\n            if (subInRecords) {\n              _context.next = 10;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Sub does not exist!'\n            }));\n\n          case 10:\n            if (!(subInRecords.createdBy !== username)) {\n              _context.next = 12;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(403).send({\n              err: authError\n            }));\n\n          case 12:\n            _context.next = 14;\n            return updateSub(sub, {\n              description: updatedSub.description\n            });\n\n          case 14:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Edited sub'\n            }));\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](4);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Something went wrong. Server error'\n            }));\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 17]]);\n  }));\n\n  return function editSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = editSub;\n\n//# sourceURL=webpack:///./src/routes/sub/editSub.js?");

/***/ }),

/***/ "./src/routes/sub/getSub.js":
/*!**********************************!*\
  !*** ./src/routes/sub/getSub.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar isSessionPresent = function isSessionPresent(req) {\n  if (req.session) {\n    if (req.session.user) {\n      if (req.session.user.username) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar getSub =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, batchNum, postsNum, sub;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, batchNum = _req$body.batchNum, postsNum = _req$body.postsNum;\n            batchNum = batchNum || 0;\n            postsNum = postsNum || 20;\n            _context.prev = 3;\n            _context.next = 6;\n            return Sub.findOne({\n              where: {\n                name: req.params.sub\n              }\n            });\n\n          case 6:\n            sub = _context.sent;\n\n            if (!sub) {\n              _context.next = 11;\n              break;\n            }\n\n            sub.dataValues.isSubbed = false;\n\n            if (isSessionPresent(req)) {\n              if (sub.users) {\n                if (sub.users.length) {\n                  if (sub.users.indexOf(req.session.user.username) !== -1) {\n                    sub.dataValues.isSubbed = true;\n                  }\n                }\n              }\n            }\n\n            return _context.abrupt(\"return\", res.status(200).send(sub));\n\n          case 11:\n            return _context.abrupt(\"return\", res.status(404).send({\n              err: 'sub not found'\n            }));\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](3);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error'\n            }));\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 14]]);\n  }));\n\n  return function getSub(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getSub;\n\n//# sourceURL=webpack:///./src/routes/sub/getSub.js?");

/***/ }),

/***/ "./src/routes/sub/getSubs.js":
/*!***********************************!*\
  !*** ./src/routes/sub/getSubs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Sub = __webpack_require__(/*! ../../models/Sub */ \"./src/models/Sub.js\");\n\nvar getSubs =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var subs;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Sub.findAll();\n\n          case 3:\n            subs = _context.sent;\n            return _context.abrupt(\"return\", res.status(201).send(subs));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('awkwarrrrd'));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function getSubs(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getSubs;\n\n//# sourceURL=webpack:///./src/routes/sub/getSubs.js?");

/***/ }),

/***/ "./src/routes/sub/index.js":
/*!*********************************!*\
  !*** ./src/routes/sub/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar getSubs = __webpack_require__(/*! ./getSubs */ \"./src/routes/sub/getSubs.js\");\n\nvar getSub = __webpack_require__(/*! ./getSub */ \"./src/routes/sub/getSub.js\");\n\nvar createSub = __webpack_require__(/*! ./createSub */ \"./src/routes/sub/createSub.js\");\n\nvar deleteSub = __webpack_require__(/*! ./deleteSub */ \"./src/routes/sub/deleteSub.js\");\n\nvar editSub = __webpack_require__(/*! ./editSub */ \"./src/routes/sub/editSub.js\");\n\nvar subscribe = __webpack_require__(/*! ./subscribe */ \"./src/routes/sub/subscribe.js\");\n\nvar requireLogin = __webpack_require__(/*! ../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nrouter.get('/subs', getSubs);\nrouter.post('/subs/create', requireLogin, createSub);\nrouter.get('/r/:sub/', getSub);\nrouter.post('/subscribe/:sub/', requireLogin, subscribe);\nrouter.put('/r/:sub/', requireLogin, editSub);\nrouter[\"delete\"]('/r/:sub/', requireLogin, deleteSub);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/sub/index.js?");

/***/ }),

/***/ "./src/routes/sub/subscribe.js":
/*!*************************************!*\
  !*** ./src/routes/sub/subscribe.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar toggleSub = __webpack_require__(/*! ../../controllers/user/toggleSub */ \"./src/controllers/user/toggleSub.js\");\n\nvar subscribe =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, sub;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.session.user.username;\n            sub = req.params.sub.toString();\n            _context.prev = 2;\n            _context.next = 5;\n            return toggleSub(username, sub);\n\n          case 5:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Suscribed to ' + sub\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Something went wrong.'\n            }));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 8]]);\n  }));\n\n  return function subscribe(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = subscribe;\n\n//# sourceURL=webpack:///./src/routes/sub/subscribe.js?");

/***/ }),

/***/ "./src/routes/theme/changeTheme.js":
/*!*****************************************!*\
  !*** ./src/routes/theme/changeTheme.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar changeTheme =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var theme;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            theme = req.params.theme;\n            req.session.theme = theme;\n            return _context.abrupt(\"return\", res.status(200).send('changed theme'));\n\n          case 6:\n            _context.prev = 6;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n\n  return function changeTheme(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = changeTheme;\n\n//# sourceURL=webpack:///./src/routes/theme/changeTheme.js?");

/***/ }),

/***/ "./src/routes/theme/getTheme.js":
/*!**************************************!*\
  !*** ./src/routes/theme/getTheme.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getTheme =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var theme;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            theme = req.session.theme;\n\n            if (!(theme === 'light' || theme || 'dark')) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.send(theme));\n\n          case 6:\n            throw 'Invalid theme falling back to default';\n\n          case 7:\n            _context.next = 13;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.send('light'));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function getTheme(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getTheme;\n\n//# sourceURL=webpack:///./src/routes/theme/getTheme.js?");

/***/ }),

/***/ "./src/routes/theme/index.js":
/*!***********************************!*\
  !*** ./src/routes/theme/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar changeTheme = __webpack_require__(/*! ../theme/changeTheme */ \"./src/routes/theme/changeTheme.js\");\n\nvar getTheme = __webpack_require__(/*! ../theme/getTheme */ \"./src/routes/theme/getTheme.js\");\n\nrouter.get('/gettheme/', getTheme);\nrouter.post('/changetheme/:theme', changeTheme);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/theme/index.js?");

/***/ }),

/***/ "./src/routes/users/deleteUser.js":
/*!****************************************!*\
  !*** ./src/routes/users/deleteUser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar deleteUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(req.session.user.username !== req.params.username)) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(403).send({\n              err: 'Cannot delete user. Not authenticated'\n            }));\n\n          case 2:\n            username = req.params.username;\n            _context.prev = 3;\n            _context.next = 6;\n            return User.destroy({\n              where: {\n                username: username\n              }\n            });\n\n          case 6:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Deleted user'\n            }));\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](3);\n            console.log(_context.t0);\n            res.status(500).send({\n              err: 'Couldn\\'t delete user. Server error!'\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 9]]);\n  }));\n\n  return function deleteUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = deleteUser;\n\n//# sourceURL=webpack:///./src/routes/users/deleteUser.js?");

/***/ }),

/***/ "./src/routes/users/editUser.js":
/*!**************************************!*\
  !*** ./src/routes/users/editUser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar editUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, updatedUserProperties;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            username = req.session.user.username; // const updatedUserProperties = { ...req.body };\n\n            updatedUserProperties = _objectSpread({}, req.query);\n            _context.next = 5;\n            return updateUser(username, _objectSpread({}, updatedUserProperties));\n\n          case 5:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Edited user!'\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error editing user :('\n            }));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function editUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = editUser;\n\n//# sourceURL=webpack:///./src/routes/users/editUser.js?");

/***/ }),

/***/ "./src/routes/users/getCurrentUser.js":
/*!********************************************!*\
  !*** ./src/routes/users/getCurrentUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getCurrentUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.session.user.username;\n            _context.prev = 1;\n            _context.next = 4;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 4:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 7;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(404).send({\n              err: 'User not found'\n            }));\n\n          case 7:\n            return _context.abrupt(\"return\", res.status(200).send(user));\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'server error'\n            }));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 10]]);\n  }));\n\n  return function getCurrentUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getCurrentUser;\n\n//# sourceURL=webpack:///./src/routes/users/getCurrentUser.js?");

/***/ }),

/***/ "./src/routes/users/getUser.js":
/*!*************************************!*\
  !*** ./src/routes/users/getUser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var username, user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            username = req.params.username;\n            _context.prev = 1;\n            _context.next = 4;\n            return User.findOne({\n              where: {\n                username: username\n              }\n            });\n\n          case 4:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 9;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(201).send(user));\n\n          case 9:\n            return _context.abrupt(\"return\", res.status(404).send({\n              err: 'User not found'\n            }));\n\n          case 10:\n            _context.next = 16;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('server error'));\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 12]]);\n  }));\n\n  return function getUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getUser;\n\n//# sourceURL=webpack:///./src/routes/users/getUser.js?");

/***/ }),

/***/ "./src/routes/users/getUsers.js":
/*!**************************************!*\
  !*** ./src/routes/users/getUsers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getUsers =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var users;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findAll();\n\n          case 2:\n            users = _context.sent;\n            res.status(200).send(users);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getUsers(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getUsers;\n\n//# sourceURL=webpack:///./src/routes/users/getUsers.js?");

/***/ }),

/***/ "./src/routes/users/index.js":
/*!***********************************!*\
  !*** ./src/routes/users/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar getUsers = __webpack_require__(/*! ./getUsers */ \"./src/routes/users/getUsers.js\");\n\nvar getUser = __webpack_require__(/*! ./getUser */ \"./src/routes/users/getUser.js\");\n\nvar getCurrentUser = __webpack_require__(/*! ./getCurrentUser */ \"./src/routes/users/getCurrentUser.js\");\n\nvar editUser = __webpack_require__(/*! ./editUser */ \"./src/routes/users/editUser.js\");\n\nvar deleteUser = __webpack_require__(/*! ./deleteUser */ \"./src/routes/users/deleteUser.js\");\n\nvar requireLogin = __webpack_require__(/*! ../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nrouter.get('/users/', getUsers);\nrouter.get('/users/me', requireLogin, getCurrentUser);\nrouter.get('/u/:username/', getUser);\nrouter.put('/u/:username/edit', requireLogin, editUser);\nrouter[\"delete\"]('/u/:username/delete', requireLogin, deleteUser);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/users/index.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi @babel/polyfill ./src/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/app.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-redis\");\n\n//# sourceURL=webpack:///external_%22connect-redis%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });