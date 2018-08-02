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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql__ = __webpack_require__(13);
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
/* 3 */
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
        this.pool.query("SELECT * FROM " + this.tableName + " WHERE " + this.relativeIdName + " = ?", id, callback);
    };
    SimpleRepository.prototype.getAll = function (callback) {
        this.pool.query("SELECT * FROM " + this.tableName, callback);
    };
    SimpleRepository.prototype.insert = function (element, callback) {
        this.pool.query("INSERT INTO " + this.tableName + " SET ?", element, callback);
    };
    SimpleRepository.prototype.update = function (element, callback) {
        this.pool.query("UPDATE " + this.tableName + " SET ? WHERE " + this.relativeIdName + " = ?", [element, element.id], callback);
    };
    SimpleRepository.prototype.delete = function (id, callback) {
        this.pool.query("DELETE FROM " + this.tableName + " WHERE " + this.relativeIdName + " = ?", id, callback);
    };
    return SimpleRepository;
}());
/* harmony default export */ __webpack_exports__["a"] = (SimpleRepository);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nuxt_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(8);
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
    new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt).build();
}
app.use(nuxt.render);
app.listen(port, function () {
    console.info("The server is running on port: " + port);
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var packageJson = __webpack_require__(7);

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    version: packageJson.version
  },
  router: {
    middleware: 'checkAuth'
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
    vendor: ['axios', 'vuex-class', 'nuxt-class-component', 'babel-polyfill'],
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    }
  },
  modules: ['~/modules/typescript'],
  vendor: ['~/plugins/vuetify'],
  extractCSS: true
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":"hidenseek","version":"1.0.4","description":"Aplicação Web para busca de objetos perdidos.","private":true,"dependencies":{"@types/express-session":"^1.15.10","@types/mysql":"^2.15.5","axios":"^0.18.0","babel-polyfill":"^6.26.0","body-parser":"^1.18.3","express":"^4.16.3","express-session":"^1.15.6","http-status-codes":"^1.3.0","mysql":"^2.15.0","nuxt":"^1.4.0","nuxt-class-component":"^1.2.0","nuxt-property-decorator":"^1.2.0","qs":"^6.5.1","rxjs":"^5.5.6","vue-class-component":"^6.2.0","vue-property-decorator":"^6.0.0","vue-rx":"^5.0.0","vuetify":"^1.0.4","vuex":"^3.0.1","vuex-class":"^0.3.0"},"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","test":"jest --no-cache","generate":"nuxt generate","server":"npm run build && npm run start"},"devDependencies":{"@reactivex/rxjs":"^5.5.6","@types/axios":"^0.14.0","@types/express":"^4.11.1","@types/jest":"^22.1.4","@types/node":"^9.4.6","@types/qs":"^6.5.1","@types/vue":"^2.0.0","babel-jest":"^22.4.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.5","babel-preset-stage-2":"^6.24.1","babel-preset-vue-app":"^2.0.0","backpack-core":"^0.7.0","cross-env":"^5.1.5","jest":"^22.4.2","jest-serializer-vue":"^0.3.0","jest-vue-preprocessor":"^1.3.1","stylus":"^0.54.5","stylus-loader":"^3.0.2","ts-jest":"^22.4.1","ts-loader":"^3.5.0","tslint":"^5.9.1","tslint-config-standard":"^7.0.0","typescript":"~2.5.3","vue-language-server":"^0.0.30","vue-template-compiler":"^2.5.13","vue-test-utils":"^1.0.0-beta.11","wallaby-vue-compiler":"^1.0.2"}}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user__ = __webpack_require__(18);








var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
router.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
router.use(__WEBPACK_IMPORTED_MODULE_2_express_session___default()({
    secret: '2yHnRnuDEfpdIUyzFONyfjMXWpFeHGDZ',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
router.use('/user', __WEBPACK_IMPORTED_MODULE_7__user__["a" /* default */]);
router.use('/category', __WEBPACK_IMPORTED_MODULE_3__category__["a" /* default */]);
router.use('/local', __WEBPACK_IMPORTED_MODULE_4__local__["a" /* default */]);
router.use('/login', __WEBPACK_IMPORTED_MODULE_5__login__["a" /* default */]);
router.use('/logout', __WEBPACK_IMPORTED_MODULE_6__logout__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_CategoryRepository__ = __webpack_require__(12);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var categoryRepository = new __WEBPACK_IMPORTED_MODULE_2__repository_CategoryRepository__["a" /* default */]();
router.get('/', function (req, res) {
    categoryRepository.getAll(function (err, results) {
        if (err) {
            console.error(err);
            res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        }
        else {
            res.json(results);
        }
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleRepository__ = __webpack_require__(3);
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_LocalRepository__ = __webpack_require__(15);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
var localRepository = new __WEBPACK_IMPORTED_MODULE_2__repository_LocalRepository__["a" /* default */]();
router.get('/', function (req, res) {
    localRepository.getAll(function (err, results) {
        if (err) {
            console.error(err);
            res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        }
        else {
            res.json(results);
        }
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleRepository__ = __webpack_require__(3);
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


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.post('/', function (req, res) {
    if (req.body.username === 'demo' && req.body.password === 'demo') {
        res.json((req.session.user = { username: req.body.username }));
    }
    else {
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["UNAUTHORIZED"]).end();
    }
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.post('/', function (req, res) {
    delete req.session.user;
    res.end();
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(19);


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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPermission; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Identifiable__ = __webpack_require__(20);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Identifiable = /** @class */ (function () {
    function Identifiable(id) {
        this.id = id;
    }
    return Identifiable;
}());
/* harmony default export */ __webpack_exports__["a"] = (Identifiable);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map