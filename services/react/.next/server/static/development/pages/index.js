module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.tsx":
/*!********************!*\
  !*** ./config.tsx ***!
  \********************/
/*! exports provided: AppName, Logo, LogoWhite, CookieConsentIsEagerlyAccepted, IpgeolocationioKey, Version, GetEnv, ApiUrl, GetMixpanelId, GetGoogleTagManagerTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppName", function() { return AppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWhite", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieConsentIsEagerlyAccepted", function() { return CookieConsentIsEagerlyAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpgeolocationioKey", function() { return IpgeolocationioKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEnv", function() { return GetEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMixpanelId", function() { return GetMixpanelId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGoogleTagManagerTag", function() { return GetGoogleTagManagerTag; });
// import axios from "axios";
var PackageJson = __webpack_require__(/*! ./package.json */ "./package.json"); // Const variables


var AppName = "HookedJS";
var Logo = "/static/logo.svg";

var CookieConsentIsEagerlyAccepted = true;
var IpgeolocationioKey = "b411927ec4954792905331b2dee8cb7b"; // Calculated variables

var Version = PackageJson.version;
var GetEnv = function GetEnv() {
  return window.location.hostname.includes("hookedjs.org") && "production" || window.location.hostname.includes("stage.hookedjs.org") && "staging" || "dev";
};
var ApiUrl = "/graphql"; // export const Api = axios.create({baseURL: ApiUrl, timeout: 10000});

var GetMixpanelId = function GetMixpanelId() {
  return GetEnv() === "production" ? "" : "";
};
var GetGoogleTagManagerTag = function GetGoogleTagManagerTag() {
  return GetEnv() === "production" ? "(function(w,d,s,l,i)(...GTM-XXXXXXX');" : "(function(w,d,s,l,i)(...GTM-XXXXXXX');";
};

/***/ }),

/***/ "./layouts/Base.tsx":
/*!**************************!*\
  !*** ./layouts/Base.tsx ***!
  \**************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/layouts/Base.tsx";


var Base = function Base(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3256269571",
    __self: this
  }, "body{margin:0;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbmRvbWJyb3dza2kvRGV2L05vZGUvaG9va2VkanMvaG9va2VkanMvc2VydmljZXMvcmVhY3QvbGF5b3V0cy9CYXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIsQUFHZ0IsQUFHSSxTQUZmLElBR0EiLCJmaWxlIjoiL1VzZXJzL2JyaWFuZG9tYnJvd3NraS9EZXYvTm9kZS9ob29rZWRqcy9ob29rZWRqcy9zZXJ2aWNlcy9yZWFjdC9sYXlvdXRzL0Jhc2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgdHlwZSBwcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBCYXNlID0gKHsgY2hpbGRyZW4gfTogcHJvcHMpID0+ICg8RnJhZ21lbnQ+XG4gIHtjaGlsZHJlbn1cblxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIGJvZHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAqOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L0ZyYWdtZW50Pik7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEJhc2UgYXMgdW5rbm93biBhcyBSZWFjdC5Db21wb25lbnRDbGFzcztcbi8vIGV4cG9ydCBkZWZhdWx0IEJhc2U7XG4iXX0= */\n/*@ sourceURL=/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/layouts/Base.tsx */"));
}; // export default Base as unknown as React.ComponentClass;
// export default Base;

/***/ }),

/***/ "./layouts/Sidebar.tsx":
/*!*****************************!*\
  !*** ./layouts/Sidebar.tsx ***!
  \*****************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./layouts/Base.tsx");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Header */ "./modules/Header.tsx");
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Footer */ "./sections/Footer.tsx");
/* harmony import */ var _modules_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/Sidebar */ "./modules/Sidebar.tsx");
var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/layouts/Sidebar.tsx";






var Sidebar = function Sidebar(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Base__WEBPACK_IMPORTED_MODULE_2__["Base"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    style: {
      minHeight: "100vh"
    },
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flex: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#aaa",
    width: [0, 180],
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Sidebar__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_Footer__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./modules/ContactForm.tsx":
/*!*********************************!*\
  !*** ./modules/ContactForm.tsx ***!
  \*********************************/
/*! exports provided: state, ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator/lib/isEmail */ "validator/lib/isEmail");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _polyfills_MobxPersist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../polyfills/MobxPersist */ "./polyfills/MobxPersist.ts");
/* harmony import */ var _primitives_SuccessIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../primitives/SuccessIcon */ "./primitives/SuccessIcon.tsx");
/* harmony import */ var _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/LeadProfile */ "./state/LeadProfile.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Loading */ "./modules/Loading.tsx");






var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/modules/ContactForm.tsx";




 // import {Axios} from "~/core/data/Axios";





var state = Object(mobx__WEBPACK_IMPORTED_MODULE_8__["observable"])({
  form: {
    name: "",
    email: "",
    message: ""
  },
  submitted: false,
  loading: false,
  errors: []
});
Object(_polyfills_MobxPersist__WEBPACK_IMPORTED_MODULE_11__["MobxPersist"])("ContactFormState", state).then(function () {
  // Keep form up to date with lead intel
  Object(mobx__WEBPACK_IMPORTED_MODULE_8__["set"])(state.form, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.form, {
    name: _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"].name,
    email: _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"].email
  }));
  Object(mobx__WEBPACK_IMPORTED_MODULE_8__["reaction"])(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(_state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"]);
  }, function () {
    Object(mobx__WEBPACK_IMPORTED_MODULE_8__["set"])(state.form, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.form, {
      name: _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"].name,
      email: _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"].email
    }));
  });
});
var ContactForm = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref);

  var _state = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])(state);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var optionalFields, errors;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // Cheap validation TODO: Implement full validation

              optionalFields = [];
              errors = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(_state.form).filter(function (_ref3) {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
                    key = _ref4[0],
                    value = _ref4[1];

                return !value && !optionalFields.includes(key);
              }).map(function (_ref5) {
                var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, 2),
                    key = _ref6[0],
                    value = _ref6[1];

                return key;
              });
              if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10___default()(_state.form.email)) errors.push("email"); // @ts-ignore: Ingore unset type for now

              if (!errors.length) {
                _context.next = 7;
                break;
              }

              _state.errors = errors;
              return _context.abrupt("return");

            case 7:
              Object(mobx__WEBPACK_IMPORTED_MODULE_8__["set"])(_state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, _state, {
                errors: [],
                loading: true
              })); // Update LeadProfile

              Object(mobx__WEBPACK_IMPORTED_MODULE_8__["set"])(_state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, _state_LeadProfile__WEBPACK_IMPORTED_MODULE_13__["LeadProfile"], {
                name: _state.form.name,
                email: _state.form.email
              })); // TODO: post to api
              // Axios.post("/feedback", _state.form)
              //   .then(function(response) {
              //     set(_state, {
              //       submitted: true,
              //       loading: false,
              //       form: {
              //         ..._state.form,
              //         message: "",
              //         reason: "",
              //       },
              //     });
              //   })
              //   .catch(function(error) {
              //     set(_state, {
              //       loading: false,
              //     });
              //   });

              Object(mobx__WEBPACK_IMPORTED_MODULE_8__["set"])(_state, {
                submitted: true,
                loading: false,
                form: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, _state.form, {
                  message: ""
                })
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Get Help"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Have a question? Fill out the form below to let us know how we can help.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, _state.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: "success-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_14__["Loading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Feedback received. Thanks!")), _state.submitted && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: "success-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_SuccessIcon__WEBPACK_IMPORTED_MODULE_12__["SuccessIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Feedback received. Thanks!")), !_state.submitted && !_state.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Name *"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    placeholder: "Your Name",
    value: _state.form.name,
    onChange: function onChange(e) {
      return _state.form.name = e.target.value;
    } // error={_state.errors.includes("name") && !_state.form.name}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Email *"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    placeholder: "Email Address",
    value: _state.form.email,
    onChange: function onChange(e) {
      return _state.form.email = e.target.value;
    } // error={_state.errors.includes("email") && !EmailAddressRe.test(_state.form.email)}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Message *"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "textarea",
    placeholder: "Write your message here",
    value: _state.form.message,
    onChange: function onChange(e) {
      return _state.form.message = e.target.value;
    } // error={_state.errors.includes("message") && !_state.form.message}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    disabled: _state.loading,
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, _state.loading ? "Sending..." : "Submit Message"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://www.aarp.org/about-aarp/privacy-policy/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Privacy Policy"))));
});

/***/ }),

/***/ "./modules/Header.tsx":
/*!****************************!*\
  !*** ./modules/Header.tsx ***!
  \****************************/
/*! exports provided: state, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactForm */ "./modules/ContactForm.tsx");
/* harmony import */ var _primitives_HamburgerIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/HamburgerIcon */ "./primitives/HamburgerIcon.tsx");

var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/modules/Header.tsx";







var state = Object(mobx__WEBPACK_IMPORTED_MODULE_3__["observable"])({
  showContactForm: false,
  showHamburgerMenu: false
});
var Header = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _state = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])(state);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    bg: "#673AB7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "React Starter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bg: "magenta",
    onClick: function onClick() {
      return _state.showContactForm = true;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_HamburgerIcon__WEBPACK_IMPORTED_MODULE_7__["HamburgerIcon"], {
    isActive: _state.showHamburgerMenu,
    onClick: function onClick() {
      return _state.showHamburgerMenu = !_state.showHamburgerMenu;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    open: _state.showContactForm,
    onClose: function onClose() {
      _state.showContactForm = false;
      _ContactForm__WEBPACK_IMPORTED_MODULE_6__["state"].submitted = false;
      _ContactForm__WEBPACK_IMPORTED_MODULE_6__["state"].loading = false;
    },
    center: true,
    styles: {
      overlay: {
        zIndex: 99999999999
      },
      closeButton: {
        cursor: "pointer"
      }
    },
    closeIconSize: 50 // closeIconSvgPath={
    //   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //     <path d="m50 6c-24.27684 0-44 19.72314-44 44 0 24.2768 19.72316 44 44 44s44-19.7232 44-44c0-24.27686-19.72316-44-44-44zm0 4c22.115076 0 40 17.8849 40 40s-17.884924 40-40 40-40-17.8849-40-40 17.884924-40 40-40zm-18.21875 19.96875a2.0002 2.0002 0 0 0 -1.1875 3.4375l16.59375 16.59375-16.59375 16.5625a2.0002 2.0002 0 1 0 2.8125 2.84375l16.59375-16.59375 16.59375 16.59375a2.0002 2.0002 0 1 0 2.8125-2.84375l-16.59375-16.5625 16.59375-16.59375a2.0002 2.0002 0 0 0 -1.65625-3.4375 2.0002 2.0002 0 0 0 -1.15625.59375l-16.59375 16.59375-16.59375-16.59375a2.0002 2.0002 0 0 0 -1.625-.59375z"/>
    //   </svg>
    // }
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_6__["ContactForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
});

/***/ }),

/***/ "./modules/Loading.tsx":
/*!*****************************!*\
  !*** ./modules/Loading.tsx ***!
  \*****************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primitives_LoadingIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/LoadingIcon */ "./primitives/LoadingIcon.tsx");

var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/modules/Loading.tsx";



var Loading = function Loading(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "jsx-171387315" + " " + "Loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_primitives_LoadingIcon__WEBPACK_IMPORTED_MODULE_3__["LoadingIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "171387315",
    __self: this
  }, ".Loading.jsx-171387315{padding-top:40px;margin:auto;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbmRvbWJyb3dza2kvRGV2L05vZGUvaG9va2VkanMvaG9va2VkanMvc2VydmljZXMvcmVhY3QvbW9kdWxlcy9Mb2FkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IsQUFHNEIsaUJBQ0wsWUFDQSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvYnJpYW5kb21icm93c2tpL0Rldi9Ob2RlL2hvb2tlZGpzL2hvb2tlZGpzL3NlcnZpY2VzL3JlYWN0L21vZHVsZXMvTG9hZGluZy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRpbmdJY29uIH0gZnJvbSBcIi4uL3ByaW1pdGl2ZXMvTG9hZGluZ0ljb25cIjtcblxuZXhwb3J0IHR5cGUgcHJvcHMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IExvYWRpbmcgPSAoKHt9OiBwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9hZGluZ1wiPlxuICAgICAgPExvYWRpbmdJY29uIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkxvYWRpbmd7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIl19 */\n/*@ sourceURL=/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/modules/Loading.tsx */"));
};

/***/ }),

/***/ "./modules/Sidebar.tsx":
/*!*****************************!*\
  !*** ./modules/Sidebar.tsx ***!
  \*****************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/modules/Sidebar.tsx";


var Sidebar = function Sidebar(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Sidebar");
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hamburgers/dist/hamburgers.min.css":
/*!*********************************************************!*\
  !*** ./node_modules/hamburgers/dist/hamburgers.min.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, optionalDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"react\",\"version\":\"0.0.4\",\"private\":true,\"scripts\":{\"build\":\"next build\",\"//postbuild\":\"gzipper --brotli build && gzipper build\",\"start\":\"NODE_ENV=production node server.js\",\"start:dev\":\"next -p $(dotenv -p REACT_PORT)\",\"clean\":\"rimraf build\"},\"dependencies\":{\"@types/dotenv\":\"^6.1.1\",\"@types/react\":\"^16.8.23\",\"@types/react-dom\":\"^16.8.4\",\"@types/rebass\":\"^3.0.4\",\"@types/webpack-env\":\"^1.13.9\",\"@vtex/phone\":\"^4.8.3\",\"@zeit/next-bundle-analyzer\":\"^0.1.2\",\"@zeit/next-css\":\"^1.0.1\",\"apollo-boost\":\"^0.4.3\",\"babel-plugin-styled-components\":\"^1.10.6\",\"dotenv\":\"^8.0.0\",\"express\":\"^4.17.1\",\"graphql\":\"^14.4.2\",\"hamburgers\":\"^1.1.3\",\"mobx\":\"^5.13.0\",\"mobx-react-lite\":\"^1.4.1\",\"next\":\"^9.0.2\",\"react\":\"^16.8.6\",\"react-dom\":\"^16.8.6\",\"react-responsive-modal\":\"^4.0.1\",\"rebass\":\"^3.1.2\",\"shrink-ray-current\":\"^4.0.0\",\"styled-components\":\"^4.3.2\",\"validator\":\"^11.1.0\"},\"devDependencies\":{\"@types/node\":\"^12.6.8\",\"dotenv-cli\":\"^2.0.1\",\"typescript\":\"^3.5.3\"},\"optionalDependencies\":{\"node-zopfli-es\":\"~1.0.3\"}}");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.tsx");
/* harmony import */ var _layouts_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Sidebar */ "./layouts/Sidebar.tsx");
var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/pages/index.tsx";

// import { Fragment, h } from 'preact';



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Sidebar__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3712116934" + " " + "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3712116934" + " " + "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _config__WEBPACK_IMPORTED_MODULE_2__["Logo"],
    alt: "logo",
    className: "jsx-3712116934" + " " + "App-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3712116934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Edit ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", {
    className: "jsx-3712116934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "src/App.tsx"), " and save to reload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3712116934" + " " + "App-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Learn React"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3712116934",
    __self: this
  }, ".App.jsx-3712116934{text-align:center;}.App-logo.jsx-3712116934{-webkit-animation:App-logo-spin-jsx-3712116934 infinite 20s linear;animation:App-logo-spin-jsx-3712116934 infinite 20s linear;height:40vmin;pointer-events:none;}.App-header.jsx-3712116934{background-color:#282c34;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}.App-link.jsx-3712116934{color:#61dafb;}@-webkit-keyframes App-logo-spin-jsx-3712116934{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes App-logo-spin-jsx-3712116934{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbmRvbWJyb3dza2kvRGV2L05vZGUvaG9va2VkanMvaG9va2VkanMvc2VydmljZXMvcmVhY3QvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCYyxBQUd5QixBQUkwQixBQU1uQixBQVdYLEFBS1csQUFHRSxjQVA3QixJQXJCQSxPQVVtQixpQkFDSix1Q0FlYixNQUdBLDZCQWpCc0IsVUFSUixjQUNNLG9CQUN0QixrQ0FPcUIsNkZBQ0ksbUdBQ00sNkJBQ2pCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2JyaWFuZG9tYnJvd3NraS9EZXYvTm9kZS9ob29rZWRqcy9ob29rZWRqcy9zZXJ2aWNlcy9yZWFjdC9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBGcmFnbWVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xvZ299IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vbGF5b3V0cy9TaWRlYmFyXCI7XG5cbmV4cG9ydCBjb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiA8U2lkZWJhcj5cbiAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgIDxpbWcgc3JjPXtMb2dvfSBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgPHA+XG4gICAgICAgIEVkaXQgPGNvZGU+c3JjL0FwcC50c3g8L2NvZGU+IGFuZCBzYXZlIHRvIHJlbG9hZC5cbiAgICAgIDwvcD5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cIkFwcC1saW5rXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgTGVhcm4gUmVhY3RcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5BcHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuQXBwLWxvZ28ge1xuICAgICAgYW5pbWF0aW9uOiBBcHAtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XG4gICAgICBoZWlnaHQ6IDQwdm1pbjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuQXBwLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuQXBwLWxpbmsge1xuICAgICAgY29sb3I6ICM2MWRhZmI7XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L1NpZGViYXI+O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/pages/index.tsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./polyfills/MobxPersist.ts":
/*!**********************************!*\
  !*** ./polyfills/MobxPersist.ts ***!
  \**********************************/
/*! exports provided: MobxPersist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobxPersist", function() { return MobxPersist; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);



// Can persist a single mobx object.
// For persisting an object with multiple mobx objects inside, look at
// MobxPersistDict
// For native, use localforage instead of localstorage


var MobxPersist =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key, observableInstance) {
    var v;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            v = typeof localStorage !== "undefined" && localStorage.getItem(key);

            if (v) {
              // if (observableInstance.replace) observableInstance.replace(v);
              // else if (typeof v === "object") {
              //   Object.keys(v).forEach((k) => (observableInstance[k] = v[k]));
              // } else observableInstance = v;
              setTimeout(function () {
                return Object(mobx__WEBPACK_IMPORTED_MODULE_3__["set"])(observableInstance, JSON.parse(v));
              }, 300);
            }

            Object(mobx__WEBPACK_IMPORTED_MODULE_3__["autorun"])(function () {
              // localStorage.setItem(key, change.object.toJSON());
              // localStorage.setItem(key, change.newValue);
              typeof localStorage !== "undefined" && localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(mobx__WEBPACK_IMPORTED_MODULE_3__["toJS"])(observableInstance)));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function MobxPersist(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./primitives/HamburgerIcon.tsx":
/*!**************************************!*\
  !*** ./primitives/HamburgerIcon.tsx ***!
  \**************************************/
/*! exports provided: HamburgerIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerIcon", function() { return HamburgerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hamburgers_dist_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hamburgers/dist/hamburgers.min.css */ "./node_modules/hamburgers/dist/hamburgers.min.css");
/* harmony import */ var hamburgers_dist_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hamburgers_dist_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/primitives/HamburgerIcon.tsx";

/**
 * Docs: https://github.com/jonsuh/hamburgers
 */
 // import styles from "hamburgers/dist/hamburgers.min.css";



var HamburgerIcon = function HamburgerIcon(_ref) {
  var isActive = _ref.isActive,
      onClick = _ref.onClick,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "hamburger-box" : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hamburger", "hamburger--collapse", {
      "is-active": isActive
    }),
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hamburger-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./primitives/LoadingIcon.tsx":
/*!************************************!*\
  !*** ./primitives/LoadingIcon.tsx ***!
  \************************************/
/*! exports provided: LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIcon", function() { return LoadingIcon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/primitives/LoadingIcon.tsx";


/**
 * Based on https://codepen.io/patrickkunka/pen/JwIoK
 */

var LoadingIcon = function LoadingIcon(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-990554539" + " " + "css_spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-990554539" + " " + "half left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-990554539" + " " + "band",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-990554539" + " " + "half right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-990554539" + " " + "band",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "990554539",
    __self: this
  }, ".css_spinner.jsx-990554539{position:absolute;width:48px;height:48px;left:50%;top:50%;margin:-24px 0 0 -24px;opacity:.3;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;}.css_spinner.jsx-990554539::after{content:'';position:absolute;width:40px;height:40px;left:50%;top:50%;margin:-20px 0 0 -20px;background:#fafafa;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;}.css_spinner.jsx-990554539 .half.jsx-990554539{position:absolute;width:24px;height:48px;top:0;overflow:hidden;}.css_spinner.jsx-990554539 .left.jsx-990554539{left:0px;-webkit-border-radius:999px 0 0 999px;-moz-border-radius:999px 0 0 999px;border-radius:999px 0 0 999px;}.css_spinner.jsx-990554539 .right.jsx-990554539{left:24px;-webkit-border-radius:0 999px 999px 0;-moz-border-radius:0 999px 999px 0;border-radius:0 999px 999px 0;}.css_spinner.jsx-990554539 .band.jsx-990554539{position:absolute;width:24px;height:48px;background:#922d8d;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;-webkit-animation:cssSpinnerRight 1.8s infinite linear;-moz-animation:cssSpinnerRight 1.8s infinite linear;}.css_spinner.jsx-990554539 .left.jsx-990554539 .band.jsx-990554539{left:0;border-left:24px solid #fafafa;-webkit-animation:cssSpinnerLeft 1.8s infinite linear;-moz-animation:cssSpinnerLeft 1.8s infinite linear;}.css_spinner.jsx-990554539 .right.jsx-990554539 .band.jsx-990554539{right:0;border-right:24px solid #fafafa;}@-webkit-keyframes cssSpinnerRight{0%.jsx-990554539{-webkit-transform:rotate(0deg);}20%.jsx-990554539{-webkit-transform:rotate(90deg);}25%.jsx-990554539{-webkit-transform:rotate(180deg);}50%.jsx-990554539{-webkit-transform:rotate(180deg);}70%.jsx-990554539{-webkit-transform:rotate(270deg);}75%.jsx-990554539{-webkit-transform:rotate(360deg);}100%.jsx-990554539{-webkit-transform:rotate(360deg);}}@-webkit-keyframes cssSpinnerLeft{0%.jsx-990554539{-webkit-transform:rotate(0deg);}25%.jsx-990554539{-webkit-transform:rotate(0deg);}35%.jsx-990554539{-webkit-transform:rotate(90deg);}50%.jsx-990554539{-webkit-transform:rotate(180deg);}75%.jsx-990554539{-webkit-transform:rotate(180deg);}80%.jsx-990554539{-webkit-transform:rotate(270deg);}100%.jsx-990554539{-webkit-transform:rotate(360deg);}}@-moz-keyframes cssSpinnerRight{0%.jsx-990554539{-webkit-transform:rotate(0deg);}20%.jsx-990554539{-webkit-transform:rotate(90deg);}25%.jsx-990554539{-webkit-transform:rotate(180deg);}50%.jsx-990554539{-webkit-transform:rotate(180deg);}70%.jsx-990554539{-webkit-transform:rotate(270deg);}75%.jsx-990554539{-webkit-transform:rotate(360deg);}100%.jsx-990554539{-webkit-transform:rotate(360deg);}}@-moz-keyframes cssSpinnerLeft{0%.jsx-990554539{-webkit-transform:rotate(0deg);}25%.jsx-990554539{-webkit-transform:rotate(0deg);}35%.jsx-990554539{-webkit-transform:rotate(90deg);}50%.jsx-990554539{-webkit-transform:rotate(180deg);}75%.jsx-990554539{-webkit-transform:rotate(180deg);}80%.jsx-990554539{-webkit-transform:rotate(270deg);}100%.jsx-990554539{-webkit-transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbmRvbWJyb3dza2kvRGV2L05vZGUvaG9va2VkanMvaG9va2VkanMvc2VydmljZXMvcmVhY3QvcHJpbWl0aXZlcy9Mb2FkaW5nSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUc2QixBQWNULEFBZU8sQUFRVCxBQVFDLEFBUVEsQUFjWCxBQVFDLEFBSzBCLEFBQ0ksQUFDRCxBQUNBLEFBQ0UsQUFDRixBQUNDLEFBSUosQUFDQyxBQUNHLEFBQ0QsQUFDQSxBQUNFLEFBQ0QsQUFJSixBQUNJLEFBQ0QsQUFDQSxBQUNFLEFBQ0YsQUFDQyxBQUlKLEFBQ0MsQUFDRyxBQUNELEFBQ0EsQUFDRSxBQUNELE9BaERQLENBUUMsQ0FyQ00sQ0FRQSxDQWhDcEIsT0FkTCxBQTZCRixBQXdCQSxXQXBERyxBQWNILEFBZUMsQUF3QkEsRUF5QnVCLEFBVUEsQUFDQyxBQVNELEFBVUEsQUFDQyxDQTlCRyxBQVdBLEFBU0EsQUFXQSxDQTlCRCxBQUNBLEFBQ0UsQUFDRixBQUNDLEFBT0QsQUFDQSxBQUNFLEFBQ0QsQUFNRCxBQUNBLEFBQ0UsQUFDRixBQUNDLEFBT0QsQUFDQSxBQUNFLEFBQ0QsS0E5Q2UsRUFyRDFDLEFBNERaLENBMUVXLEFBNkJMLEFBd0JhLE1BdkJILEFBT21CLENBUUEsRUE1Q3pCLEVBY0QsTUFiZ0IsRUFxREcsQ0F2Q3BCLEVBZVIsTUFkdUIsWUFkVixDQW1DaUIsQ0FRQSxLQVVMLElBbkRLLEFBYVgsQUFrRGdDLG1CQWhEdkIsQ0FtQjVCLENBUUEsQUFVb0IsT0FuRE8sYUFxRDRCLE1BdEM5QixJQWdEekIsRUE5RHNCLG1CQWVGLENBZHBCLG1CQWVBLElBcUNvRCxvREFDcEQiLCJmaWxlIjoiL1VzZXJzL2JyaWFuZG9tYnJvd3NraS9EZXYvTm9kZS9ob29rZWRqcy9ob29rZWRqcy9zZXJ2aWNlcy9yZWFjdC9wcmltaXRpdmVzL0xvYWRpbmdJY29uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZWQgb24gaHR0cHM6Ly9jb2RlcGVuLmlvL3BhdHJpY2trdW5rYS9wZW4vSndJb0tcbiAqL1xuaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgdHlwZSBwcm9wcyA9IHt9O1xuXG5leHBvcnQgY29uc3QgTG9hZGluZ0ljb24gPSAoKHt9OiBwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NzX3NwaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmIGxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZiByaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jc3Nfc3Bpbm5lcntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IC0yNHB4IDAgMCAtMjRweDtcbiAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jc3Nfc3Bpbm5lcjo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbjogLTIwcHggMCAwIC0yMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jc3Nfc3Bpbm5lciAuaGFsZntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jc3Nfc3Bpbm5lciAubGVmdHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OTlweCAwIDAgOTk5cHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTk5cHggMCAwIDk5OXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweCAwIDAgOTk5cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jc3Nfc3Bpbm5lciAucmlnaHR7XG4gICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIFxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgOTk5cHggOTk5cHggMDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDk5OXB4IDk5OXB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOTk5cHggOTk5cHggMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNzc19zcGlubmVyIC5iYW5ke1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MjJkOGQ7XG4gICAgICAgIFxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3NTcGlubmVyUmlnaHQgMS44cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBjc3NTcGlubmVyUmlnaHQgMS44cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jc3Nfc3Bpbm5lciAubGVmdCAuYmFuZHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDI0cHggc29saWQgI2ZhZmFmYTtcbiAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3NTcGlubmVyTGVmdCAxLjhzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgLW1vei1hbmltYXRpb246IGNzc1NwaW5uZXJMZWZ0IDEuOHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY3NzX3NwaW5uZXIgLnJpZ2h0IC5iYW5ke1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAyNHB4IHNvbGlkICNmYWZhZmE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBjc3NTcGlubmVyUmlnaHR7XG4gICAgICAgIDAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyl9XG4gICAgICAgICAgMjAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfVxuICAgICAgICAyNSUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxuICAgICAgICA1MCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxuICAgICAgICAgIDcwJSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9XG4gICAgICAgIDc1JSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XG4gICAgICAgIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY3NzU3Bpbm5lckxlZnR7XG4gICAgICAgIDAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyl9XG4gICAgICAgIDI1JSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpfVxuICAgICAgICAgIDM1JSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKX1cbiAgICAgICAgNTAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cbiAgICAgICAgNzUlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1cbiAgICAgICAgICA4MCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfVxuICAgICAgICAxMDAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQC1tb3ota2V5ZnJhbWVzIGNzc1NwaW5uZXJSaWdodHtcbiAgICAgICAgMCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cbiAgICAgICAgICAyMCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9XG4gICAgICAgIDI1JSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9XG4gICAgICAgIDUwJSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9XG4gICAgICAgICAgNzAlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX1cbiAgICAgICAgNzUlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX1cbiAgICAgICAgMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBjc3NTcGlubmVyTGVmdHtcbiAgICAgICAgMCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cbiAgICAgICAgMjUlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyl9XG4gICAgICAgICAgMzUlIHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfVxuICAgICAgICA1MCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxuICAgICAgICA3NSUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxuICAgICAgICAgIDgwJSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9XG4gICAgICAgIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn0pO1xuIl19 */\n/*@ sourceURL=/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/primitives/LoadingIcon.tsx */"));
};

