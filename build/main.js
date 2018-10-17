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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(7);
// dependencies



// config

// routes

__WEBPACK_IMPORTED_MODULE_3__nuxt_config__["dev"] = "development" !== 'production';
var nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](__WEBPACK_IMPORTED_MODULE_3__nuxt_config__);
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var port = parseInt(process.env.PORT, 10) || 3000;
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.set('useCreateIndex', true);
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect('mongodb://localhost:27017/hidenseek', { useNewUrlParser: true })
    .then(function () { return console.log('The system was successfully connected to the database.'); })
    .catch(function (error) {
    console.error(error);
    process.exit(1);
});
app.set('port', port);
app.use('/api', __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */]);
if (__WEBPACK_IMPORTED_MODULE_3__nuxt_config__["dev"]) {
    new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();
}
app.use(nuxt.render);
app.listen(port, function () {
    console.info("The server is running on port: " + port);
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var packageJson = __webpack_require__(6);

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
    color: '#90caf9',
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
/* 6 */
/***/ (function(module, exports) {

module.exports = {"name":"hidenseek","version":"1.0.4","description":"Aplicação Web para busca de objetos perdidos.","private":true,"dependencies":{"@types/express-session":"^1.15.10","@types/mongoose":"^5.2.7","@types/mysql":"^2.15.5","axios":"^0.18.0","babel-polyfill":"^6.26.0","body-parser":"^1.18.3","express":"^4.16.3","express-session":"^1.15.6","express-validator":"^5.3.0","http-status-codes":"^1.3.0","mongoose":"^5.2.10","mysql":"^2.15.0","nuxt":"^1.4.0","nuxt-class-component":"^1.2.0","nuxt-property-decorator":"^1.2.0","qs":"^6.5.1","rxjs":"^5.5.6","vue-class-component":"^6.2.0","vue-property-decorator":"^6.0.0","vue-rx":"^5.0.0","vuetify":"^1.0.4","vuex":"^3.0.1","vuex-class":"^0.3.0"},"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","test":"jest --no-cache","generate":"nuxt generate","server":"npm run build && npm run start"},"devDependencies":{"@reactivex/rxjs":"^5.5.6","@types/axios":"^0.14.0","@types/express":"^4.11.1","@types/jest":"^22.1.4","@types/node":"^9.4.6","@types/qs":"^6.5.1","@types/vue":"^2.0.0","babel-jest":"^22.4.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.5","babel-preset-stage-2":"^6.24.1","babel-preset-vue-app":"^2.0.0","backpack-core":"^0.7.0","cross-env":"^5.1.5","jest":"^22.4.2","jest-serializer-vue":"^0.3.0","jest-vue-preprocessor":"^1.3.1","stylus":"^0.54.5","stylus-loader":"^3.0.2","ts-jest":"^22.4.1","ts-loader":"^3.5.0","tslint":"^5.9.1","tslint-config-standard":"^7.0.0","typescript":"~2.5.3","vue-language-server":"^0.0.30","vue-template-compiler":"^2.5.13","vue-test-utils":"^1.0.0-beta.11","wallaby-vue-compiler":"^1.0.2"}}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user__ = __webpack_require__(19);









var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
router.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
router.use(__WEBPACK_IMPORTED_MODULE_2_express_session___default()({
    secret: '2yHnRnuDEfpdIUyzFONyfjMXWpFeHGDZ',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
router.use('/category', __WEBPACK_IMPORTED_MODULE_3__category__["a" /* default */]);
router.use('/item', __WEBPACK_IMPORTED_MODULE_4__item__["a" /* default */]);
router.use('/local', __WEBPACK_IMPORTED_MODULE_5__local__["a" /* default */]);
router.use('/login', __WEBPACK_IMPORTED_MODULE_6__login__["a" /* default */]);
router.use('/logout', __WEBPACK_IMPORTED_MODULE_7__logout__["a" /* default */]);
router.use('/user', __WEBPACK_IMPORTED_MODULE_8__user__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_validator_check__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_validator_check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_validator_check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_Category__ = __webpack_require__(12);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_3__schema_Category__["a" /* default */].find({}).exec()
        .then(function (categories) {
        res.send(categories);
    })
        .catch(function (error) {
        res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        throw error;
    });
});
router.post('/', [Object(__WEBPACK_IMPORTED_MODULE_1_express_validator_check__["check"])('name').isLength({ min: 1, max: 64 })], function (req, res) {
    var errors = Object(__WEBPACK_IMPORTED_MODULE_1_express_validator_check__["validationResult"])(req);
    if (!errors.isEmpty()) {
        return res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["UNPROCESSABLE_ENTITY"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["UNPROCESSABLE_ENTITY"]));
    }
    (new __WEBPACK_IMPORTED_MODULE_3__schema_Category__["a" /* default */](req.body)).save()
        .then(function () {
        res.end();
    })
        .catch(function (error) {
        res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        throw error;
    });
});
router.put('/:id', [Object(__WEBPACK_IMPORTED_MODULE_1_express_validator_check__["check"])('name').isLength({ min: 1, max: 64 })], function (req, res) {
    var erros = Object(__WEBPACK_IMPORTED_MODULE_1_express_validator_check__["validationResult"])(req);
    if (!erros.isEmpty()) {
        return res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["UNPROCESSABLE_ENTITY"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["UNPROCESSABLE_ENTITY"]));
    }
    __WEBPACK_IMPORTED_MODULE_3__schema_Category__["a" /* default */].findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err) {
        if (err) {
            res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]));
            throw err;
        }
        res.end();
    });
});
router.delete('/:id', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_3__schema_Category__["a" /* default */].remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.status(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_2_http_status_codes__["INTERNAL_SERVER_ERROR"]));
            throw err;
        }
        res.end();
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var CategorySchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    name: { type: String, required: true, unique: true }
}, {
    timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Category', CategorySchema));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_Item__ = __webpack_require__(14);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2__schema_Item__["a" /* default */].find({})
        .populate('employee')
        .populate('local')
        .populate('categories')
        .exec()
        .then(function (items) {
        res.send(items);
    })
        .catch(function (error) {
        console.error(error);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
router.post('/', function (req, res) {
    var item = new __WEBPACK_IMPORTED_MODULE_2__schema_Item__["a" /* default */](req.body);
    item.save()
        .then(function () {
        res.send(item.id);
    })
        .catch(function (err) {
        console.error(err);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var ItemSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    found_date: { type: Date, required: true },
    employee: { type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId, ref: 'User', required: true },
    local: { type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId, ref: 'Local', required: true },
    categories: [{ type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId, ref: 'Category', required: true }]
}, {
    timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Item', ItemSchema));


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_Local__ = __webpack_require__(16);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2__schema_Local__["a" /* default */].find({}).exec()
        .then(function (locals) {
        res.send(locals);
    })
        .catch(function (error) {
        console.error(error);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
router.post('/', function (req, res) {
    var local = new __WEBPACK_IMPORTED_MODULE_2__schema_Local__["a" /* default */](req.body);
    local.save()
        .then(function () {
        res.send(local.id);
    })
        .catch(function (err) {
        console.error(err);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var LocalSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Local', LocalSchema));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(2);
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
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_User__ = __webpack_require__(20);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2__schema_User__["a" /* default */].find({}).exec()
        .then(function (users) {
        res.send(users);
    })
        .catch(function (error) {
        console.error(error);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
router.post('/', function (req, res) {
    var user = new __WEBPACK_IMPORTED_MODULE_2__schema_User__["a" /* default */](req.body);
    user.save()
        .then(function () {
        res.send(user.id);
    })
        .catch(function (err) {
        console.error(err);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    distinctId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    thumbnail: { type: String },
    permission: { type: String, required: true, enum: ['LOW', 'HIGH', 'TOTAL'] }
}, {
    timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema));


/***/ })
/******/ ]);
//# sourceMappingURL=main.map