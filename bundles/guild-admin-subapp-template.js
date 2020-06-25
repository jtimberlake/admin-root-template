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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@guildeducationinc/guild-admin-utils/utils/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@guildeducationinc/guild-admin-utils/utils/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __webpack_require__(/*! ./register */ "./node_modules/@guildeducationinc/guild-admin-utils/utils/register.js");
exports.getLabel = register_1.getLabel;
exports.getRoute = register_1.getRoute;
exports.getRoles = register_1.getRoles;
exports.register = register_1.register;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@guildeducationinc/guild-admin-utils/utils/register.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@guildeducationinc/guild-admin-utils/utils/register.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var globalNamespace = '__guildAdminApps';
var labelKey = '__navLabel';
var routeKey = '__route';
var roleKey = '__roles';
exports.getLabel = function (App) {
    return App[globalNamespace][labelKey];
};
exports.getRoute = function (App) {
    return App[globalNamespace][routeKey];
};
exports.getRoles = function (App) {
    return App[globalNamespace][roleKey];
};
exports.register = function (App, config) {
    App[globalNamespace] = {};
    App[globalNamespace][labelKey] = config.label;
    App[globalNamespace][roleKey] = config.roles || [];
    App[globalNamespace][routeKey] = config.route || App.displayName;
};
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, author, license, scripts, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"guild-admin-subapp-template\",\"version\":\"1.0.0\",\"main\":\"index.js\",\"author\":\"Guild Education Inc\",\"license\":\"MIT\",\"scripts\":{\"build:aws:bundle\":\"cross-env NODE_ENV=dev webpack\",\"start\":\"cross-env NODE_ENV=dev webpack-dev-server --config ./webpack.local.js\"},\"devDependencies\":{\"@guildeducationinc/guild-admin-github-actions\":\"^2.0.1\",\"@guildeducationinc/guild-auth\":\"^1.3.5\",\"@guildeducationinc/prettier-config\":\"^2.0.1\",\"@hot-loader/react-dom\":\"^16.13.0\",\"@types/node\":\"^12.12.31\",\"@types/react-dom\":\"^16.9.5\",\"@types/react-router-dom\":\"^5.1.3\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^2.1.1\",\"dotenv-webpack\":\"^1.8.0\",\"html-webpack-plugin\":\"^4.0.2\",\"json5-loader\":\"^4.0.0\",\"mini-css-extract-plugin\":\"^0.9.0\",\"node-sass\":\"^4.13.1\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"postcss\":\"^7.0.16\",\"postcss-loader\":\"^3.0.0\",\"postcss-preset-env\":\"^6.6.0\",\"prettier\":\"^2.0.2\",\"sass-loader\":\"^7.1.0\",\"terser-webpack-plugin\":\"^2.3.5\",\"ts-loader\":\"^6.2.2\",\"tslib\":\"^1.11.1\",\"typescript\":\"^3.8.3\",\"webpack\":\"^4.42.1\",\"webpack-cli\":\"^3.3.11\",\"webpack-dev-server\":\"^3.4.3\"},\"dependencies\":{\"@guildeducationinc/guild-admin-utils\":\"^1.1.2\",\"@guildeducationinc/recess\":\"^5.6.0\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"react-router-dom\":\"^5.1.2\"}}");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var guild_admin_utils_1 = __webpack_require__(/*! @guildeducationinc/guild-admin-utils */ "./node_modules/@guildeducationinc/guild-admin-utils/utils/index.js");
var Example_1 = __importDefault(__webpack_require__(/*! ./Example */ "./src/Example.tsx"));
var package_json_1 = __webpack_require__(/*! ../package.json */ "./package.json");
var App = function (props) {
    return (React.createElement(Example_1.default, null));
};
exports.default = App;
/**
 * This function is used to register your admin sub-application with the root-application it
 * will be deployed into.
 */
guild_admin_utils_1.register(App, {
    /**
     * This is the route that your application land on when your app is navigated to from the root-application nav bar.
     * Make sure it's unique and accureartly reflects what your application does.
     */
    route: "/" + package_json_1.name,
    /**
     * This is the label that users will see for your application in the root-application nav-bar.
     */
    label: package_json_1.name,
    /**
     * Auth0 roles that are allowed to access this app. Only roles listed here will be able to access
     * the app and see it in the nav bar.
     *
     * Defaults to all roles
     */
    roles: ['admin']
});


/***/ }),

/***/ "./src/Example.tsx":
/*!*************************!*\
  !*** ./src/Example.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DELETE ME. This Example is for documentation purposes only.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var Route_1 = __importDefault(__webpack_require__(/*! ./components/shared/Route */ "./src/components/shared/Route.tsx"));
var Link_1 = __importDefault(__webpack_require__(/*! ./components/shared/Link */ "./src/components/shared/Link.tsx"));
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.
/**
 * Can't use <Switch> with a custom wrapper around `Route` because <Switch> does a shallow
 * clone of children and as a result will not see the mapped path value. It only sees the original path value
 */
function Example() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Route_1.default, { exact: true, path: "/", component: function () { return (React.createElement("div", null,
                "Welcome to your subapp. ",
                React.createElement("br", null),
                "This routes lives at ",
                React.createElement("code", null, "/"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: "/customRoute" }, "Custom Route"))))); } }),
        React.createElement(Route_1.default, { path: "/customRoute", component: function () { return (React.createElement("div", null,
                "This is my a custom route and lives at ",
                React.createElement("code", null, "admin/customRoute"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: "/" }, "Home"))))); } })));
}
exports.default = Example;


/***/ }),

/***/ "./src/components/shared/Link.tsx":
/*!****************************************!*\
  !*** ./src/components/shared/Link.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var guild_admin_utils_1 = __webpack_require__(/*! @guildeducationinc/guild-admin-utils */ "./node_modules/@guildeducationinc/guild-admin-utils/utils/index.js");
var App_1 = __importDefault(__webpack_require__(/*! ../../App */ "./src/App.tsx"));
var AdminLink = function (props) {
    var baseRoute = guild_admin_utils_1.getRoute(App_1.default);
    var to = props.to, rest = __rest(props, ["to"]);
    var computedRoute = to === '/' ? baseRoute : "" + baseRoute + to;
    return (React.createElement(react_router_dom_1.Link, __assign({}, rest, { to: computedRoute })));
};
exports.default = AdminLink;


/***/ }),

/***/ "./src/components/shared/Route.tsx":
/*!*****************************************!*\
  !*** ./src/components/shared/Route.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var App_1 = __importDefault(__webpack_require__(/*! ../../App */ "./src/App.tsx"));
var React = __importStar(__webpack_require__(/*! react */ "react"));
var guild_admin_utils_1 = __webpack_require__(/*! @guildeducationinc/guild-admin-utils */ "./node_modules/@guildeducationinc/guild-admin-utils/utils/index.js");
var AdminRoute = function (props) {
    var baseRoute = guild_admin_utils_1.getRoute(App_1.default);
    var path = props.path, rest = __rest(props, ["path"]);
    var computedRoute = path === '/' ? baseRoute : "" + baseRoute + path;
    return (React.createElement(react_router_dom_1.Route, __assign({}, rest, { path: computedRoute })));
};
exports.default = AdminRoute;


/***/ }),

/***/ "react":
/*!*********************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react"} ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!*******************************************************************************!*\
  !*** external {"commonjs":"react-router-dom","commonjs2":"react-router-dom"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ })["default"];