/***/ }),

/***/ "./primitives/SuccessIcon.tsx":
/*!************************************!*\
  !*** ./primitives/SuccessIcon.tsx ***!
  \************************************/
/*! exports provided: SuccessIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessIcon", function() { return SuccessIcon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/primitives/SuccessIcon.tsx";


/**
 * A SweetAlert style animated success icon
 * Adapted from https://codepen.io/collection/XeBzGb/
 */

var SuccessIcon = function SuccessIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa-success-tip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa-success-long",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa-success-placeholder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2137034859" + " " + "sa-success-fix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2137034859",
    __self: this
  }, ".sa{margin:auto;width:140px;height:140px;padding:26px;background-color:#fff;}.sa-success{border-radius:50%;border:4px solid #a5dc86;box-sizing:content-box;height:80px;padding:0;position:relative;background-color:#fff;width:80px;}.sa-success:after,.sa-success:before{background:#fff;content:'';height:120px;position:absolute;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);width:60px;}.sa-success:before{border-radius:40px 0 0 40px;width:26px;height:80px;top:-17px;left:5px;-webkit-transform-origin:60px 60px;-ms-transform-origin:60px 60px;transform-origin:60px 60px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.sa-success:after{border-radius:0 120px 120px 0;left:30px;top:-11px;-webkit-transform-origin:0 60px;-ms-transform-origin:0 60px;transform-origin:0 60px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in;}.sa-success-placeholder{border-radius:50%;border:4px solid rgba(165,220,134,0.25);box-sizing:content-box;height:80px;left:-4px;position:absolute;top:-4px;width:80px;z-index:2;}.sa-success-fix{background-color:#fff;height:90px;left:28px;position:absolute;top:8px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);width:5px;z-index:1;}.sa-success-tip,.sa-success-long{background-color:#a5dc86;border-radius:2px;height:5px;position:absolute;z-index:2;}.sa-success-tip{left:14px;top:46px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);width:25px;-webkit-animation:animateSuccessTip 0.75s;animation:animateSuccessTip 0.75s;}.sa-success-long{right:8px;top:38px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);width:47px;-webkit-animation:animateSuccessLong 0.75s;animation:animateSuccessLong 0.75s;}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px;}70%{width:50px;left:-8px;top:37px;}84%{width:17px;left:21px;top:48px;}100%{width:25px;left:14px;top:45px;}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px;}70%{width:50px;left:-8px;top:37px;}84%{width:17px;left:21px;top:48px;}100%{width:25px;left:14px;top:45px;}}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px;}84%{width:55px;right:0;top:35px;}100%{width:47px;right:8px;top:38px;}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px;}84%{width:55px;right:0;top:35px;}100%{width:47px;right:8px;top:38px;}}@-webkit-keyframes rotatePlaceholder{0%,5%{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}100%,12%{-webkit-transform:rotate(-405deg);-ms-transform:rotate(-405deg);transform:rotate(-405deg);}}@keyframes rotatePlaceholder{0%,5%{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}100%,12%{-webkit-transform:rotate(-405deg);-ms-transform:rotate(-405deg);transform:rotate(-405deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbmRvbWJyb3dza2kvRGV2L05vZGUvaG9va2VkanMvaG9va2VkanMvc2VydmljZXMvcmVhY3QvcHJpbWl0aXZlcy9TdWNjZXNzSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ1QixBQUdxQixBQU9NLEFBVUYsQUFRWSxBQVNFLEFBUVosQUFXSSxBQVVHLEFBT2YsQUFPQSxBQVFBLEFBS0csQUFLQSxBQUtBLEFBT0gsQUFLRyxBQUtBLEFBT2MsQUFHQyxRQXpDakIsQUFzQkUsRUFyQ0osQUFPQSxDQWFHLEFBS0EsQUFLQSxBQVlGLEFBS0UsQ0FySEEsSUFpQkQsQ0FxRUEsQ0EvRWMsQUFtQ2tCLENBNkJuQixBQU9DLEFBOEJkLEFBS0EsRUF0QkEsQUFLQSxBQUtBLEFBaUJBLENBakVDLEVBcERDLENBOERLLENBd0JsQixDQXJFYSxDQU9GLEFBb0ZYLEFBS0EsRUFoRlUsQUEwRFYsQUFLQSxBQUtBLEFBaUJBLElBakVVLEdBcERHLEVBd0JELENBUE0sQUFnQlIsR0EzQmEsQUF3RFosQ0FUTyxNQXBESSxBQWlDRSxDQVRkLEdBc0NRLElBN0NNLEFBdUJELEdBZmQsQ0E0QkQsSUEvQ0ksSUFvQmUsQUE0QkYsRUFyRDNCLEFBOERZLE1BeERBLEdBa0NFLENBdUJkLEtBeURFLENBakhrQixFQW9IbEIsR0FsRlUsVUFDUSxBQTBCUCxHQTVEVyxBQW1FWCxRQU51QixHQU9DLElBakMxQixPQWxDRSxFQW1DQSxJQVhjLEtBdkIzQixFQW1DWSxDQTVCQyxTQTZCYixFQTVCQSxJQW9DWSxNQTVCZSxJQTZCZixVQUNaLGFBY0EsS0FPQSwwQkEzQzRDLDZCQVA1QywrREFRQSIsImZpbGUiOiIvVXNlcnMvYnJpYW5kb21icm93c2tpL0Rldi9Ob2RlL2hvb2tlZGpzL2hvb2tlZGpzL3NlcnZpY2VzL3JlYWN0L3ByaW1pdGl2ZXMvU3VjY2Vzc0ljb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIFN3ZWV0QWxlcnQgc3R5bGUgYW5pbWF0ZWQgc3VjY2VzcyBpY29uXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vWGVCekdiL1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzSWNvbiA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhLXN1Y2Nlc3NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYS1zdWNjZXNzLXRpcFwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYS1zdWNjZXNzLWxvbmdcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Etc3VjY2Vzcy1wbGFjZWhvbGRlclwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYS1zdWNjZXNzLWZpeFwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5zYSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICBwYWRkaW5nOiAyNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLnNhLXN1Y2Nlc3Mge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNhNWRjODY7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB9XG4gICAgICAuc2Etc3VjY2VzczphZnRlciwgLnNhLXN1Y2Nlc3M6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgIH1cbiAgICAgIC5zYS1zdWNjZXNzOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMCAwIDQwcHg7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRvcDogLTE3cHg7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNjBweCA2MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgICAgLnNhLXN1Y2Nlc3M6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEyMHB4IDEyMHB4IDA7XG4gICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgIHRvcDogLTExcHg7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNjBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO1xuICAgICAgfVxuICAgICAgLnNhLXN1Y2Nlc3MtcGxhY2Vob2xkZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4yNSk7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICAgIC5zYS1zdWNjZXNzLWZpeCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbGVmdDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIC5zYS1zdWNjZXNzLXRpcCwgLnNhLXN1Y2Nlc3MtbG9uZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICAgIC5zYS1zdWNjZXNzLXRpcCB7XG4gICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgIHRvcDogNDZweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlU3VjY2Vzc1RpcCAwLjc1cztcbiAgICAgIH1cbiAgICAgIC5zYS1zdWNjZXNzLWxvbmcge1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICB0b3A6IDM4cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHdpZHRoOiA0N3B4O1xuICAgICAgICBhbmltYXRpb246IGFuaW1hdGVTdWNjZXNzTG9uZyAwLjc1cztcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXAge1xuICAgICAgICAwJSwgNTQlIHtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgICB0b3A6IDM3cHg7XG4gICAgICAgIH1cbiAgICAgICAgODQlIHtcbiAgICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgICBsZWZ0OiAyMXB4O1xuICAgICAgICAgIHRvcDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgICAgIHRvcDogNDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmcge1xuICAgICAgICAwJSwgNjUlIHtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICByaWdodDogNDZweDtcbiAgICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgIH1cbiAgICAgICAgODQlIHtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgd2lkdGg6IDQ3cHg7XG4gICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgICB0b3A6IDM4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXIge1xuICAgICAgICAwJSwgNSUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSwgMTIlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/primitives/SuccessIcon.tsx */"));
};

/***/ }),

/***/ "./sections/Footer.tsx":
/*!*****************************!*\
  !*** ./sections/Footer.tsx ***!
  \*****************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/sections/Footer.tsx";


var Footer = function Footer(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    bg: "pink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Footer")));
};

/***/ }),

/***/ "./state/LeadProfile.tsx":
/*!*******************************!*\
  !*** ./state/LeadProfile.tsx ***!
  \*******************************/
/*! exports provided: LeadProfileClean, LeadProfile, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadProfileClean", function() { return LeadProfileClean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadProfile", function() { return LeadProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_MobxPersist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/MobxPersist */ "./polyfills/MobxPersist.ts");


var LeadProfileClean = {
  contactMethod: "email",
  name: "",
  email: "",
  phone: ""
};
var LeadProfile = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(LeadProfileClean);
var Reset = function Reset() {
  return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["set"])(LeadProfile, LeadProfileClean);
};
Object(_polyfills_MobxPersist__WEBPACK_IMPORTED_MODULE_1__["MobxPersist"])("LeadProfile", LeadProfile); // reaction(() => AppMeta.version, () => Repeat(Reset, 200, 4));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/briandombrowski/Dev/Node/hookedjs/hookedjs/services/react/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map