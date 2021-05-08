module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/7J":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yOS45OTgzIDAuODQxMzA5SDQuODM3NjFDMi41MjQyMyAwLjg0MTMwOSAwLjY0NDE2NSAyLjcyMTM3IDAuNjQ0MTY1IDUuMDM0NzVWMzAuMTk1NEMwLjY0NDE2NSAzMi41MDc0IDIuNTI0MjMgMzQuMzg4OSA0LjgzNzYxIDM0LjM4ODlIMjkuOTk4M0MzMi4zMTAzIDM0LjM4ODkgMzQuMTkxNyAzMi41MDc0IDM0LjE5MTcgMzAuMTk1NFY1LjAzNDc1QzM0LjE5MTcgMi43MjEzNyAzMi4zMTAzIDAuODQxMzA5IDI5Ljk5ODMgMC44NDEzMDlaIiBmaWxsPSIjM0I1OTk5Ii8+CjxwYXRoIGQ9Ik0yMy43MDgxIDE3LjYxNTFWMTMuNDIxNkMyMy43MDgxIDEyLjI2NDIgMjQuNjQ3NCAxMi4zNzMzIDI1LjgwNDggMTIuMzczM0gyNy45MDE1VjcuMTMxNDdIMjMuNzA4MUMyMC4yMzMxIDcuMTMxNDcgMTcuNDE3OSA5Ljk0NjY3IDE3LjQxNzkgMTMuNDIxNlYxNy42MTUxSDEzLjIyNDVWMjIuODU2OUgxNy40MTc5VjM0LjM4ODlIMjMuNzA4MVYyMi44NTY5SDI2Ljg1MzJMMjguOTQ5OSAxNy42MTUxSDIzLjcwODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjMzLjU0NzYiIGhlaWdodD0iMzMuNTQ3NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjQ0MTY1IDAuODQxMzA5KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "+tsZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"home_footer": "Footer_home_footer__1NfIv",
	"footer_nav": "Footer_footer_nav__rxCQW"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9yvl");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_services_web_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BP+9");
/* harmony import */ var _images_services_web_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_services_web_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_services_ui_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T/Ra");
/* harmony import */ var _images_services_ui_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_services_ui_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_services_marketing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YKTw");
/* harmony import */ var _images_services_marketing_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_services_marketing_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_services_animation_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hlCC");
/* harmony import */ var _images_services_animation_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_services_animation_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_globus_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cv5o");
/* harmony import */ var _images_globus_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_globus_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tyWD");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("K7k0");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vRNQ");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("7v8O");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("KHQI");
/* harmony import */ var _images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_fb_icon_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("+/7J");
/* harmony import */ var _images_fb_icon_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_fb_icon_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_linked_icon_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LE1b");
/* harmony import */ var _images_linked_icon_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_linked_icon_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_t_icon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("ssZn");
/* harmony import */ var _images_t_icon_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_t_icon_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("XQC6");
/* harmony import */ var _images_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("4oX2");
/* harmony import */ var _components_AboutVideo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("s0Ox");
/* harmony import */ var _components_FormSection__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("y552");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const HomePage = ({
  projects
}) => {
  const {
    0: filteredProjects,
    1: setFilteredProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(projects.response); // Slider settings

  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: '30px'
  };
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('all');

  const filterProjects = async e => {
    const tagValue = e.currentTarget.value;
    setType(tagValue);
    if (tagValue === 'all') setFilteredProjects(projects.response);else setFilteredProjects(projects.response.filter(c => c.type === tagValue));
  };

  const services = [{
    id: 1,
    serviceLogo: _images_services_web_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    serviceTitle: 'Web Development',
    serviceDescription: 'FrontEnd (HTML / CSS / Java Script). WordPress / Shopify / Opencart / Others. BackEnd(PHPCake / Laravel). API integration'
  }, {
    id: 2,
    serviceLogo: _images_services_ui_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    serviceTitle: 'UX/UI Brand Identity',
    serviceDescription: 'User Expirience & Interface Design. Landing page / E-shop / Business Site. Design Logo / Branding. Photo / Video content'
  }, {
    id: 3,
    serviceLogo: _images_services_marketing_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    serviceTitle: 'Digital Marketing',
    serviceDescription: 'Search Engine Optimization (SEO). Social Media Marketing (SMM). Content Marketing. Native Advertisign'
  }, {
    id: 4,
    serviceLogo: _images_services_animation_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    serviceTitle: 'Animation Production',
    serviceDescription: 'Search Engine Optimization (SEO). Social Media Marketing (SMM). Content Marketing. Native Advertisign'
  }];
  const casesItems = filteredProjects.map(c => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ProjectCase, {
    id: c.id,
    coverCaseBg: 'https://images.unsplash.com/photo-1620142898494-9c3c967d7c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    caseDuration: c.term,
    projectTitle: c.project_name,
    projectDescription: c.about_project
  }, c.id));
  const servicesItems = services.map(s => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ServiceItem, {
    serviceLogo: s.serviceLogo,
    serviceTitle: s.serviceTitle,
    serviceDescription: s.serviceDescription
  }, s.id));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main_header,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main_offer,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "title_label",
            children: "Digital Agency"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            children: "Solutions for Digital Business."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: "We bring your business online and raise the income thanks to our wonderful team of professionals."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.about_us_video_wrap,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_AboutVideo__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
              videoLabel: "About Us"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.lang_toggler_mobile,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "",
              children: "UA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "",
              children: "RU"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "",
              children: "EN"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.our_services,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "title_label",
          children: "Our Services"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.h2,
          children: "We Do Everything."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.services_items_wrap,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.services_items,
            children: servicesItems
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.services_slider_wrap,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {
              children: servicesItems
            }))
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.our_cases,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.our_cases_wrap,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "title_label",
            children: "Our portfolio"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.h2,
            children: "Our Latest Cases."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.cases_tags,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CaseTag, {
              typeTag: "all",
              text: "All projects",
              typeState: type,
              filterProjects: filterProjects
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CaseTag, {
              typeTag: "web-sites",
              text: "Web-Sites",
              typeState: type,
              filterProjects: filterProjects
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CaseTag, {
              typeTag: "design",
              text: "Design Only",
              typeState: type,
              filterProjects: filterProjects
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CaseTag, {
              typeTag: "motion-design",
              text: "Video & Animation",
              typeState: type,
              filterProjects: filterProjects
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              type: "button",
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inaccessible,
              children: "App-Dev"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              type: "button",
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inaccessible,
              children: "SEO-Cases"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.our_cases_items,
            children: casesItems
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.cases_slider_wrap,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {
              children: casesItems
            }))
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.more_projects_btn,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "View More"
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.form_section,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.form_section_wrap,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.globe_wrap,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: _images_globus_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
              alt: "globe"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_FormSection__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {})]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.we_are_pro,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.we_are_pro_wrap,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.we_are_pro_content,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "title_label",
              children: "About Us"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.h2,
              children: "We Are Experts In Our Field."
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Our digital company of professionals has been developing products for 15 years."
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.about_us_link,
                children: ["READ MORE ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoTriangleRight"], {})]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.workflow,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.h2,
              children: "How We Work?"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.workflow_items,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WorkflowElement, {
                index: '01.',
                title: 'Acquaintance',
                text: 'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WorkflowElement, {
                index: '02.',
                title: 'Research',
                text: 'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WorkflowElement, {
                index: '03.',
                title: 'Project development',
                text: 'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WorkflowElement, {
                index: '04.',
                title: 'Launch and support',
                text: 'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts_section,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts_block_wrap,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts_block,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts_block_credentials_wrap,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "title_label",
                children: "Contacts"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts_block_credentials,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Address :"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                    href: "#",
                    children: ["230, Kulparkivska str.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), " Lviv, Ukraine, 79031"]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Phone :"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "tel:0971630202",
                    children: "+38 (097) 163 0202"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Email :"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.mails_links,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      href: "#",
                      children: "siteen.co@gmail.com"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      href: "#",
                      children: "siteencareer@gmail.com"
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.footer_links,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                children: ["Follow Us ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__["BsArrowRight"], {})]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.footer_links_elements,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: _images_insta_icon_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                      alt: "instaIcon"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: _images_fb_icon_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
                      alt: "fbIcon"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: _images_linked_icon_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
                      alt: "linkedIcon"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: _images_t_icon_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
                      alt: "tIcon"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      src: _images_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
                      alt: "youTubeIcon"
                    })
                  })
                })]
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {})]
  });
};

const WorkflowElement = ({
  index,
  title,
  text
}) => {
  const {
    0: isTextVisible,
    1: setTextVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.workflow_element,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      children: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.workflow_text,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        className: isTextVisible ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.opened : null,
        onClick: () => {
          setTextVisible(!isTextVisible);
        },
        children: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        className: isTextVisible ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.visible : null,
        children: text
      })]
    })]
  });
};

const CaseTag = ({
  typeTag,
  typeState,
  text,
  filterProjects
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: e => {
      filterProjects(e);
    },
    value: typeTag,
    className: typeTag === typeState ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.checked : null,
    children: text
  });
};

const ServiceItem = ({
  serviceLogo,
  serviceTitle,
  serviceDescription
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
  href: "#",
  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.service_element,
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `${_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.icon_wrap} icon_wrap_global`,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: serviceLogo,
      alt: "web"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
    children: serviceTitle
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
    children: serviceDescription
  })]
});

