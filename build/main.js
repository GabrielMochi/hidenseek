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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("typegoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultSchemaOption;
function createDefaultSchemaOption() {
    return {
        versionKey: false,
        timestamps: true,
        toObject: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            }
        },
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            }
        }
    };
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typegoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__ = __webpack_require__(2);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategorySchema = /** @class */ (function (_super) {
    __extends(CategorySchema, _super);
    function CategorySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, unique: true, minlength: 1, maxlength: 64 }),
        __metadata("design:type", String)
    ], CategorySchema.prototype, "name", void 0);
    return CategorySchema;
}(__WEBPACK_IMPORTED_MODULE_0_typegoose__["Typegoose"]));

var CategoryModel = new CategorySchema()
    .getModelForClass(CategorySchema, {
    schemaOptions: Object(__WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__["a" /* createDefaultSchemaOption */])()
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(10);
// dependencies



// config

// routes

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
if (true) {
    new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();
}
app.use(nuxt.render);
app.listen(port, function () {
    console.info("The server is running on port: " + port);
});
// Generic error handler
process.on('uncaughtException', function (error) {
    console.error(error);
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var packageJson = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports) {

module.exports = {"name":"hidenseek","version":"1.0.4","description":"Aplicação Web para busca de objetos perdidos.","private":true,"dependencies":{"@types/express-session":"^1.15.10","@types/mongoose":"^5.2.7","@types/mysql":"^2.15.5","@types/validator":"^9.4.2","axios":"^0.18.0","babel-polyfill":"^6.26.0","body-parser":"^1.18.3","express":"^4.16.3","express-session":"^1.15.6","express-validator":"^5.3.0","http-status-codes":"^1.3.0","mongoose":"^5.2.10","mongoose-autopopulate":"^0.9.0","mysql":"^2.15.0","nuxt":"^1.4.0","nuxt-class-component":"^1.2.0","nuxt-property-decorator":"^1.2.0","password-validator":"^4.1.1","qs":"^6.5.1","rxjs":"^5.5.6","typegoose":"^5.4.1","validator":"^10.8.0","vue-class-component":"^6.2.0","vue-property-decorator":"^6.0.0","vue-rx":"^5.0.0","vuetify":"^1.0.4","vuex":"^3.0.1","vuex-class":"^0.3.0"},"scripts":{"dev":"cross-env NODE_ENV=development NODE_PATH=./ backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production NODE_PATH=./ node build/main.js","test":"jest --no-cache","generate":"nuxt generate","server":"npm run build && npm run start"},"devDependencies":{"@reactivex/rxjs":"^5.5.6","@types/axios":"^0.14.0","@types/express":"^4.11.1","@types/jest":"^22.1.4","@types/node":"^9.4.6","@types/qs":"^6.5.1","@types/vue":"^2.0.0","babel-jest":"^22.4.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.5","babel-preset-stage-2":"^6.24.1","babel-preset-vue-app":"^2.0.0","backpack-core":"^0.7.0","cross-env":"^5.2.0","jest":"^22.4.2","jest-serializer-vue":"^0.3.0","jest-vue-preprocessor":"^1.3.1","stylus":"^0.54.5","stylus-loader":"^3.0.2","ts-jest":"^22.4.1","ts-loader":"^3.5.0","tslint":"^5.9.1","tslint-config-standard":"^7.0.0","typescript":"~2.5.3","vue-language-server":"^0.0.30","vue-template-compiler":"^2.5.13","vue-test-utils":"^1.0.0-beta.11","wallaby-vue-compiler":"^1.0.2"}}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user__ = __webpack_require__(23);









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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__ = __webpack_require__(4);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var categories, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__["a" /* CategoryModel */].find({}).exec()];
            case 1:
                categories = _a.sent();
                res.json(categories);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newCategory, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, new __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__["a" /* CategoryModel */](req.body).save()];
            case 1:
                newCategory = _a.sent();
                res.json(newCategory);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/saveAll', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newCategories, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__["a" /* CategoryModel */].create(req.body)];
            case 1:
                newCategories = _a.sent();
                res.json(newCategories);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var modifiedCategory, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__["a" /* CategoryModel */].findOneAndUpdate({ _id: req.params.id }, req.body).exec()];
            case 1:
                modifiedCategory = _a.sent();
                res.json(modifiedCategory);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/:id', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2__schemas_CategorySchema__["a" /* CategoryModel */].remove({ _id: req.params.id }).exec()
        .then(function () {
        res.end();
    })
        .catch(function (error) {
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
        throw error;
    });
});
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schemas_ItemSchema__ = __webpack_require__(15);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2__schemas_ItemSchema__["a" /* ItemModel */].find({})
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
    var item = new __WEBPACK_IMPORTED_MODULE_2__schemas_ItemSchema__["a" /* ItemModel */](req.body);
    item.save()
        .then(function () {
        res.send(item.id);
    })
        .catch(function (err) {
        console.error(err);
        res.status(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]).end(Object(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["getStatusText"])(__WEBPACK_IMPORTED_MODULE_1_http_status_codes__["INTERNAL_SERVER_ERROR"]));
    });
});
// router.put('/:id', (req: Request, res: Response) => {
//   ItemModel.findOneAndUpdate({ _id:   })
// })
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typegoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CategorySchema__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocalSchema__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserSchema__ = __webpack_require__(17);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemSchema = /** @class */ (function (_super) {
    __extends(ItemSchema, _super);
    function ItemSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, minlength: 1, maxlength: 144 }),
        __metadata("design:type", String)
    ], ItemSchema.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true }),
        __metadata("design:type", Buffer)
    ], ItemSchema.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ default: Date.now, validate: function (value) { return value <= new Date(); } }),
        __metadata("design:type", Date)
    ], ItemSchema.prototype, "foundDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, ref: __WEBPACK_IMPORTED_MODULE_3__LocalSchema__["a" /* LocalSchema */] }),
        __metadata("design:type", Object)
    ], ItemSchema.prototype, "local", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, ref: __WEBPACK_IMPORTED_MODULE_4__UserSchema__["a" /* UserSchema */] }),
        __metadata("design:type", Object)
    ], ItemSchema.prototype, "employee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["arrayProp"])({ required: true, itemsRef: __WEBPACK_IMPORTED_MODULE_2__CategorySchema__["b" /* CategorySchema */] }),
        __metadata("design:type", Array)
    ], ItemSchema.prototype, "categories", void 0);
    return ItemSchema;
}(__WEBPACK_IMPORTED_MODULE_0_typegoose__["Typegoose"]));

var ItemModel = new ItemSchema()
    .getModelForClass(ItemSchema, {
    schemaOptions: Object(__WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__["a" /* createDefaultSchemaOption */])()
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalSchema; });
/* unused harmony export LocalModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typegoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__ = __webpack_require__(2);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalSchema = /** @class */ (function (_super) {
    __extends(LocalSchema, _super);
    function LocalSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, minlength: 1, maxlength: 64 }),
        __metadata("design:type", String)
    ], LocalSchema.prototype, "name", void 0);
    return LocalSchema;
}(__WEBPACK_IMPORTED_MODULE_0_typegoose__["Typegoose"]));

var LocalModel = new LocalSchema()
    .getModelForClass(LocalSchema, {
    schemaOptions: Object(__WEBPACK_IMPORTED_MODULE_1__util_typegooseTools__["a" /* createDefaultSchemaOption */])()
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSchema; });
/* unused harmony export UserModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typegoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typegoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_User__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_typegooseTools__ = __webpack_require__(2);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSchema = /** @class */ (function (_super) {
    __extends(UserSchema, _super);
    function UserSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, unique: true, minlength: 1, maxlength: 64 }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "distinctId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, unique: true, minlength: 1, maxlength: 256 }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ required: true, minlength: 1, maxlength: 256, validate: function (value) { return Object(__WEBPACK_IMPORTED_MODULE_1_validator__["isEmail"])(value); } }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])(),
        __metadata("design:type", Buffer)
    ], UserSchema.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_typegoose__["prop"])({ enum: __WEBPACK_IMPORTED_MODULE_2__domain_User__["a" /* Permission */], default: __WEBPACK_IMPORTED_MODULE_2__domain_User__["a" /* Permission */].LOW }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "permission", void 0);
    return UserSchema;
}(__WEBPACK_IMPORTED_MODULE_0_typegoose__["Typegoose"]));

var UserModel = new UserSchema()
    .getModelForClass(UserSchema, {
    schemaOptions: Object(__WEBPACK_IMPORTED_MODULE_3__util_typegooseTools__["a" /* createDefaultSchemaOption */])()
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permission; });
var User = /** @class */ (function () {
    function User(_id, distinctId, email, name, thumbnail, permission) {
        if (permission === void 0) { permission = Permission.LOW; }
        this._id = _id;
        this.distinctId = distinctId;
        this.email = email;
        this.name = name;
        this.thumbnail = thumbnail;
        this.permission = permission;
    }
    return User;
}());
/* unused harmony default export */ var _unused_webpack_default_export = (User);
var Permission;
(function (Permission) {
    Permission["LOW"] = "LOW";
    Permission["HIGH"] = "HIGH";
    Permission["TOTAL"] = "TOTAL";
})(Permission || (Permission = {}));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

// import Local from '../schema/LocalSchema'
var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
// router.get('/', (req, res) => {
//   Local.find({}).exec()
//     .then((locals) => {
//       res.send(locals)
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
//     })
// })
// router.post('/', (req, res) => {
//   const local = new Local(req.body)
//   local.save()
//     .then(() => {
//       res.send(local.id)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
//     })
// })
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status_codes__ = __webpack_require__(3);
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
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

// import User from '../schema/UserSchema'
var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
// router.get('/', (req, res) => {
//   User.find({}).exec()
//     .then((users) => {
//       res.send(users)
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
//     })
// })
// router.post('/', (req, res) => {
//   const user = new User(req.body)
//   user.save()
//     .then(() => {
//       res.send(user.id)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
//     })
// })
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map