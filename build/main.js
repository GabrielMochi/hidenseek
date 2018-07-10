require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nuxt_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(5);
// dependencies


// config

// routes

__WEBPACK_IMPORTED_MODULE_2__nuxt_config__["dev"] = "development" !== 'production';
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](__WEBPACK_IMPORTED_MODULE_2__nuxt_config__);
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);
if (__WEBPACK_IMPORTED_MODULE_2__nuxt_config__["dev"]) {
    console.log('dev!!');
    new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt).build();
}
app.use(nuxt.render);
app.listen(port, function () {
    console.info("The server is running on port: " + port);
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var packageJson = __webpack_require__(4);

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    version: packageJson.version
  },
  head: {
    title: 'Hide \'N\' Seek',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }]
  },

  loading: {
    color: '#CE93D8',
    failedColor: '#F44336',
    height: '4px'
  },

  plugins: ['~/plugins/vuetify', '~/plugins/axios', '~/plugins/vue-rxjs'],
  css: ['~/assets/styles/app.styl'],
  build: {
    vendor: ['axios', 'vuex-class', 'nuxt-class-component', 'babel-polyfill']
  },
  modules: ['~/modules/typescript'],
  vendor: ['~/plugins/vuetify'],
  extractCSS: true
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"hidenseek","version":"1.0.4","description":"Aplicação Web para busca de objetos perdidos.","private":true,"dependencies":{"@types/mysql":"^2.15.5","axios":"^0.18.0","babel-polyfill":"^6.26.0","express":"^4.16.3","http-status-codes":"^1.3.0","mysql":"^2.15.0","nuxt":"^1.4.0","nuxt-class-component":"^1.2.0","qs":"^6.5.1","rxjs":"^5.5.6","vue-class-component":"^6.2.0","vue-property-decorator":"^6.0.0","vue-rx":"^5.0.0","vuetify":"^1.0.4","vuex":"^3.0.1","vuex-class":"^0.3.0"},"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","test":"jest --no-cache","generate":"nuxt generate","server":"npm run build && npm run start"},"devDependencies":{"@reactivex/rxjs":"^5.5.6","@types/axios":"^0.14.0","@types/express":"^4.11.1","@types/jest":"^22.1.4","@types/node":"^9.4.6","@types/qs":"^6.5.1","@types/vue":"^2.0.0","babel-jest":"^22.4.1","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-preset-vue-app":"^2.0.0","backpack-core":"^0.7.0","cross-env":"^5.1.5","jest":"^22.4.2","jest-serializer-vue":"^0.3.0","jest-vue-preprocessor":"^1.3.1","stylus":"^0.54.5","stylus-loader":"^3.0.2","ts-jest":"^22.4.1","ts-loader":"^3.5.0","tslint":"^5.9.1","tslint-config-standard":"^7.0.0","typescript":"~2.5.3","vue-language-server":"^0.0.30","vue-template-compiler":"^2.5.13","vue-test-utils":"^1.0.0-beta.11","wallaby-vue-compiler":"^1.0.2"}}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(12);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.use('/user', __WEBPACK_IMPORTED_MODULE_3__user__["a" /* default */]);
router.use('/category', __WEBPACK_IMPORTED_MODULE_1__category__["a" /* default */]);
router.use('/local', __WEBPACK_IMPORTED_MODULE_2__local__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_CategoryRepository__ = __webpack_require__(8);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var categoryRepository = new __WEBPACK_IMPORTED_MODULE_2__repository_CategoryRepository__["a" /* default */]();
router.get('/', function (req, res) {
    categoryRepository.getAll(function (err, results) {
        if (err) {
            console.error(err);
            res.status(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        }
        else {
            res.json(results);
        }
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleRepository__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CategoryRepository = /** @class */ (function (_super) {
    __extends(CategoryRepository, _super);
    function CategoryRepository() {
        return _super.call(this, __WEBPACK_IMPORTED_MODULE_0____["a" /* default */], 'category') || this;
    }
    return CategoryRepository;
}(__WEBPACK_IMPORTED_MODULE_1__SimpleRepository__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (CategoryRepository);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mysql__);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_mysql__["createPool"])({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'hidenseek',
    timezone: '+3:00'
}));


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SimpleRepository = /** @class */ (function () {
    function SimpleRepository(pool, tableName, relativeIdName) {
        if (relativeIdName === void 0) { relativeIdName = 'id'; }
        this.pool = pool;
        this.tableName = tableName;
        this.relativeIdName = relativeIdName;
    }
    SimpleRepository.prototype.get = function (id, callback) {
        this.pool.query("SELECT * FROM " + this.tableName + " WHERE " + this.relativeIdName + " = " + id);
    };
    SimpleRepository.prototype.getAll = function (callback) {
        this.pool.query("SELECT * FROM " + this.tableName, callback);
    };
    SimpleRepository.prototype.insert = function (element, callback) {
        this.pool.query("INSERT INTO " + this.tableName + " SET ?", element, callback);
    };
    SimpleRepository.prototype.update = function (element, callback) {
        this.pool.query("UPDATE " + this.tableName + " SET ? WHERE " + this.relativeIdName + " = " + element.id, element, callback);
    };
    SimpleRepository.prototype.delete = function (id, callback) {
        this.pool.query("DELETE FROM " + this.tableName + " WHERE " + this.relativeIdName + " = " + id);
    };
    return SimpleRepository;
}());
/* harmony default export */ __webpack_exports__["a"] = (SimpleRepository);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(13);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var users = [
    new __WEBPACK_IMPORTED_MODULE_1__model_User__["b" /* default */](0, '111', 'Eduardo Mendes', 'dudu-7@hotmail.com', null, __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* UserPermission */].TOTAL),
    new __WEBPACK_IMPORTED_MODULE_1__model_User__["b" /* default */](1, '222', 'Gabriel Mochi Ribeiro', 'gmochi56@outlook.com', 'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4', __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* UserPermission */].TOTAL),
    new __WEBPACK_IMPORTED_MODULE_1__model_User__["b" /* default */](2, '333', 'Matheus Moreira', 'matheusm920@htomail.com', null, __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* UserPermission */].TOTAL),
    new __WEBPACK_IMPORTED_MODULE_1__model_User__["b" /* default */](3, '444', 'Maia', 'victor.gabriel.barbosa.maia@hotmail.com', null, __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* UserPermission */].TOTAL)
];
router.get('/', function (req, res) {
    res.json(users);
});
router.get('/:id', function (req, res) {
    if (req.params.id) {
        var foundUser = users.find(function (user) { return user.id === parseInt(req.params.id, 10); });
        if (foundUser) {
            res.json(foundUser);
        }
        else {
            res.status(404).end('User not found.');
        }
    }
    else {
        res.status(422).end('id parameter is missing.');
    }
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPermission; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Identifiable__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, distinctId, email, name, thumbnail, permission) {
        if (permission === void 0) { permission = UserPermission.LOW; }
        var _this = _super.call(this, id) || this;
        _this.distinctId = distinctId;
        _this.email = email;
        _this.name = name;
        _this.thumbnail = thumbnail;
        _this.permission = permission;
        return _this;
    }
    return User;
}(__WEBPACK_IMPORTED_MODULE_0__Identifiable__["a" /* default */]));
/* harmony default export */ __webpack_exports__["b"] = (User);
var UserPermission;
(function (UserPermission) {
    UserPermission["LOW"] = "LOW";
    UserPermission["HIGH"] = "HIGH";
    UserPermission["TOTAL"] = "TOTAL";
})(UserPermission || (UserPermission = {}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Identifiable = /** @class */ (function () {
    function Identifiable(id) {
        this.id = id;
    }
    return Identifiable;
}());
/* harmony default export */ __webpack_exports__["a"] = (Identifiable);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and
 * RFC7538 (Permanent Redirect) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 */

var statusCodes = {};

statusCodes[exports.ACCEPTED = 202] = "Accepted";
statusCodes[exports.BAD_GATEWAY = 502] = "Bad Gateway";
statusCodes[exports.BAD_REQUEST = 400] = "Bad Request";
statusCodes[exports.CONFLICT = 409] = "Conflict";
statusCodes[exports.CONTINUE = 100] = "Continue";
statusCodes[exports.CREATED = 201] = "Created";
statusCodes[exports.EXPECTATION_FAILED = 417] = "Expectation Failed";
statusCodes[exports.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
statusCodes[exports.FORBIDDEN = 403] = "Forbidden";
statusCodes[exports.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
statusCodes[exports.GONE = 410] = "Gone";
statusCodes[exports.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
statusCodes[exports.IM_A_TEAPOT = 418] = "I'm a teapot";
statusCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
statusCodes[exports.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
statusCodes[exports.INTERNAL_SERVER_ERROR = 500] = "Server Error";
statusCodes[exports.LENGTH_REQUIRED = 411] = "Length Required";
statusCodes[exports.LOCKED = 423] = "Locked";
statusCodes[exports.METHOD_FAILURE = 420] = "Method Failure";
statusCodes[exports.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
statusCodes[exports.MOVED_PERMANENTLY = 301] = "Moved Permanently";
statusCodes[exports.MOVED_TEMPORARILY = 302] = "Moved Temporarily";
statusCodes[exports.MULTI_STATUS = 207] = "Multi-Status";
statusCodes[exports.MULTIPLE_CHOICES = 300] = "Multiple Choices";
statusCodes[exports.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
statusCodes[exports.NO_CONTENT = 204] = "No Content";
statusCodes[exports.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
statusCodes[exports.NOT_ACCEPTABLE = 406] = "Not Acceptable";
statusCodes[exports.NOT_FOUND = 404] = "Not Found";
statusCodes[exports.NOT_IMPLEMENTED = 501] = "Not Implemented";
statusCodes[exports.NOT_MODIFIED = 304] = "Not Modified";
statusCodes[exports.OK = 200] = "OK";
statusCodes[exports.PARTIAL_CONTENT = 206] = "Partial Content";
statusCodes[exports.PAYMENT_REQUIRED = 402] = "Payment Required";
statusCodes[exports.PERMANENT_REDIRECT = 308] = "Permanent Redirect";
statusCodes[exports.PRECONDITION_FAILED = 412] = "Precondition Failed";
statusCodes[exports.PRECONDITION_REQUIRED = 428] = "Precondition Required";
statusCodes[exports.PROCESSING = 102] = "Processing";
statusCodes[exports.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
statusCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
statusCodes[exports.REQUEST_TIMEOUT = 408] = "Request Timeout";
statusCodes[exports.REQUEST_TOO_LONG = 413] = "Request Entity Too Large";
statusCodes[exports.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
statusCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
statusCodes[exports.RESET_CONTENT = 205] = "Reset Content";
statusCodes[exports.SEE_OTHER = 303] = "See Other";
statusCodes[exports.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
statusCodes[exports.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
statusCodes[exports.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
statusCodes[exports.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
statusCodes[exports.UNAUTHORIZED = 401] = "Unauthorized";
statusCodes[exports.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
statusCodes[exports.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
statusCodes[exports.USE_PROXY = 305] = "Use Proxy";

exports.getStatusText = function(statusCode) {
  if (statusCodes.hasOwnProperty(statusCode)) {
    return statusCodes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_LocalRepository__ = __webpack_require__(18);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var localRepository = new __WEBPACK_IMPORTED_MODULE_2__repository_LocalRepository__["a" /* default */]();
router.get('/', function (req, res) {
    localRepository.getAll(function (err, results) {
        if (err) {
            console.error(err);
            res.status(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1__node_modules_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        }
        else {
            res.json(results);
        }
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleRepository__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LocalRepository = /** @class */ (function (_super) {
    __extends(LocalRepository, _super);
    function LocalRepository() {
        return _super.call(this, __WEBPACK_IMPORTED_MODULE_0____["a" /* default */], 'local') || this;
    }
    return LocalRepository;
}(__WEBPACK_IMPORTED_MODULE_1__SimpleRepository__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (LocalRepository);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map