const ProjectCase = ({
  id,
  coverCaseBg,
  caseDuration,
  projectTitle,
  projectDescription
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
  style: {
    backgroundImage: `url(${coverCaseBg})`
  },
  className: `${_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.project_case} project_case_global`,
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `${_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.project_case_wrap} project_case_wrap_global`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.project_duration,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Creation Term: "
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        children: caseDuration
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.project_title,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: projectTitle
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: projectDescription
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      href: '/project/[id]',
      as: `/project/${id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.project_link,
        children: ["View full project ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoTriangleRight"], {})]
      })
    })]
  })
});

HomePage.getInitialProps = async () => {
  const response = await fetch('http://localhost:8289/v1/project');
  const projects = await response.json();
  return {
    projects: projects
  };
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "4RUv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9Ijc3IiB2aWV3Qm94PSIwIDAgMTQ4IDc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTQ5LjY5OSA4LjEwMTM0QzQyLjkxNjEgMTMuMjM3NSAzNi4xMzMyIDE4LjM3MzcgMjkuMzcyOCAyMy40MDE3QzI3LjM5NjcgMjQuOTA5NiAyNC4wMTM2IDI2LjY4OTEgMjMuNDUwMyAyOS4zOTQ0QzIxLjg3NjggMzUuOTU0IDI3LjkxMTEgMzguOTAzOSAzMi44MzY0IDM2LjIwMzVDMzUuNzc2MiAzNC41NTc1IDM4LjM3NTggMzIuMDUwNCA0MS4wNjE5IDMwLjEyNThDNDEuMDYxOSAzMC4xMjU4IDQzLjI1NDUgMzMuMDY2MiA0My4wMTAzIDMzLjI0MTFDNDIuNzY2MSAzMy40MTYxIDQyLjM5OTkgMzMuNjc4NiA0Mi4xNTU3IDMzLjg1MzVDNDAuNjY4IDM1LjAxMTYgMzkuMjAyOCAzNi4wNjEzIDM3LjcxNTEgMzcuMjE5M0MzMC44MTAxIDQyLjQ0MyAyMy44MDU2IDQ3LjY0NTkgMTYuOTAwNiA1Mi44Njk2QzE0LjU1ODIgNTQuNjQgMTYuODkxOCA1OC40MDAxIDE5LjIxMTYgNTYuNzM3OUMyNS45NzIgNTEuNzA5OSAzMi42NTUzIDQ2LjU1MyAzOS40MTU3IDQxLjUyNUM0MS42MTM0IDM5Ljk1MDMgNDQuMDEwMyAzOC40MTcxIDQ1Ljk3NyAzNi40NTU2QzUwLjQ5ODIgMzIuMjAzNCA0Ny4yNyAyNC43NTcgNDEuNTc4IDI1LjE1MjZDMzguMjExNiAyNS4zNTQ5IDM0LjQwOTkgMjkuNjQ0IDMxLjgyMzMgMzEuNTg5NEMzMS41NzkxIDMxLjc2NDMgMzEuMzEyNCAzMi4wNDc1IDMwLjk2ODYgMzIuMjAxN0MyOS41MDM0IDMzLjI1MTUgMjYuODU0NCAzMS4wMDY0IDI4LjM0MjEgMjkuODQ4NEMyOS4zMTg5IDI5LjE0ODYgMzAuMzE4MiAyOC4zNDA1IDMxLjI5NSAyNy42NDA2QzM4LjIgMjIuNDE3IDQ1LjIwNDYgMTcuMjE0IDUyLjEzMjEgMTEuODgyMUM1NC4zMjk5IDEwLjMwNzUgNTIuMDE4OCA2LjQzOTE3IDQ5LjY5OSA4LjEwMTM0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNTEuMDE0OSAyNy4yMzA1QzUzLjI2OTQgMjcuNjk5OSA1NS41MTA3IDI2LjA5NCA1Ni4wMjA4IDIzLjY0MzdDNTYuNTMxIDIxLjE5MzMgNTUuMTE3IDE4LjgyNjQgNTIuODYyNCAxOC4zNTdDNTAuNjA3OSAxNy44ODc2IDQ4LjM2NjcgMTkuNDkzNSA0Ny44NTY1IDIxLjk0MzhDNDcuMzQ2MyAyNC4zOTQyIDQ4Ljc2MDQgMjYuNzYxMSA1MS4wMTQ5IDI3LjIzMDVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMC4yMDc1IDU3LjU3MzRDNy4yNzcxNiA1OS42NzMgNC4zNDY3NiA2MS43NzI2IDEuNDE2NDMgNjMuODcyMUMtMC45MDM0MTUgNjUuNTM0MyAxLjQwNzY2IDY5LjQwMjYgMy43Mjc1IDY3Ljc0MDRDNi42NTc4MyA2NS42NDA5IDkuNTg4MjMgNjMuNTQxMyAxMi41MTg2IDYxLjQ0MTdDMTQuODM4NCA1OS43Nzk2IDEyLjYyNjkgNTUuOTMyIDEwLjIwNzUgNTcuNTczNFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPHBhdGggZD0iTTIwLjg5ODkgNDAuMTU0QzE1LjUyNjYgNDQuMDAzMiAxMC4xNTQ0IDQ3Ljg1MjUgNC42NjAwMiA1MS43ODkyQzIuMzQwMTggNTMuNDUxMyA0LjY1MTI1IDU3LjMxOTYgNi45NzExIDU1LjY1NzVDMTIuMzQzNCA1MS44MDgyIDE3LjcxNTYgNDcuOTU5IDIzLjIwOTkgNDQuMDIyM0MyNS41NTIzIDQyLjI1MTkgMjMuMjQxMiAzOC4zODM2IDIwLjg5ODkgNDAuMTU0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjYuMDQwOSA0My4yNzYzQzY0Ljg0NzQgNDMuMjc2MyA2My42OTE3IDQzLjA5NSA2Mi41NzM4IDQyLjczMjRDNjEuNDcxIDQyLjM1NDggNjAuNjAyMyA0MS44NzEzIDU5Ljk2NzggNDEuMjgyMUw2MC44MDYyIDM5LjUxNDZDNjEuNDEwNSA0MC4wNTg0IDYyLjE4MSA0MC41MDQxIDYzLjExNzcgNDAuODUxNkM2NC4wNjk0IDQxLjE4MzkgNjUuMDQzOCA0MS4zNTAxIDY2LjA0MDkgNDEuMzUwMUM2Ny4zNTUzIDQxLjM1MDEgNjguMzM3MiA0MS4xMzExIDY4Ljk4NjggNDAuNjkyOUM2OS42MzY1IDQwLjIzOTcgNjkuOTYxMyAzOS42NDMgNjkuOTYxMyAzOC45MDI3QzY5Ljk2MTMgMzguMzU4OSA2OS43OCAzNy45MjA3IDY5LjQxNzQgMzcuNTg4NEM2OS4wNjk5IDM3LjI0MDkgNjguNjMxOCAzNi45NzY1IDY4LjEwMzEgMzYuNzk1M0M2Ny41ODk0IDM2LjYxNCA2Ni44NTY3IDM2LjQxIDY1LjkwNSAzNi4xODM0QzY0LjcxMTUgMzUuODk2NCA2My43NDQ2IDM1LjYwOTMgNjMuMDA0MyAzNS4zMjIzQzYyLjI3OTIgMzUuMDM1MyA2MS42NTIyIDM0LjU5NzEgNjEuMTIzNSAzNC4wMDhDNjAuNjA5OCAzMy40MDM3IDYwLjM1MyAzMi41OTU0IDYwLjM1MyAzMS41ODMyQzYwLjM1MyAzMC43MzcyIDYwLjU3MjEgMjkuOTc0MyA2MS4wMTAyIDI5LjI5NDVDNjEuNDYzNCAyOC42MTQ2IDYyLjE0MzIgMjguMDcwOCA2My4wNDk3IDI3LjY2MjlDNjMuOTU2MSAyNy4yNTUgNjUuMDgxNiAyNy4wNTEgNjYuNDI2MiAyNy4wNTFDNjcuMzYyOCAyNy4wNTEgNjguMjg0NCAyNy4xNzE5IDY5LjE5MDggMjcuNDEzNkM3MC4wOTcyIDI3LjY1NTMgNzAuODc1MyAyOC4wMDI4IDcxLjUyNDkgMjguNDU2TDcwLjc3NzEgMzAuMjY4OUM3MC4xMTIzIDI5Ljg0NTkgNjkuNDAyMyAyOS41Mjg2IDY4LjY0NjkgMjkuMzE3MUM2Ny44OTE2IDI5LjA5MDUgNjcuMTUxMyAyOC45NzcyIDY2LjQyNjIgMjguOTc3MkM2NS4xNDIgMjguOTc3MiA2NC4xNzUyIDI5LjIxMTQgNjMuNTI1NSAyOS42Nzk3QzYyLjg5MSAzMC4xNDggNjIuNTczOCAzMC43NTIzIDYyLjU3MzggMzEuNDkyNkM2Mi41NzM4IDMyLjAzNjQgNjIuNzU1MSAzMi40ODIxIDYzLjExNzcgMzIuODI5NkM2My40ODAyIDMzLjE2MTkgNjMuOTI1OSAzMy40MjYzIDY0LjQ1NDYgMzMuNjIyN0M2NC45OTg1IDMzLjgwNCA2NS43MzEyIDM0LjAwMDQgNjYuNjUyOCAzNC4yMTE5QzY3Ljg0NjIgMzQuNDk4OSA2OC44MDU2IDM0Ljc4NiA2OS41MzA3IDM1LjA3M0M3MC4yNTU5IDM1LjM2MDEgNzAuODc1MyAzNS43OTgyIDcxLjM4ODkgMzYuMzg3NEM3MS45MTc3IDM2Ljk3NjUgNzIuMTgyIDM3Ljc2OTcgNzIuMTgyIDM4Ljc2NjhDNzIuMTgyIDM5LjU5NzcgNzEuOTU1NCA0MC4zNjA2IDcxLjUwMjIgNDEuMDU1NUM3MS4wNDkgNDEuNzM1NCA3MC4zNjE2IDQyLjI3OTIgNjkuNDQwMSA0Mi42ODcxQzY4LjUxODUgNDMuMDc5OSA2Ny4zODU1IDQzLjI3NjMgNjYuMDQwOSA0My4yNzYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExMC43ODQgMzUuNTg1N0g5Ny4wNzQxQzk3LjE5ODcgMzcuMjg5MSA5Ny44NTMxIDM4LjY3MDUgOTkuMDM3MSAzOS43Mjk5QzEwMC4yMjEgNDAuNzY4NSAxMDEuNzE3IDQxLjI4NzggMTAzLjUyNCA0MS4yODc4QzEwNC41NDIgNDEuMjg3OCAxMDUuNDc3IDQxLjExMTIgMTA2LjMyOCA0MC43NTgxQzEwNy4xOCA0MC4zODQyIDEwNy45MTcgMzkuODQ0MSAxMDguNTQxIDM5LjEzNzhMMTA5Ljc4NyA0MC41NzExQzEwOS4wNiA0MS40NDM2IDEwOC4xNDYgNDIuMTA4MyAxMDcuMDQ1IDQyLjU2NTNDMTA1Ljk2NSA0My4wMjIzIDEwNC43NyA0My4yNTA4IDEwMy40NjIgNDMuMjUwOEMxMDEuNzc5IDQzLjI1MDggMTAwLjI4MyA0Mi44OTc3IDk4Ljk3NDggNDIuMTkxNEM5Ny42ODY5IDQxLjQ2NDQgOTYuNjc5NCA0MC40NjczIDk1Ljk1MjQgMzkuMjAwMkM5NS4yMjUzIDM3LjkzMyA5NC44NjE4IDM2LjQ5OTcgOTQuODYxOCAzNC45MDAyQzk0Ljg2MTggMzMuMzAwNyA5NS4yMDQ2IDMxLjg2NzQgOTUuODkgMzAuNjAwM0M5Ni41OTYzIDI5LjMzMzIgOTcuNTUxOSAyOC4zNDY1IDk4Ljc1NjcgMjcuNjQwMkM5OS45ODIyIDI2LjkzMzkgMTAxLjM1MyAyNi41ODA4IDEwMi44NyAyNi41ODA4QzEwNC4zODYgMjYuNTgwOCAxMDUuNzQ3IDI2LjkzMzkgMTA2Ljk1MSAyNy42NDAyQzEwOC4xNTYgMjguMzQ2NSAxMDkuMTAxIDI5LjMzMzIgMTA5Ljc4NyAzMC42MDAzQzExMC40NzIgMzEuODQ2NyAxMTAuODE1IDMzLjI4IDExMC44MTUgMzQuOTAwMkwxMTAuNzg0IDM1LjU4NTdaTTEwMi44NyAyOC40ODE1QzEwMS4yOTEgMjguNDgxNSA5OS45NjE1IDI4Ljk5MDQgOTguODgxMyAzMC4wMDgzQzk3LjgyMTkgMzEuMDA1NCA5Ny4yMTk1IDMyLjMxNCA5Ny4wNzQxIDMzLjkzNDNIMTA4LjY5NkMxMDguNTUxIDMyLjMxNCAxMDcuOTM4IDMxLjAwNTQgMTA2Ljg1OCAzMC4wMDgzQzEwNS43OTkgMjguOTkwNCAxMDQuNDY5IDI4LjQ4MTUgMTAyLjg3IDI4LjQ4MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI5LjU4OSAzNS41ODU3SDExNS44NzlDMTE2LjAwNCAzNy4yODkxIDExNi42NTggMzguNjcwNSAxMTcuODQyIDM5LjcyOTlDMTE5LjAyNiA0MC43Njg1IDEyMC41MjIgNDEuMjg3OCAxMjIuMzI5IDQxLjI4NzhDMTIzLjM0NyA0MS4yODc4IDEyNC4yODEgNDEuMTExMiAxMjUuMTMzIDQwLjc1ODFDMTI1Ljk4NSA0MC4zODQyIDEyNi43MjIgMzkuODQ0MSAxMjcuMzQ1IDM5LjEzNzhMMTI4LjU5MiA0MC41NzExQzEyNy44NjUgNDEuNDQzNiAxMjYuOTUxIDQyLjEwODMgMTI1Ljg1IDQyLjU2NTNDMTI0Ljc3IDQzLjAyMjMgMTIzLjU3NSA0My4yNTA4IDEyMi4yNjcgNDMuMjUwOEMxMjAuNTg0IDQzLjI1MDggMTE5LjA4OCA0Mi44OTc3IDExNy43OCA0Mi4xOTE0QzExNi40OTIgNDEuNDY0NCAxMTUuNDg0IDQwLjQ2NzMgMTE0Ljc1NyAzOS4yMDAyQzExNC4wMyAzNy45MzMgMTEzLjY2NyAzNi40OTk3IDExMy42NjcgMzQuOTAwMkMxMTMuNjY3IDMzLjMwMDcgMTE0LjAwOSAzMS44Njc0IDExNC42OTUgMzAuNjAwM0MxMTUuNDAxIDI5LjMzMzIgMTE2LjM1NyAyOC4zNDY1IDExNy41NjIgMjcuNjQwMkMxMTguNzg3IDI2LjkzMzkgMTIwLjE1OCAyNi41ODA4IDEyMS42NzQgMjYuNTgwOEMxMjMuMTkxIDI2LjU4MDggMTI0LjU1MSAyNi45MzM5IDEyNS43NTYgMjcuNjQwMkMxMjYuOTYxIDI4LjM0NjUgMTI3LjkwNiAyOS4zMzMyIDEyOC41OTIgMzAuNjAwM0MxMjkuMjc3IDMxLjg0NjcgMTI5LjYyIDMzLjI4IDEyOS42MiAzNC45MDAyTDEyOS41ODkgMzUuNTg1N1pNMTIxLjY3NCAyOC40ODE1QzEyMC4wOTYgMjguNDgxNSAxMTguNzY2IDI4Ljk5MDQgMTE3LjY4NiAzMC4wMDgzQzExNi42MjcgMzEuMDA1NCAxMTYuMDI0IDMyLjMxNCAxMTUuODc5IDMzLjkzNDNIMTI3LjUwMUMxMjcuMzU2IDMyLjMxNCAxMjYuNzQzIDMxLjAwNTQgMTI1LjY2MyAzMC4wMDgzQzEyNC42MDMgMjguOTkwNCAxMjMuMjc0IDI4LjQ4MTUgMTIxLjY3NCAyOC40ODE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0Ny4wNiAyNy4yMzIzVjQzLjA5NUgxNDUuMjAxTDEzNS42ODQgMzEuMjY2VjQzLjA5NUgxMzMuNDE4VjI3LjIzMjNIMTM1LjI3NkwxNDQuNzkzIDM5LjA2MTRWMjcuMjMyM0gxNDcuMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzUuNTgxMSAyNy4yMzI0SDc3Ljg0NzJWNDMuMDk1MUg3NS41ODExVjI3LjIzMjRaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik04NS43NDYxIDI5LjIwMzlIODAuMzA3NVYyNy4yMzI0SDkzLjQyODJWMjkuMjAzOUg4Ny45ODk1VjQzLjA5NTFIODUuNzQ2MVYyOS4yMDM5WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyOC43NDkxIiB5MT0iNTkuNTQ1NCIgeDI9IjQwLjAyMTUiIHkyPSI1LjQwNDQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFNjAwN0UiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjM5MjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUxLjA1OCIgeTE9IjI3LjI2NCIgeDI9IjUyLjkyMjEiIHkyPSIxOC4zMTA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOTRFMUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjIxNzkiIHN0b3AtY29sb3I9IiNFQzY1MTIiLz4KPHN0b3Agb2Zmc2V0PSIwLjUxMTEiIHN0b3AtY29sb3I9IiNGMDdFMDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjc4IiBzdG9wLWNvbG9yPSIjRjI4RDAyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YzOTIwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI1LjY3Nzc0IiB5MT0iNjguODk0OSIgeDI9IjguMjU5OTUiIHkyPSI1Ni40OTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyOTIzNUMiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2MzMiIHN0b3AtY29sb3I9IiM3RjFCM0EiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjExLjk2ODEiIHkxPSI1Ny4yNjQ3IiB4Mj0iMTUuOTA0MSIgeTI9IjM4LjM2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI5MjM1QyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDg0Njc2NiIgc3RvcC1jb2xvcj0iIzQ3MjA1MCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjQzNiIgc3RvcC1jb2xvcj0iIzdBMUMzQyIvPgo8c3RvcCBvZmZzZXQ9IjAuMzgyNCIgc3RvcC1jb2xvcj0iIzlGMTkyRSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDk0MiIgc3RvcC1jb2xvcj0iI0I2MTcyNSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTY1IiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjxzdG9wIG9mZnNldD0iMC42NjQ3IiBzdG9wLWNvbG9yPSIjQ0EwRjNGIi8+CjxzdG9wIG9mZnNldD0iMC44MDY2IiBzdG9wLWNvbG9yPSIjRDkwNzYxIi8+CjxzdG9wIG9mZnNldD0iMC45MjM1IiBzdG9wLWNvbG9yPSIjRTMwMjc2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2MDA3RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXIiIHgxPSI4My44MjM3IiB5MT0iMjAuNDM0MSIgeDI9IjgzLjgyMzciIHkyPSI0OC43NjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUE5NEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREQ0MjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhciIgeDE9IjgzLjgyMzciIHkxPSIyMC40MzQxIiB4Mj0iODMuODIzNyIgeTI9IjQ4Ljc2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQTk0QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERDQyNDIiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNDcuMDYiIGhlaWdodD0iNzcuMDAwMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "4oX2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+tsZ");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4RUv");
/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);






const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home_footer,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_nav,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
              alt: "Siteen"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Services"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Cases"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Get a Brif"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "About Us"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Privacy Policy"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          children: [currentYear, " \xA9 All Rights Reserved"]
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9yvl":
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "BP+9":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA1MiA1OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjgxMzYgMC44OTI1NzhDMjMuNDM5NiAwLjg5MjU3OCAyMS40NDMxIDIuNTM1NjIgMjAuODk4OSA0Ljc0MzkyQzE1LjQwNTggNS44MjIxNCAxMC4zOTQ2IDguNzA0NzEgNi42NzUxNCAxMi45NTUyQzIuNjIyNTYgMTcuNTg2MiAwLjM5MDc0NyAyMy41Mjk1IDAuMzkwNzQ3IDI5LjY5MDJDMC4zOTA3NDcgMzAuNjIyIDEuMTQ2MjMgMzEuMzc3NSAyLjA3ODExIDMxLjM3NzVDMy4wMDk5OCAzMS4zNzc1IDMuNzY1NDYgMzAuNjIyIDMuNzY1NDYgMjkuNjkwMkMzLjc2NTQ2IDI0LjM0NzIgNS43MDA3NSAxOS4xOTMyIDkuMjE0ODQgMTUuMTc3NUMxMi4zNzEyIDExLjU3MDUgMTYuNTk3OCA5LjA5ODMxIDIxLjIzNzkgOC4xMTc0QzIyLjA1MDYgOS44Mjk2MiAyMy43OTU4IDExLjAxNjcgMjUuODEzNiAxMS4wMTY3QzI4LjYwNDggMTEuMDE2NyAzMC44NzU3IDguNzQ1ODggMzAuODc1NyA1Ljk1NDY1QzMwLjg3NTcgMy4xNjM0MiAyOC42MDQ4IDAuODkyNTc4IDI1LjgxMzYgMC44OTI1NzhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik00MC4yNzU5IDI2LjYyNjRDMzkuODY3OSAyNi4zNDI2IDM5LjA5MTYgMjUuODkzOSAzOC41MzgxIDI1LjY1NDlMMzcuNjY0NCAyMy41NDU3QzM3Ljg4MDEgMjMuMDAyMSAzOC4xMTU4IDIyLjEzMjQgMzguMjA2MiAyMS42Mjk5QzM4LjMwMzkgMjEuMDg2MiAzOC4xMjkyIDIwLjUyOSAzNy43Mzg2IDIwLjEzODNMMzUuMzY1MiAxNy43NjVDMzQuOTc0NSAxNy4zNzQyIDM0LjQxNzMgMTcuMTk5NSAzMy44NzM2IDE3LjI5NzRDMzMuMzc4OCAxNy4zODYzIDMyLjUxNDcgMTcuNjE4MiAzMS45NTc5IDE3LjgzOTFMMjkuODQ4NyAxNi45NjU0QzI5LjYxNzQgMTYuNDI5NyAyOS4xNjkxIDE1LjY0NzQgMjguODc3MSAxNS4yMjc3QzI4LjU2MTcgMTQuNzc0MSAyOC4wNDQyIDE0LjUwMzcgMjcuNDkxOCAxNC41MDM3SDI0LjEzNTRDMjMuNTgzIDE0LjUwMzcgMjMuMDY1NSAxNC43NzQxIDIyLjc1MDEgMTUuMjI3N0MyMi40NjYzIDE1LjYzNTcgMjIuMDE3NSAxNi40MTIgMjEuNzc4NSAxNi45NjU0TDE5LjY2OTMgMTcuODM5MUMxOS4xMjU4IDE3LjYyMzUgMTguMjU2MSAxNy4zODc3IDE3Ljc1MzYgMTcuMjk3NEMxNy4yMTAyIDE3LjE5OTggMTYuNjUyNiAxNy4zNzQ0IDE2LjI2MiAxNy43NjVMMTMuODg4NiAyMC4xMzgzQzEzLjQ5OCAyMC41MjkgMTMuMzIzMyAyMS4wODYyIDEzLjQyMSAyMS42Mjk5QzEzLjUxIDIyLjEyNDggMTMuNzQxOCAyMi45ODg4IDEzLjk2MjggMjMuNTQ1N0wxMy4wODkxIDI1LjY1NDlDMTIuNTUzNCAyNS44ODYxIDExLjc3MSAyNi4zMzQ0IDExLjM1MTMgMjYuNjI2NEMxMC44OTc3IDI2Ljk0MTkgMTAuNjI3MyAyNy40NTkzIDEwLjYyNzMgMjguMDExOFYzMS4zNjgxQzEwLjYyNzMgMzEuOTIwNiAxMC44OTc3IDMyLjQzOCAxMS4zNTEzIDMyLjc1MzVDMTEuNzU5MyAzMy4wMzczIDEyLjUzNTYgMzMuNDg2IDEzLjA4OTEgMzMuNzI1TDEzLjk2MjggMzUuODM0MkMxMy43NDcxIDM2LjM3NzggMTMuNTExNCAzNy4yNDc0IDEzLjQyMSAzNy43NDk5QzEzLjMyMzMgMzguMjkzNyAxMy40OTggMzguODUwOSAxMy44ODg2IDM5LjI0MTZMMTYuMjYyIDQxLjYxNDlDMTYuNjUyNSA0Mi4wMDU2IDE3LjIwOTUgNDIuMTggMTcuNzUzNiA0Mi4wODI1QzE4LjI0ODQgNDEuOTkzNSAxOS4xMTI1IDQxLjc2MTcgMTkuNjY5MyA0MS41NDA4TDIxLjc3ODUgNDIuNDE0NUMyMi4wMDk4IDQyLjk1MDIgMjIuNDU4MSA0My43MzI1IDIyLjc1MDEgNDQuMTUyMkMyMy4wNjU1IDQ0LjYwNTggMjMuNTgzIDQ0Ljg3NjIgMjQuMTM1NCA0NC44NzYySDI3LjQ5MThDMjguMDQ0MiA0NC44NzYyIDI4LjU2MTcgNDQuNjA1OCAyOC44NzcxIDQ0LjE1MjJDMjkuMTYwOSA0My43NDQyIDI5LjYwOTYgNDIuOTY3OSAyOS44NDg3IDQyLjQxNDVMMzEuOTU3OSA0MS41NDA4QzMyLjUwMTQgNDEuNzU2NCAzMy4zNzExIDQxLjk5MjIgMzMuODczNiA0Mi4wODI1QzM0LjQxNzQgNDIuMTgwMyAzNC45NzQ1IDQyLjAwNTYgMzUuMzY1MiA0MS42MTQ5TDM3LjczODYgMzkuMjQxNkMzOC4xMjkyIDM4Ljg1MDkgMzguMzAzOSAzOC4yOTM3IDM4LjIwNjIgMzcuNzQ5OUMzOC4xMTcyIDM3LjI1NTEgMzcuODg1NCAzNi4zOTExIDM3LjY2NDQgMzUuODM0MkwzOC41MzgxIDMzLjcyNUMzOS4wNzM4IDMzLjQ5MzggMzkuODU2MiAzMy4wNDU1IDQwLjI3NTkgMzIuNzUzNUM0MC43Mjk0IDMyLjQzOCA0MC45OTk5IDMxLjkyMDYgNDAuOTk5OSAzMS4zNjgxVjI4LjAxMThDNDAuOTk5OSAyNy40NTkzIDQwLjcyOTQgMjYuOTQxOSA0MC4yNzU5IDI2LjYyNjRaTTI1LjgxMzUgMzYuNDM5NUMyMi4wOTE5IDM2LjQzOTUgMTkuMDY0MSAzMy40MTE3IDE5LjA2NDEgMjkuNjkwMUMxOS4wNjQxIDI1Ljk2ODUgMjIuMDkxOSAyMi45NDA3IDI1LjgxMzUgMjIuOTQwN0MyOS41MzUyIDIyLjk0MDcgMzIuNTYzIDI1Ljk2ODUgMzIuNTYzIDI5LjY5MDFDMzIuNTYzIDMzLjQxMTcgMjkuNTM1MiAzNi40Mzk1IDI1LjgxMzUgMzYuNDM5NVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTQ5LjU0OTIgMjguMDAyNEM0OC42MTczIDI4LjAwMjQgNDcuODYxOCAyOC43NTc5IDQ3Ljg2MTggMjkuNjg5OEM0Ny44NjE4IDM1LjAzMjggNDUuOTI2NSA0MC4xODY3IDQyLjQxMjQgNDQuMjAyNEMzOS4yNTYxIDQ3LjgwOTQgMzUuMDI5NSA1MC4yODE2IDMwLjM4OTMgNTEuMjYyNkMyOS41NzY3IDQ5LjU1MDMgMjcuODMxNSA0OC4zNjMyIDI1LjgxMzcgNDguMzYzMkMyMy4wMjI0IDQ4LjM2MzIgMjAuNzUxNiA1MC42MzQxIDIwLjc1MTYgNTMuNDI1M0MyMC43NTE2IDU2LjIxNjUgMjMuMDIyNCA1OC40ODc0IDI1LjgxMzcgNTguNDg3NEMyOC4xODc3IDU4LjQ4NzQgMzAuMTg0MSA1Ni44NDQzIDMwLjcyODQgNTQuNjM2QzM2LjIyMTUgNTMuNTU3OCA0MS4yMzI2IDUwLjY3NTMgNDQuOTUyMSA0Ni40MjQ4QzQ5LjAwNDcgNDEuNzkzOCA1MS4yMzY1IDM1Ljg1MDUgNTEuMjM2NSAyOS42ODk4QzUxLjIzNjUgMjguNzU3OSA1MC40ODEgMjguMDAyNCA0OS41NDkyIDI4LjAwMjRaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxNS42MzMyIiB5MT0iMC44OTI1NzgiIHgyPSIxNS42MzMyIiB5Mj0iMzEuMzc3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkFCRTQ0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZBNEM2QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyNS44MTM2IiB5MT0iMTQuNTAzNyIgeDI9IjI1LjgxMzYiIHkyPSI0NC44NzYyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUJFNDQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkE0QzZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjM1Ljk5NDEiIHkxPSIyOC4wMDI0IiB4Mj0iMzUuOTk0MSIgeTI9IjU4LjQ4NzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQkU0NCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQTRDNkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Hh55":
/***/ (function(module, exports) {

module.exports = require("react-icons/im");

/***/ }),

/***/ "IDz+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal_wiew": "PromotionModal_modal_wiew__3uLfe"
};


/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "KHQI":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNCAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMTk0NiAzLjE3NzU4Qy0wLjQ0MTY3NyA1LjkxNTkgMC4wOTc4Nzk5IDguODI0NzUgMC4wOTc4Nzk5IDE3LjY2MTdDMC4wOTc4Nzk5IDI1LjAwMDMgLTEuMTgyNTIgMzIuMzU3IDUuNTE4NjEgMzQuMDg4OUM3LjYxMTE0IDM0LjYyNyAyNi4xNTE4IDM0LjYyNyAyOC4yNDE1IDM0LjA4NjFDMzEuMDMxNSAzMy4zNjYyIDMzLjMwMTYgMzEuMTAzMSAzMy42MTE5IDI3LjE1NzFDMzMuNjU1MiAyNi42MDY0IDMzLjY1NTIgOC43MjY5MSAzMy42MTA1IDguMTY0OTlDMzMuMjgwNiAzLjk2MTc2IDMwLjY5MzIgMS41MzkzNCAyNy4yODQgMS4wNDg3MUMyNi41MDI2IDAuOTM1NDg4IDI2LjM0NiAwLjkwMTk0MSAyMi4zMzcxIDAuODk0OTUyQzguMTE3MTQgMC45MDE5NDEgNS4wMDAwMiAwLjI2ODczMSAyLjE5NDYgMy4xNzc1OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTE2Ljg2ODggNS4yODI3MUMxMS43OTMzIDUuMjgyNzEgNi45NzM2NyA0LjgzMTIxIDUuMTMyNzUgOS41NTU4M0M0LjM3MjM0IDExLjUwNzIgNC40ODI3NyAxNC4wNDE0IDQuNDgyNzcgMTcuNjcwMUM0LjQ4Mjc3IDIwLjg1NDQgNC4zODA3MyAyMy44NDcxIDUuMTMyNzUgMjUuNzgzMUM2Ljk2OTQ4IDMwLjUxMDUgMTEuODI4MyAzMC4wNTc2IDE2Ljg2NiAzMC4wNTc2QzIxLjcyNjIgMzAuMDU3NiAyNi43Mzc0IDMwLjU2MzYgMjguNjAwNyAyNS43ODMxQzI5LjM2MjUgMjMuODEyMSAyOS4yNTA2IDIxLjMxNTYgMjkuMjUwNiAxNy42NzAxQzI5LjI1MDYgMTIuODMwOSAyOS41MTc2IDkuNzA2NzkgMjcuMTcwNyA3LjM2MTI2QzI0Ljc5NDQgNC45ODQ5NyAyMS41ODA4IDUuMjgyNzEgMTYuODYzMiA1LjI4MjcxSDE2Ljg2ODhaTTE1Ljc1ODkgNy41MTUwMkMyNi4zNDYgNy40OTgyNCAyNy42OTM1IDYuMzIxMjggMjYuOTQ5OCAyMi42NzE1QzI2LjY4NTcgMjguNDU0MyAyMi4yODI1IDI3LjgxOTcgMTYuODcwMiAyNy44MTk3QzcuMDAxNjMgMjcuODE5NyA2LjcxNzg3IDI3LjUzNzMgNi43MTc4NyAxNy42NjQ2QzYuNzE3ODcgNy42NzcxNiA3LjUwMDY1IDcuNTIwNjEgMTUuNzU4OSA3LjUxMjIyVjcuNTE1MDJaTTIzLjQ4MDUgOS41NzEyQzIyLjY2IDkuNTcxMiAyMS45OTQ2IDEwLjIzNjYgMjEuOTk0NiAxMS4wNTcxQzIxLjk5NDYgMTEuODc3NiAyMi42NiAxMi41NDMgMjMuNDgwNSAxMi41NDNDMjQuMzAxIDEyLjU0MyAyNC45NjYzIDExLjg3NzYgMjQuOTY2MyAxMS4wNTcxQzI0Ljk2NjMgMTAuMjM2NiAyNC4zMDEgOS41NzEyIDIzLjQ4MDUgOS41NzEyWk0xNi44Njg4IDExLjMwODdDMTMuMzU2MSAxMS4zMDg3IDEwLjUwODcgMTQuMTU3NCAxMC41MDg3IDE3LjY3MDFDMTAuNTA4NyAyMS4xODI5IDEzLjM1NjEgMjQuMDMwMiAxNi44Njg4IDI0LjAzMDJDMjAuMzgxNSAyNC4wMzAyIDIzLjIyNzUgMjEuMTgyOSAyMy4yMjc1IDE3LjY3MDFDMjMuMjI3NSAxNC4xNTc0IDIwLjM4MTUgMTEuMzA4NyAxNi44Njg4IDExLjMwODdaTTE2Ljg2ODggMTMuNTQxQzIyLjMyNzMgMTMuNTQxIDIyLjMzNDMgMjEuNzk5MyAxNi44Njg4IDIxLjc5OTNDMTEuNDExNyAyMS43OTkzIDExLjQwMzMgMTMuNTQxIDE2Ljg2ODggMTMuNTQxWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjIuMjU4OTMiIHkxPSIzMi4yOTk4IiB4Mj0iMzMuNDM3OCIgeTI9IjUuMzE0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZERDU1Ii8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjRkY1NDNFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M4MzdBQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "LE1b":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjUxNDUgMzQuNzQyOUMyMS4xMzc1IDM1LjUzMDIgMTMuNzM4MSAzNS41MzAyIDYuMzYxMTUgMzQuNzQyOUMzLjQxOTYyIDM0LjQyODkgMS4wOTYyMyAzMi4xMDU2IDAuNzgyMjkgMjkuMTYzOEMtMC4wMDUwNjY1NCAyMS43ODY4IC0wLjAwNTA2NjU0IDE0LjM4NzcgMC43ODIyOSA3LjAxMDY4QzEuMDk2MjMgNC4wNjkxNSAzLjQxOTYyIDEuNzQ1NzcgNi4zNjExNSAxLjQzMTgzQzEzLjczODEgMC42NDQ0NyAyMS4xMzcyIDAuNjQ0NDcgMjguNTE0MiAxLjQzMTgzQzMxLjQ1NiAxLjc0NTc3IDMzLjc3OTQgNC4wNjkxNSAzNC4wOTMzIDcuMDEwNjhDMzQuODgwNyAxNC4zODc3IDM0Ljg4MDcgMjEuNzg2OCAzNC4wOTMzIDI5LjE2MzhDMzMuNzc5NCAzMi4xMDU2IDMxLjQ1NjMgMzQuNDI4OSAyOC41MTQ1IDM0Ljc0MjlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik03LjAxOTc4IDE0LjYxODJIMTEuNTg3MVYyOC43Nzc0SDcuMDE5NzhWMTQuNjE4MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMy43MjM3IDE0LjMxMzVDMjAuMzc2NiAxNC4zMTM1IDE4LjkwNjQgMTYuMTczNyAxOC41MzY0IDE2Ljc0VjE0LjYxODJIMTQuMzI3OFYyOC43Nzc1SDE4Ljg5NTNWMjEuNjY1MkMxOC44OTUzIDE5LjYxIDE5Ljg0MTQgMTguMDExMyAyMS42MzU4IDE4LjAxMTNDMjMuNDMgMTguMDExMyAyMy43MjM3IDIwLjAwMTMgMjMuNzIzNyAyMi40NDgzVjI4Ljc3NzVIMjguMjkxMlYxOC44ODFDMjguMjkxMiAxNi4zNTg0IDI2LjI0NjMgMTQuMzEzNSAyMy43MjM3IDE0LjMxMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuMDIyMSAxMC4xMTU5QzEyLjAyMjEgMTEuNjE3NCAxMC44MDUxIDEyLjgzNDUgOS4zMDM1IDEyLjgzNDVDNy44MDE5NCAxMi44MzQ1IDYuNTg0NTkgMTEuNjE3NCA2LjU4NDU5IDEwLjExNTlDNi41ODQ1OSA4LjYxNDMyIDcuODAxOTQgNy4zOTY5NyA5LjMwMzUgNy4zOTY5N0MxMC44MDUxIDcuMzk2OTcgMTIuMDIyMSA4LjYxNDMyIDEyLjAyMjEgMTAuMTE1OVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMS42NDM4IiB5MT0iNS42OTA4MyIgeDI9IjIwLjM2NzkiIHkyPSIyNC4zNTYyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDc3QjUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA2NkIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "T/Ra":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0OSA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4LjE4NjggMTkuNjE0MkM0OC44MTg3IDE4Ljk4MjMgNDguODE4NyAxNy45NTc3IDQ4LjE4NjggMTcuMzI1N0w0NS43NTgyIDE0Ljg5NzFDNDUuMjA5IDE0LjM0NzkgNDQuMzQ2NyAxNC4yNjY1IDQzLjcwNDQgMTQuNzAzTDM4LjU5ODEgMTguMTczNUw0Mi4wNDc2IDEzLjAzMjdDNDIuNDc4NCAxMi4zOTA3IDQyLjM5NDkgMTEuNTMzNSA0MS44NDggMTAuOTg2OEwzNi41ODAxIDUuNzE4OTRDMzYuMDkzOCA1LjIzMjYxIDM1LjM1MzMgNS4xMDY3MSAzNC43MzM5IDUuNDA1MjJMMzMuODIzIDUuODQzNzZMMzQuMjU5MiA0Ljg3NjA2QzM0LjUzNTcgNC4yNjI3NCAzNC40MDM4IDMuNTQyNTIgMzMuOTI4MiAzLjA2Njc2TDMyLjI3NDYgMS40MTMzNUMzMS42NDI3IDAuNzgxNDg2IDMwLjYxOCAwLjc4MTQ4NiAyOS45ODYxIDEuNDEzMzVMMTcuMTQxNiAxNC4yNTc3TDM1LjM0MjQgMzIuNDU4Nkw0OC4xODY4IDE5LjYxNDJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xNC43NSAxNi42NDk5TDExLjAzMTggMjAuMzY4MkMxMC43MjgzIDIwLjY3MTcgMTAuNTU3NyAyMS4wODMyIDEwLjU1NzcgMjEuNTEyNEMxMC41NTc3IDIxLjk0MTUgMTAuNzI4MiAyMi4zNTMyIDExLjAzMTggMjIuNjU2NkwxNC41NTg5IDI2LjE4MzdDMTUuMjM4NCAyNi44NjMyIDE1LjU2OCAyNy44MDExIDE1LjQ2MzIgMjguNzU2NkMxNS4zNTg0IDI5LjcxMTQgMTQuODMyOCAzMC41NTU3IDE0LjAyMTIgMzEuMDczMUMzLjY1NzE3IDM3LjY3OTYgMi42OTEwOCAzOC42NDU4IDIuMzczNjkgMzguOTYzM0MwLjA5NTMyNTcgNDEuMjQxNiAwLjA5NTMyNTcgNDQuOTQ4NyAyLjM3MzY5IDQ3LjIyNzFDNC42NTQzMiA0OS41MDc4IDguMzYxNTkgNDkuNTAzMiAxMC42Mzc1IDQ3LjIyNzFDMTAuOTU1MSA0Ni45MDk2IDExLjkyMTUgNDUuOTQzMSAxOC41Mjc1IDM1LjU3OTZDMTkuMDQzNyAzNC43Njk5IDE5Ljg4NzYgMzQuMjQ1NSAyMC44NDI5IDM0LjE0MDZDMjEuODAxMiAzNC4wMzYgMjIuNzM4OSAzNC4zNjQgMjMuNDE2OSAzNS4wNDE4TDI2Ljk0NCAzOC41Njg5QzI3LjU3NTggMzkuMjAwOCAyOC42MDA2IDM5LjIwMDggMjkuMjMyNSAzOC41Njg5TDMyLjk1MDkgMzQuODUwNUwxNC43NSAxNi42NDk5Wk04LjIyMjEgNDQuNjEzM0M3LjMyODgzIDQ1LjUwNjYgNS44ODA2MiA0NS41MDY2IDQuOTg3NDYgNDQuNjEzM0M0LjA5NDIgNDMuNzIwMSA0LjA5NDIgNDIuMjcxOSA0Ljk4NzQ2IDQxLjM3ODdDNS44ODA3MyA0MC40ODU0IDcuMzI4OTQgNDAuNDg1NCA4LjIyMjEgNDEuMzc4N0M5LjExNTM2IDQyLjI3MTkgOS4xMTUzNiA0My43MjAxIDguMjIyMSA0NC42MTMzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMzUuMTg3MSIgeTE9IjMzLjczNTciIHgyPSIyNi4xMjUiIHkyPSI5LjEzODUzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQTQ3NkQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkFCNzQ3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjE2LjgwNzkiIHkxPSIxNi42NDk5IiB4Mj0iMTYuODA3OSIgeTI9IjQ4LjkzNTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQjc0NyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQTQ3NkQiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XQC6":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA0NCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjk4MTggNS4yNjI4OEM0Mi40ODMyIDMuNDA5ODcgNDEuMDIyMiAxLjk0OTI0IDM5LjE2OTUgMS40NTAyN0MzNS43ODQ2IDAuNTIzOTI2IDIyLjI0NDkgMC41MjM5MjYgMjIuMjQ0OSAwLjUyMzkyNkMyMi4yNDQ5IDAuNTIzOTI2IDguNzA1NTggMC41MjM5MjYgNS4zMjA2NiAxLjQxNDk1QzMuNTAzNjIgMS45MTM2IDIuMDA3MDIgMy40MTAyIDEuNTA4MzcgNS4yNjI4OEMwLjYxNzY3NiA4LjY0NzQ3IDAuNjE3Njc2IDE1LjY2NjggMC42MTc2NzYgMTUuNjY2OEMwLjYxNzY3NiAxNS42NjY4IDAuNjE3Njc2IDIyLjcyMTQgMS41MDgzNyAyNi4wNzA3QzIuMDA3MzUgMjcuOTIzNCAzLjQ2Nzk4IDI5LjM4NDMgNS4zMjA5OSAyOS44ODMzQzguNzQxMjIgMzAuODA5NyAyMi4yNDUzIDMwLjgwOTcgMjIuMjQ1MyAzMC44MDk3QzIyLjI0NTMgMzAuODA5NyAzNS43ODQ2IDMwLjgwOTcgMzkuMTY5NSAyOS45MTg2QzQxLjAyMjUgMjkuNDIgNDIuNDgzMiAyNy45NTkgNDIuOTgyMSAyNi4xMDYzQzQzLjg3MjggMjIuNzIxNCA0My44NzI4IDE1LjcwMjQgNDMuODcyOCAxNS43MDI0QzQzLjg3MjggMTUuNzAyNCA0My45MDg1IDguNjQ3NDcgNDIuOTgxOCA1LjI2Mjg4WiIgZmlsbD0iI0ZGMDAwMCIvPgo8cGF0aCBkPSJNMTcuOTM0MSAyMi4xNTE2TDI5LjE5MzEgMTUuNjY2OUwxNy45MzQxIDkuMTgyMTNWMjIuMTUxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YKTw":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OSA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQzLjI2MTIgMC43Mzk1MDJDNDAuNDA0MiAwLjczOTUwMiAzOC4wOTU1IDMuMDcxNDkgMzguMDk1NSA1LjkwNTIxVjMyLjk1NDdDMzguMDk1NSAzNC45MTQ4IDM5LjIwMTcgMzYuNjQwOSA0MC44MzU5IDM3LjUxNEM0NC4yODEzIDM5LjM1NTMgNDguNDI2OSAzNi44MjUxIDQ4LjQyNjkgMzIuOTU0N1Y1LjkwNTIxQzQ4LjQyNjkgMy4wNTY4NCA0Ni4xMDk1IDAuNzM5NTAyIDQzLjI2MTIgMC43Mzk1MDJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xNS4yNzI2IDguOTU2ODFWMjUuNDQxQzE1LjI3MjYgMjYuMjE4NyAxNC42NDE0IDI2Ljg0OTkgMTMuODYzNyAyNi44NDk5QzEzLjA4NjEgMjYuODQ5OSAxMi40NTQ5IDI2LjIxODcgMTIuNDU0OSAyNS40NDFWOS4wMDQ3MUg3LjM4MzEzQzMuNDkyODkgOS4wMDQ3MSAwLjMzODk4OSAxMi4xNTg2IDAuMzM4OTg5IDE2LjA0ODlWMjIuODExMkMwLjMzODk4OSAyNi43MDE1IDMuNDkyODkgMjkuODU1NCA3LjM4MzEzIDI5Ljg1NTRIMTIuNzIzNUwxNS4yMTM0IDQxLjUyOTlDMTUuODc2NSA0NC43MTAxIDE4LjY0MjUgNDcuMDQ2OCAyMS45MjMyIDQ3LjEzNDJDMjQuNDkxOSA0Ny4yMDI3IDI2LjMxODcgNDQuOTUwNSAyNS44MjA5IDQyLjU3MDVMMjQuODAyOCAzNy42ODA5QzI3LjU3MTYgMzYuNzc2NSAyOS43NDUgMzQuNTUxNSAzMC41ODI4IDMxLjc2MDFDMzIuMTgyMyAzMi4wNTIyIDMzLjc1NTUgMzIuNDEgMzUuMjc3OSAzMi44NzAzVjYuMDE2MTFDMjkuMzA2NCA3LjkxNDM3IDIxLjUxNTIgOC43OTM5NSAxNS4yNzI2IDguOTU2ODFaTTI0LjIyMzMgMzQuODk4QzIzLjkzMjIgMzMuNTAzMyAyMy42NDQ4IDMyLjEyMDggMjMuMzU5MyAzMC43NTE0QzI0LjgyMjYgMzAuOTIxNCAyNi4yOTgxIDMxLjA5NyAyNy43NjQyIDMxLjMwNjVDMjcuMTU3NSAzMi45NTEgMjUuODYwNCAzNC4yNjc4IDI0LjIyMzMgMzQuODk4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNDMuMjYxMiIgeTE9IjAuNzM5NTAyIiB4Mj0iNDMuMjYxMiIgeTI9IjM4LjEyNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQkU0NCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQTRDNkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMTcuODA4NSIgeTE9IjYuMDE2MTEiIHgyPSIxNy44MDg1IiB5Mj0iNDcuMTM1NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkFCRTQ0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZBNEM2QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cv5o":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/globus-ee9918f58acb74da2b5131793feba9ab.gif";

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fvWP":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hlCC":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA1NCA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjA3MzIgMjguNDUzN0MyMS4yNzIgMjguMTA5NCAyMS4yNzIgMjcuNjg1NyAyMS4wNzMyIDI3LjM0MTNMMTUuMzA3IDE3LjM1MjhDMTUuMTAzOSAxNy4wMDA4IDE0LjczODkgMTYuNzc3IDE0LjMxODUgMTYuNzk2NkMxMy45MTIyIDE2LjgwNjQgMTMuNTQ0IDE3LjAzNTYgMTMuMzU2MSAxNy4zOTYyQzEyLjE5MTUgMTkuNjM3MyAxMS42MDE3IDIyLjA0NzggMTEuNjAxNyAyNC41NjA0QzExLjYwMTcgMjUuNzI5MyAxMS43NDczIDI2LjkzODQgMTIuMDMyOSAyOC4xNTI5QzEyLjE1MTMgMjguNjU0OCAxMi42IDI5LjAxIDEzLjExNTkgMjkuMDFIMjAuMTA5NkMyMC41MDcyIDI5LjAwOTkgMjAuODc0MyAyOC43OTgxIDIxLjA3MzIgMjguNDUzN1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTMzLjI3NTUgMjAuNjY3MUMzMy4wNzY4IDIxLjAxMTQgMzMuMDc2OCAyMS40MzUyIDMzLjI3NTUgMjEuNzc5NUwzOS4wNDI3IDMxLjc2ODFDMzkuMjQxNSAzMi4xMTI0IDM5LjYwOTggMzIuMzI0MiA0MC4wMDYzIDMyLjMyNDJDNDAuMDE1IDMyLjMyNDIgNDAuMDIyNiAzMi4zMjQyIDQwLjAzMTQgMzIuMzI0MkM0MC40Mzc3IDMyLjMxNDQgNDAuODA1OSAzMi4wODUyIDQwLjk5MzggMzEuNzI0NkM0Mi4xNTg0IDI5LjQ4MzUgNDIuNzQ4MiAyNy4wNzMgNDIuNzQ4MiAyNC41NjA0QzQyLjc0ODIgMjMuMzkxNiA0Mi42MDI2IDIyLjE4MjUgNDIuMzE3IDIwLjk2OEM0Mi4xOTg2IDIwLjQ2NiA0MS43NDk5IDIwLjExMDggNDEuMjM0IDIwLjExMDhIMzQuMjM5MUMzMy44NDE1IDIwLjExMDkgMzMuNDc0MyAyMC4zMjI3IDMzLjI3NTUgMjAuNjY3MVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTMxLjYzNzQgOS42NDM5OUMzMS4xNDEgOS40OTYyMiAzMC42MTQxIDkuNzA5MTcgMzAuMzU1NiAxMC4xNTM0TDI2Ljg1NDQgMTYuMjE3MkMyNi42NTU2IDE2LjU2MTYgMjYuNjU1NiAxNi45ODUzIDI2Ljg1NDQgMTcuMzI5NkMyNy4wNTMyIDE3LjY3NCAyNy40MjA0IDE3Ljg4NTggMjcuODE4IDE3Ljg4NThIMzkuMzQ4MUMzOS43NTQ0IDE3Ljg4NTggNDAuMTI5MiAxNy42NjQyIDQwLjMyMzYgMTcuMzA2OEM0MC41MTkxIDE2Ljk1MDQgNDAuNTAzOSAxNi41MTYgNDAuMjg0NSAxNi4xNzI3QzM4LjI2NzIgMTMuMDI1NyAzNS4xOTYyIDEwLjcwNjUgMzEuNjM3NCA5LjY0Mzk5WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjcuNDk1MiAzMS43OTA1QzI3LjI5NjQgMzEuNDQ2MiAyNi45MjkzIDMxLjIzNDQgMjYuNTMxNiAzMS4yMzQ0SDE1LjAwMTZDMTQuNTk1MyAzMS4yMzQ0IDE0LjIyMDUgMzEuNDU2IDE0LjAyNjEgMzEuODEzNEMxMy44MzA2IDMyLjE2OTcgMTMuODQ1OCAzMi42MDQyIDE0LjA2NTIgMzIuOTQ3NUMxNi4wODI1IDM2LjA5NDUgMTkuMTU0NiAzOC40MTM4IDIyLjcxMzMgMzkuNDc2MkMyMi44MTg2IDM5LjUwNzYgMjIuOTI2MyAzOS41MjI5IDIzLjAzMTYgMzkuNTIyOUMyMy40MjE2IDM5LjUyMjkgMjMuNzkyIDM5LjMxNzUgMjMuOTk1MiAzOC45NjY3TDI3LjQ5NTMgMzIuOTAyOUMyNy42OTQgMzIuNTU4NSAyNy42OTQgMzIuMTM0OSAyNy40OTUyIDMxLjc5MDVaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xOS43ODg5IDIwLjY2NjhDMTkuOTg3NyAyMS4wMTExIDIwLjM1NDkgMjEuMjIyOSAyMC43NTI1IDIxLjIyMjlDMjEuMTUwMiAyMS4yMjI5IDIxLjUxNzIgMjEuMDExMSAyMS43MTYxIDIwLjY2NjhMMjcuNDc2OCAxMC42ODlDMjcuNjggMTAuMzM3MSAyNy42NzQ2IDkuOTAyNTIgMjcuNDYzOCA5LjU1NDkzQzI3LjI1NDIgOS4yMDk0NCAyNi44NzE4IDkuMDEyODYgMjYuNDYzMyA5LjAyMTUxQzIyLjc0MDUgOS4xODk5NCAxOS4yMDAyIDEwLjY5MDEgMTYuNDkzMiAxMy4yNDczQzE2LjExODQgMTMuNjAwMyAxNi4wMzU5IDE0LjE2NTIgMTYuMjkzMyAxNC42MTE2TDE5Ljc4ODkgMjAuNjY2OFoiIGZpbGw9InVybCgjcGFpbnQ0X2xpbmVhcikiLz4KPHBhdGggZD0iTTQ5LjQyMjQgNi43NjIxNkg0Mi4zNjY4QzQxLjQ3NSA2Ljc2MjE2IDQwLjYzNzUgNi40MTQ1NyA0MC4wMDYzIDUuNzg0NDhMMzUuOTM5MiAxLjcxNzM1QzM0Ljg4ODcgMC42NjY4ODMgMzMuNDkxNyAwLjA4Nzg5MDYgMzIuMDA1NyAwLjA4Nzg5MDZIMjIuMzQ0QzIwLjg1OCAwLjA4Nzg5MDYgMTkuNDYxIDAuNjY2ODgzIDE4LjQxMDUgMS43MTczNUwxNC4zNDM0IDUuNzg0NDhDMTMuNzEyMiA2LjQxNDU3IDEyLjg3NDcgNi43NjIxNiAxMS45ODI5IDYuNzYyMTZINC45MjczM0MyLjQ3MzI4IDYuNzYyMTYgMC40Nzc3ODMgOC43NTc2NiAwLjQ3Nzc4MyAxMS4yMTE2VjQwLjEzMzRDMC40Nzc3ODMgNDIuNTg3MyAyLjQ3MzI4IDQ0LjU4MjkgNC45MjczMyA0NC41ODI5SDQ5LjQyMjVDNTEuODc2NCA0NC41ODI5IDUzLjg3MiA0Mi41ODc0IDUzLjg3MiA0MC4xMzM0VjExLjIxMTZDNTMuODcxOSA4Ljc1NzY2IDUxLjg3NjQgNi43NjIxNiA0OS40MjI0IDYuNzYyMTZaTTI3LjE3NDggNDIuMzU4MkMxNy4zNjEyIDQyLjM1ODIgOS4zNzY3NyAzNC4zNzM4IDkuMzc2NzcgMjQuNTYwMUM5LjM3Njc3IDE0Ljc0NjUgMTcuMzYxMiA2Ljc2MjE2IDI3LjE3NDggNi43NjIxNkMzNi45ODg1IDYuNzYyMTYgNDQuOTcyOSAxNC43NDY2IDQ0Ljk3MjkgMjQuNTYwMkM0NC45NzI5IDM0LjM3MzkgMzYuOTg4NSA0Mi4zNTgyIDI3LjE3NDggNDIuMzU4MlpNNDcuMTk3NiAxNS42NjExQzQ1Ljk3MTIgMTUuNjYxMSA0NC45NzI5IDE0LjY2MjggNDQuOTcyOSAxMy40MzY0QzQ0Ljk3MjkgMTIuMjEgNDUuOTcxMiAxMS4yMTE3IDQ3LjE5NzYgMTEuMjExN0M0OC40MjQgMTEuMjExNyA0OS40MjI0IDEyLjIxIDQ5LjQyMjQgMTMuNDM2NEM0OS40MjI0IDE0LjY2MjggNDguNDI0IDE1LjY2MTEgNDcuMTk3NiAxNS42NjExWiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyKSIvPgo8cGF0aCBkPSJNMzQuNTYwNSAyOC40NTQ4QzM0LjE2MjkgMjcuNzY2MSAzMy4wMzEgMjcuNzY2MSAzMi42MzM1IDI4LjQ1NDhMMjYuODczOSAzOC40MzE0QzI2LjY3MDcgMzguNzgzNCAyNi42NzYxIDM5LjIxOCAyNi44ODY5IDM5LjU2NTVDMjcuMDg5IDM5Ljg5OCAyNy40NDk2IDQwLjEgMjcuODM3NSA0MC4xQzI3Ljg1MzcgNDAuMSAyNy44NzEyIDQwLjEgMjcuODg3NCA0MC4wOTlDMzEuNjA5MiAzOS45MzA1IDM1LjE0OTMgMzguNDMwNCAzNy44NTY1IDM1Ljg3MzJDMzguMjMxMyAzNS41MjAyIDM4LjMxMzggMzQuOTU1MyAzOC4wNTY0IDM0LjUwODhMMzQuNTYwNSAyOC40NTQ4WiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTYuNDEyIiB5MT0iMTYuNzk1NCIgeDI9IjI4LjAwOTIiIHkyPSIyOC45NzUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUFBNEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkE0QzZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjM3LjkzNzMiIHkxPSIyMC4xMTA4IiB4Mj0iMzcuOTM3MyIgeTI9IjMyLjMyNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQUE0QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQTRDNkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iMzMuNTgyOCIgeTE9IjkuNTk3NDEiIHgyPSIzNi45Nzc3IiB5Mj0iMjMuMDMwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkFBQTRDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZBNEM2QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXIiIHgxPSIyMC43NjY5IiB5MT0iMzEuMjM0NCIgeDI9IjIwLjc2NjkiIHkyPSIzOS41MjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUFBNEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkE0QzZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhciIgeDE9IjIxLjg4NSIgeTE9IjkuMDIxMjQiIHgyPSIzMS43NjMzIiB5Mj0iMzEuNzkwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkFBQTRDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZBNEM2QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXIiIHgxPSIyNy4xNzQ5IiB5MT0iMC4wODc4OTAxIiB4Mj0iNDMuMjM0OCIgeTI9IjQ0LjYxNzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQUE0QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQTRDNkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDZfbGluZWFyIiB4MT0iMzIuNDY1MiIgeTE9IjI3LjkzODIiIHgyPSIzMi40NjUyIiB5Mj0iNDAuMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkFBQTRDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZBNEM2QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "l5nU":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal_wiew": "FormModal_modal_wiew__19aDs",
	"modal_form_content": "FormModal_modal_form_content__1mrVG"
};


/***/ }),

/***/ "lxFA":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyMyIgdmlld0JveD0iMCAwIDEzOCAxMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMCA1OS4wNDc2TDQ5IDExM0wxMjcgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "qCWK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "FormSection_form__2LoOQ",
	"h2": "FormSection_h2__2hpwU",
	"form_items": "FormSection_form_items__2qlTn"
};


/***/ }),

/***/ "s0Ox":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/AboutVideo.module.sass
var AboutVideo_module = __webpack_require__("tuDO");
var AboutVideo_module_default = /*#__PURE__*/__webpack_require__.n(AboutVideo_module);

// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__("Hh55");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/react-responsive-modal/styles.css
var styles = __webpack_require__("fvWP");

// EXTERNAL MODULE: external "react-responsive-modal"
var external_react_responsive_modal_ = __webpack_require__("tAqf");

// EXTERNAL MODULE: ./styles/PromotionModal.module.sass
var PromotionModal_module = __webpack_require__("IDz+");
var PromotionModal_module_default = /*#__PURE__*/__webpack_require__.n(PromotionModal_module);

// CONCATENATED MODULE: ./components/modals/PromotionModal.tsx





const PromotionModal = ({
  onClosePromotionModal,
  openPromotion
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_responsive_modal_["Modal"], {
    classNames: {
      overlay: `${PromotionModal_module_default.a.overlay}`,
      modal: `${PromotionModal_module_default.a.modal_wiew}`
    },
    open: openPromotion,
    onClose: onClosePromotionModal,
    center: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", {
      width: "100%",
      height: "100%",
      src: "https://www.youtube.com/embed/p39p7BxiVtw",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    })
  });
};

/* harmony default export */ var modals_PromotionModal = (PromotionModal);
// CONCATENATED MODULE: ./components/AboutVideo.tsx








const AboutVideo = ({
  videoLabel
}) => {
  // Promotion modal
  const {
    0: openPromotion,
    1: setPromotionOpen
  } = Object(external_react_["useState"])(false);

  const onOpenPromotionModal = () => setPromotionOpen(true);

  const onClosePromotionModal = () => setPromotionOpen(false);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: AboutVideo_module_default.a.about_us_video,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "pulse",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: onOpenPromotionModal,
          className: "btn",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(im_["ImPlay3"], {})
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: AboutVideo_module_default.a.about_us_text,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: videoLabel
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Promotion video"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modals_PromotionModal, {
      onClosePromotionModal: onClosePromotionModal,
      openPromotion: openPromotion
    })]
  });
};

/* harmony default export */ var components_AboutVideo = __webpack_exports__["a"] = (AboutVideo);

/***/ }),

/***/ "ssZn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNiAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjE1MDUgMzQuOTMzNEMyNy43OTcxIDM0LjkzMzQgMzUuNjE3MyAyNy4xMTMzIDM1LjYxNzMgMTcuNDY2N0MzNS42MTczIDcuODIwMTEgMjcuNzk3MSAwIDE4LjE1MDUgMEM4LjUwMzk1IDAgMC42ODM4MzggNy44MjAxMSAwLjY4MzgzOCAxNy40NjY3QzAuNjgzODM4IDI3LjExMzMgOC41MDM5NSAzNC45MzM0IDE4LjE1MDUgMzQuOTMzNFoiIGZpbGw9IiM0MUI0RTYiLz4KPHBhdGggZD0iTTM1LjYxNzYgMTcuNDY2OUMzNS42MTc2IDE3LjA0MTMgMzUuNjAxNiAxNi42MTk2IDM1LjU3MTcgMTYuMjAxNUwyOC4zMzI2IDguOTYyNTJMNy45Njg4NyAxNi45NzI3TDE1Ljc2MDEgMjQuNzY0TDE1Ljg2MjMgMjUuMTMxOUwxNS45OTQ2IDI0Ljk5ODVMMTUuOTk1MiAyNC45OTkxTDE1Ljg2MjMgMjUuMTMxOUwyNC40ODEgMzMuNzUwNUMzMC45OTgzIDMxLjIxNTEgMzUuNjE3NiAyNC44ODA4IDM1LjYxNzYgMTcuNDY2OVoiIGZpbGw9IiMwMDkxQzgiLz4KPHBhdGggZD0iTTE2LjQ1NDQgMjAuMDExN0wyNC4zNDgxIDI1Ljk3MTRMMjguMzMyNiA4Ljk2MjUyTDcuOTY4ODcgMTYuOTcyN0wxNC4xNjUzIDE5LjAyNTFMMjUuNDc0IDExLjQzOTZMMTYuNDU0NCAyMC4wMTE3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjE2NTMgMTkuMDI1TDE1Ljg2MjQgMjUuMTMxOUwxNi40NTQ0IDIwLjAxMTZMMjUuNDczOSAxMS40Mzk1TDE0LjE2NTMgMTkuMDI1WiIgZmlsbD0iI0QyRDJENyIvPgo8cGF0aCBkPSJNMTkuMDE5OSAyMS45NDg2TDE1Ljg2MjQgMjUuMTMyTDE2LjQ1NDUgMjAuMDExN0wxOS4wMTk5IDIxLjk0ODZaIiBmaWxsPSIjQjlCOUJFIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "tAqf":
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ "tuDO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"about_us_video": "AboutVideo_about_us_video__39QHQ",
	"about_us_text": "AboutVideo_about_us_text__Gc9Tp"
};


/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_header": "Home_main_header__2EsTi",
	"our_services": "Home_our_services__1Uyt5",
	"our_cases": "Home_our_cases__1C45M",
	"form_section": "Home_form_section__32V7h",
	"we_are_pro": "Home_we_are_pro__2MUHg",
	"main_offer": "Home_main_offer__hrdW5",
	"about_us_video_wrap": "Home_about_us_video_wrap__mbpN9",
	"lang_toggler_mobile": "Home_lang_toggler_mobile__2f8vw",
	"h2": "Home_h2__ZAXUd",
	"services_items_wrap": "Home_services_items_wrap__3uOZF",
	"services_items": "Home_services_items__2YHz0",
	"service_element": "Home_service_element__3ihq8",
	"icon_wrap": "Home_icon_wrap__ffhaC",
	"our_cases_wrap": "Home_our_cases_wrap__2I5Of",
	"cases_tags": "Home_cases_tags__30jQQ",
	"checked": "Home_checked__1ccGE",
	"inaccessible": "Home_inaccessible__Ilan8",
	"our_cases_items": "Home_our_cases_items__Refan",
	"project_case": "Home_project_case__1HXGm",
	"project_case_wrap": "Home_project_case_wrap__1ISkK",
	"project_title": "Home_project_title__1SzuK",
	"project_duration": "Home_project_duration__3Fp5I",
	"project_link": "Home_project_link__2qono",
	"about_us_link": "Home_about_us_link__34GD8",
	"more_projects_btn": "Home_more_projects_btn__2ah6J",
	"form_section_wrap": "Home_form_section_wrap__1PQSv",
	"we_are_pro_wrap": "Home_we_are_pro_wrap__8QAN1",
	"globe_wrap": "Home_globe_wrap__3heZO",
	"we_are_pro_content": "Home_we_are_pro_content__3lQBF",
	"workflow": "Home_workflow__1rGAU",
	"workflow_items": "Home_workflow_items__2BXKr",
	"workflow_element": "Home_workflow_element__19WOC",
	"workflow_text": "Home_workflow_text__1RR_R",
	"visible": "Home_visible__2ZfBv",
	"opened": "Home_opened__3Dq0N",
	"cases_slider_wrap": "Home_cases_slider_wrap__18NyS",
	"services_slider_wrap": "Home_services_slider_wrap__1NyI1",
	"contacts_block_wrap": "Home_contacts_block_wrap__r-cLT",
	"contacts_block": "Home_contacts_block__1bnRF",
	"contacts_block_credentials_wrap": "Home_contacts_block_credentials_wrap__OWUZ7",
	"contacts_block_credentials": "Home_contacts_block_credentials__3Ffi4",
	"mails_links": "Home_mails_links__3cpaH",
	"footer_links": "Home_footer_links__1Eeuj",
	"footer_links_elements": "Home_footer_links_elements__3Uw-_"
};


/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "y552":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__("9yvl");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./styles/FormSection.module.sass
var FormSection_module = __webpack_require__("qCWK");
var FormSection_module_default = /*#__PURE__*/__webpack_require__.n(FormSection_module);

// CONCATENATED MODULE: ./components/fields/inputField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const InputField = (_ref) => {
  let {
    field,
    form: _
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread(_objectSpread({}, field), props));
};

/* harmony default export */ var inputField = (InputField);
// EXTERNAL MODULE: ./node_modules/react-responsive-modal/styles.css
var styles = __webpack_require__("fvWP");

// EXTERNAL MODULE: external "react-responsive-modal"
var external_react_responsive_modal_ = __webpack_require__("tAqf");

// EXTERNAL MODULE: ./styles/FormModal.module.sass
var FormModal_module = __webpack_require__("l5nU");
var FormModal_module_default = /*#__PURE__*/__webpack_require__.n(FormModal_module);

// EXTERNAL MODULE: ./images/check_modal_form.svg
var check_modal_form = __webpack_require__("lxFA");
var check_modal_form_default = /*#__PURE__*/__webpack_require__.n(check_modal_form);

// CONCATENATED MODULE: ./components/modals/FormModal.tsx







const FormModal = ({
  onCloseFormModal,
  openFormModal
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_responsive_modal_["Modal"], {
    classNames: {
      overlay: `${FormModal_module_default.a.overlay}`,
      modal: `${FormModal_module_default.a.modal_wiew}`
    },
    open: openFormModal,
    onClose: onCloseFormModal,
    center: true,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: FormModal_module_default.a.modal_form_content,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: check_modal_form_default.a,
        alt: "checkModal"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Request completed"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "We will contact you as soon as possible and provide a detailed consultation"
      })]
    })
  });
};

/* harmony default export */ var modals_FormModal = (FormModal);
// CONCATENATED MODULE: ./components/FormSection.tsx












const FormSection = () => {
  // Form success modal
  const {
    0: openFormModal,
    1: setFormModalOpen
  } = Object(external_react_["useState"])(false);

  const onOpenFormModal = () => setFormModalOpen(true);

  const onCloseFormModal = () => setFormModalOpen(false);

  const sendForm = (values, {
    resetForm
  }) => {
    const {
      name,
      email,
      phone
    } = values;
    external_axios_default.a.post('http://localhost:8289/v1/consult', {
      name,
      email,
      phone
    }).then(res => {
      if (res.data.message === 'ok') {
        resetForm({});
        console.log(res);
        onOpenFormModal();
        console.log(values);
      }
    }).then(() => {
      setTimeout(() => {
        onCloseFormModal();
      }, 3000);
    }).catch(function (error) {
      console.log(error);
      external_react_toastify_["toast"].error('Something went wrong please try later');
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
      onSubmit: sendForm,
      initialValues: {
        name: '',
        email: '',
        phone: ''
      },
      children: ({
        handleSubmit
      }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit,
        className: FormSection_module_default.a.form,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "title_label",
          children: "LET\u2019S GET STARTED"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: FormSection_module_default.a.h2,
          children: "Get A Free Consultation."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "The best ideas start from the brif. Let us to know what you need and we will realise it in sucsessfull product."
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: FormSection_module_default.a.form_items,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
            name: "name",
            className: "input",
            placeholder: "Name",
            type: "text",
            component: inputField,
            required: true
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
            name: "email",
            className: "input",
            placeholder: "Email",
            type: "email",
            component: inputField,
            required: true
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
            name: "phone",
            className: "input",
            placeholder: "Phone Number",
            type: "tel",
            component: inputField,
            required: true
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "submit",
            className: 'btn',
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              children: ["Submit ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(go_["GoTriangleRight"], {})]
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modals_FormModal, {
      onCloseFormModal: onCloseFormModal,
      openFormModal: openFormModal
    })]
  });
};

/* harmony default export */ var components_FormSection = __webpack_exports__["a"] = (FormSection);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });