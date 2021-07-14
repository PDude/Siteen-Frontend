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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_formElements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/formElements/Button */ \"./components/formElements/Button.tsx\");\n/* harmony import */ var _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Layout.module.sass */ \"./styles/components/Layout.module.sass\");\n/* harmony import */ var _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hamburger-react */ \"hamburger-react\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hamburger_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/logo_nav.svg */ \"./images/logo_nav.svg\");\n/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/frontend/components/Layout.tsx\";\n\n\n\n\n\n\n\n\n\n\n\n\nconst Layout = ({\n  children\n}) => {\n  const {\n    0: isHamburgerOpen,\n    1: setHamburgerOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const hamburgerDependencies = () => {\n    isHamburgerOpen ? document.body.style.overflowY = \"hidden\" : document.body.style.overflowY = \"auto\";\n  };\n\n  const closeHamburger = () => {\n    setHamburgerOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    hamburgerDependencies();\n  }, [hamburgerDependencies]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.layout_wrap,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.navigation_bar,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.navigation_bar_wrap,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              onClick: () => {\n                document.body.scrollTop = 0;\n              },\n              className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.logo_link,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n                alt: \"Siteen\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_menu,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                href: \"/#our_services\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: \"Services\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                href: \"/#cases_section\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: \"Cases\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                href: \"/#contact_us\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: \"Contact us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_tel,\n            href: \"tel:0971630202\",\n            children: \"+38 (097) 163 02 02\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/#contact_us\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_formElements_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.get_brif,\n                children: \"Get a Brif\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.hamburger_wrap_hamburger,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              toggled: isHamburgerOpen,\n              toggle: setHamburgerOpen\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n      className: isHamburgerOpen ? `${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.aside_bar} ${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.aside_bar_transparent}` : _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.aside_bar,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.hamburger_wrap,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          toggled: isHamburgerOpen,\n          toggle: setHamburgerOpen\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: isHamburgerOpen ? `${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.social_link_aside_bar} ${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.element_hidden}` : _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.social_link_aside_bar,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://www.facebook.com/siteen.co/\",\n          target: \"_blank\",\n          children: \"Facebook\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://www.instagram.com/siteen.co/\",\n          target: \"_blank\",\n          children: \"Instagram\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://www.linkedin.com/company/siteen/\",\n          target: \"_blank\",\n          children: \"Linkedin\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.main_wrap_content,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: isHamburgerOpen ? `${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.menu_opened} ${_styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.menu_opened_visible}` : _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.menu_opened,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.content_opened_wrap,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.navigation_bar_wrap_opened,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n              href: \"/\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.logo_link_opened,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n                  alt: \"Siteen\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_tel,\n              href: \"tel:0971630202\",\n              children: \"+38 (097) 163 02 02\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_formElements_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.get_brif,\n              children: \"Get a Brif\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.hamburger_wrap_hamburger,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                toggled: isHamburgerOpen,\n                toggle: setHamburgerOpen\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_menus_opened_wrap,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_menus_opened,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                    href: \"/#our_services\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      onClick: closeHamburger,\n                      children: \"Our Services\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 138,\n                      columnNumber: 23\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 137,\n                    columnNumber: 21\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 136,\n                  columnNumber: 19\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                    href: \"/about\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      onClick: closeHamburger,\n                      children: \"About Us\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 148,\n                      columnNumber: 23\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 147,\n                    columnNumber: 21\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 146,\n                  columnNumber: 19\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                    href: \"/#contacts_section\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      onClick: closeHamburger,\n                      children: \"Contacts\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 153,\n                      columnNumber: 23\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 152,\n                    columnNumber: 21\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 151,\n                  columnNumber: 19\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                    href: \"/#cases_section\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      onClick: closeHamburger,\n                      children: \"Our Projects\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 158,\n                      columnNumber: 23\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 157,\n                    columnNumber: 21\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 156,\n                  columnNumber: 19\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_formElements_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.get_brif_hamburger,\n            children: \"Get a Brif\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 164,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.nav_tel_hamburger,\n            href: \"tel:0971630202\",\n            children: \"+38 (097) 163 02 02\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.social_link_mobile,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaInstagram\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 170,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 169,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaFacebookSquare\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 173,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 172,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaLinkedin\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 176,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 175,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaTelegram\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 179,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 178,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaYoutube\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 182,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 181,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_components_Layout_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.social_link_aside_bar_opened,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://www.facebook.com/siteen.co/\",\n              target: \"_blank\",\n              children: \"Facebook\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 186,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://www.instagram.com/siteen.co/\",\n              target: \"_blank\",\n              children: \"Instagram\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 189,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://www.linkedin.com/company/siteen/\",\n              target: \"_blank\",\n              children: \"Linkedin\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 192,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3g/NmE5MyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSGFtYnVyZ2VyT3BlbiIsInNldEhhbWJ1cmdlck9wZW4iLCJ1c2VTdGF0ZSIsImhhbWJ1cmdlckRlcGVuZGVuY2llcyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3dZIiwiY2xvc2VIYW1idXJnZXIiLCJ1c2VFZmZlY3QiLCJsYXlvdXRfd3JhcCIsIm5hdmlnYXRpb25fYmFyIiwibmF2aWdhdGlvbl9iYXJfd3JhcCIsInNjcm9sbFRvcCIsImxvZ29fbGluayIsImxvZ29OYXYiLCJuYXZfbWVudSIsIm5hdl90ZWwiLCJnZXRfYnJpZiIsImhhbWJ1cmdlcl93cmFwX2hhbWJ1cmdlciIsImFzaWRlX2JhciIsImFzaWRlX2Jhcl90cmFuc3BhcmVudCIsImhhbWJ1cmdlcl93cmFwIiwic29jaWFsX2xpbmtfYXNpZGVfYmFyIiwiZWxlbWVudF9oaWRkZW4iLCJtYWluX3dyYXBfY29udGVudCIsIm1lbnVfb3BlbmVkIiwibWVudV9vcGVuZWRfdmlzaWJsZSIsImNvbnRlbnRfb3BlbmVkX3dyYXAiLCJuYXZpZ2F0aW9uX2Jhcl93cmFwX29wZW5lZCIsImxvZ29fbGlua19vcGVuZWQiLCJuYXZfbWVudXNfb3BlbmVkX3dyYXAiLCJuYXZfbWVudXNfb3BlbmVkIiwiZ2V0X2JyaWZfaGFtYnVyZ2VyIiwibmF2X3RlbF9oYW1idXJnZXIiLCJzb2NpYWxfbGlua19tb2JpbGUiLCJzb2NpYWxfbGlua19hc2lkZV9iYXJfb3BlbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUMvQixRQUFNO0FBQUEsT0FBQ0MsZUFBRDtB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QUMsUUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFPRTtBQUNFLGtCQUFJLEVBQUMsMENBRFA7QUFFRSxvQkFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE4S0QsQ0EvTEQ7O0FBaU1ldEMscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1FbGVtZW50cy9CdXR0b25cIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5zYXNzXCI7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCJoYW1idXJnZXItcmVhY3RcIjtcbmltcG9ydCBsb2dvTmF2IGZyb20gXCIuLi9pbWFnZXMvbG9nb19uYXYuc3ZnXCI7XG5pbXBvcnQgeyBGYUluc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFGYWNlYm9va1NxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFUZWxlZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFZb3V0dWJlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzSGFtYnVyZ2VyT3Blbiwgc2V0SGFtYnVyZ2VyT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgaGFtYnVyZ2VyRGVwZW5kZW5jaWVzID0gKCkgPT4ge1xuICAgIGlzSGFtYnVyZ2VyT3BlblxuICAgICAgPyAoZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiKVxuICAgICAgOiAoZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgc2V0SGFtYnVyZ2VyT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW1idXJnZXJEZXBlbmRlbmNpZXMoKTtcbiAgfSwgW2hhbWJ1cmdlckRlcGVuZGVuY2llc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxheW91dF93cmFwfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZpZ2F0aW9uX2Jhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdmlnYXRpb25fYmFyX3dyYXB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmxvZ29fbGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvTmF2fSBhbHQ9XCJTaXRlZW5cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZS5uYXZfbWVudX0+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNvdXJfc2VydmljZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Nhc2VzX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhPkNhc2VzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3RfdXNcIj5cbiAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3QgdXM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUubmF2X3RlbH0gaHJlZj1cInRlbDowOTcxNjMwMjAyXCI+XG4gICAgICAgICAgICAgICszOCAoMDk3KSAxNjMgMDIgMDJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3RfdXNcIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmdldF9icmlmfT5HZXQgYSBCcmlmPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oYW1idXJnZXJfd3JhcF9oYW1idXJnZXJ9PlxuICAgICAgICAgICAgICA8SGFtYnVyZ2VyIHRvZ2dsZWQ9e2lzSGFtYnVyZ2VyT3Blbn0gdG9nZ2xlPXtzZXRIYW1idXJnZXJPcGVufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8YXNpZGVcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBpc0hhbWJ1cmdlck9wZW5cbiAgICAgICAgICAgID8gYCR7c3R5bGUuYXNpZGVfYmFyfSAke3N0eWxlLmFzaWRlX2Jhcl90cmFuc3BhcmVudH1gXG4gICAgICAgICAgICA6IHN0eWxlLmFzaWRlX2JhclxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oYW1idXJnZXJfd3JhcH0+XG4gICAgICAgICAgPEhhbWJ1cmdlciB0b2dnbGVkPXtpc0hhbWJ1cmdlck9wZW59IHRvZ2dsZT17c2V0SGFtYnVyZ2VyT3Blbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaXNIYW1idXJnZXJPcGVuXG4gICAgICAgICAgICAgID8gYCR7c3R5bGUuc29jaWFsX2xpbmtfYXNpZGVfYmFyfSAke3N0eWxlLmVsZW1lbnRfaGlkZGVufWBcbiAgICAgICAgICAgICAgOiBzdHlsZS5zb2NpYWxfbGlua19hc2lkZV9iYXJcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NpdGVlbi5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NpdGVlbi5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIEluc3RhZ3JhbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvc2l0ZWVuL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgTGlua2VkaW5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRW1wdHkgYmxvY2sgKi99XG4gICAgICAgIDxkaXYgLz5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlLm1haW5fd3JhcF9jb250ZW50fT57Y2hpbGRyZW59PC9hcnRpY2xlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGlzSGFtYnVyZ2VyT3BlblxuICAgICAgICAgICAgPyBgJHtzdHlsZS5tZW51X29wZW5lZH0gJHtzdHlsZS5tZW51X29wZW5lZF92aXNpYmxlfWBcbiAgICAgICAgICAgIDogc3R5bGUubWVudV9vcGVuZWRcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50X29wZW5lZF93cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZpZ2F0aW9uX2Jhcl93cmFwX29wZW5lZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5sb2dvX2xpbmtfb3BlbmVkfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvTmF2fSBhbHQ9XCJTaXRlZW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLm5hdl90ZWx9IGhyZWY9XCJ0ZWw6MDk3MTYzMDIwMlwiPlxuICAgICAgICAgICAgICAgICszOCAoMDk3KSAxNjMgMDIgMDJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuZ2V0X2JyaWZ9PkdldCBhIEJyaWY8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhhbWJ1cmdlcl93cmFwX2hhbWJ1cmdlcn0+XG4gICAgICAgICAgICAgICAgPEhhbWJ1cmdlclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlZD17aXNIYW1idXJnZXJPcGVufVxuICAgICAgICAgICAgICAgICAgdG9nZ2xlPXtzZXRIYW1idXJnZXJPcGVufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2X21lbnVzX29wZW5lZF93cmFwfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdl9tZW51c19vcGVuZWR9PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jb3VyX3NlcnZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VIYW1idXJnZXJ9Pk91ciBTZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlSGFtYnVyZ2VyfSBocmVmPScjJz5cbiAgICAgICAgICAgICAgICAgICAgICBQb3J0Zm9saW9cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUhhbWJ1cmdlcn0+QWJvdXQgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3RzX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUhhbWJ1cmdlcn0+Q29udGFjdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Nhc2VzX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUhhbWJ1cmdlcn0+T3VyIFByb2plY3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuZ2V0X2JyaWZfaGFtYnVyZ2VyfT5HZXQgYSBCcmlmPC9CdXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLm5hdl90ZWxfaGFtYnVyZ2VyfSBocmVmPVwidGVsOjA5NzE2MzAyMDJcIj5cbiAgICAgICAgICAgICAgKzM4ICgwOTcpIDE2MyAwMiAwMlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNvY2lhbF9saW5rX21vYmlsZX0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8RmFGYWNlYm9va1NxdWFyZSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxGYVRlbGVncmFtIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8RmFZb3V0dWJlIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNvY2lhbF9saW5rX2FzaWRlX2Jhcl9vcGVuZWR9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NpdGVlbi5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NpdGVlbi5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBJbnN0YWdyYW1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zaXRlZW4vXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGlua2VkaW5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");
=======


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
>>>>>>> 5cebc10dde807935a44af37dda0386e9c52b093d

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/formElements/Button.module.sass */ \"./styles/components/formElements/Button.module.sass\");\n/* harmony import */ var _styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/frontend/components/formElements/Button.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n // import { Component } from 'react'\n\n\n\nconst Button = (_ref) => {\n  let {\n    max = \"max-content\",\n    Icon = null,\n    className,\n    children = null\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"max\", \"Icon\", \"className\", \"children\"]);\n\n  const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.btn, className);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", _objectSpread(_objectSpread({\n    style: {\n      maxWidth: max\n    },\n    className: classNames\n  }, props), {}, {\n    children: [children && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 20\n    }, undefined), Icon && Icon]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1FbGVtZW50cy9CdXR0b24udHN4PzY5OTciXSwibmFtZXMiOlsiQnV0dG9uIiwibWF4IiwiSWNvbiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJjbGFzc05hbWVzIiwiY2xhc3NuYW1lcyIsInN0eWxlIiwiYnRuIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7O0FBU0EsTUFBTUEsTUFBcUIsR0FBRyxVQU14QjtBQUFBLE1BTnlCO0FBQzdCQyxPQUFHLEdBQUcsYUFEdUI7QUFFN0JDLFFBQUksR0FBRyxJQUZzQjtBQUc3QkMsYUFINkI7QUFJN0JDLFlBQVEsR0FBRztBQUprQixHQU16QjtBQUFBLE1BRERDLEtBQ0M7O0FBQ0osUUFBTUMsVUFBVSxHQUFHQyxpREFBVSxDQUFDQyx5RkFBSyxDQUFDQyxHQUFQLEVBQVlOLFNBQVosQ0FBN0I7QUFFQSxzQkFDRTtBQUFRLFNBQUssRUFBRTtBQUFFTyxjQUFRLEVBQUVUO0FBQVosS0FBZjtBQUFrQyxhQUFTLEVBQUVLO0FBQTdDLEtBQTZERCxLQUE3RDtBQUFBLGVBQ0dELFFBQVEsaUJBQUk7QUFBQSxnQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURmLEVBRUdGLElBQUksSUFBSUEsSUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBZkQ7O0FBaUJlRixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybUVsZW1lbnRzL0J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9mb3JtRWxlbWVudHMvQnV0dG9uLm1vZHVsZS5zYXNzXCI7XG5cbnR5cGUgUHJvcHNUeXBlID0ge1xuICBtYXg/OiBzdHJpbmc7XG4gIEljb24/OiBhbnk7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBCdXR0b246IEZDPFByb3BzVHlwZT4gPSAoe1xuICBtYXggPSBcIm1heC1jb250ZW50XCIsXG4gIEljb24gPSBudWxsLFxuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuID0gbnVsbCxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoc3R5bGUuYnRuLCBjbGFzc05hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBzdHlsZT17eyBtYXhXaWR0aDogbWF4IH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbiAmJiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgIHtJY29uICYmIEljb259XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/formElements/Button.tsx\n");
=======
>>>>>>> 5cebc10dde807935a44af37dda0386e9c52b093d


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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


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

/***/ "4RUv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9Ijc3IiB2aWV3Qm94PSIwIDAgMTQ4IDc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTQ5LjY5OSA4LjEwMTM0QzQyLjkxNjEgMTMuMjM3NSAzNi4xMzMyIDE4LjM3MzcgMjkuMzcyOCAyMy40MDE3QzI3LjM5NjcgMjQuOTA5NiAyNC4wMTM2IDI2LjY4OTEgMjMuNDUwMyAyOS4zOTQ0QzIxLjg3NjggMzUuOTU0IDI3LjkxMTEgMzguOTAzOSAzMi44MzY0IDM2LjIwMzVDMzUuNzc2MiAzNC41NTc1IDM4LjM3NTggMzIuMDUwNCA0MS4wNjE5IDMwLjEyNThDNDEuMDYxOSAzMC4xMjU4IDQzLjI1NDUgMzMuMDY2MiA0My4wMTAzIDMzLjI0MTFDNDIuNzY2MSAzMy40MTYxIDQyLjM5OTkgMzMuNjc4NiA0Mi4xNTU3IDMzLjg1MzVDNDAuNjY4IDM1LjAxMTYgMzkuMjAyOCAzNi4wNjEzIDM3LjcxNTEgMzcuMjE5M0MzMC44MTAxIDQyLjQ0MyAyMy44MDU2IDQ3LjY0NTkgMTYuOTAwNiA1Mi44Njk2QzE0LjU1ODIgNTQuNjQgMTYuODkxOCA1OC40MDAxIDE5LjIxMTYgNTYuNzM3OUMyNS45NzIgNTEuNzA5OSAzMi42NTUzIDQ2LjU1MyAzOS40MTU3IDQxLjUyNUM0MS42MTM0IDM5Ljk1MDMgNDQuMDEwMyAzOC40MTcxIDQ1Ljk3NyAzNi40NTU2QzUwLjQ5ODIgMzIuMjAzNCA0Ny4yNyAyNC43NTcgNDEuNTc4IDI1LjE1MjZDMzguMjExNiAyNS4zNTQ5IDM0LjQwOTkgMjkuNjQ0IDMxLjgyMzMgMzEuNTg5NEMzMS41NzkxIDMxLjc2NDMgMzEuMzEyNCAzMi4wNDc1IDMwLjk2ODYgMzIuMjAxN0MyOS41MDM0IDMzLjI1MTUgMjYuODU0NCAzMS4wMDY0IDI4LjM0MjEgMjkuODQ4NEMyOS4zMTg5IDI5LjE0ODYgMzAuMzE4MiAyOC4zNDA1IDMxLjI5NSAyNy42NDA2QzM4LjIgMjIuNDE3IDQ1LjIwNDYgMTcuMjE0IDUyLjEzMjEgMTEuODgyMUM1NC4zMjk5IDEwLjMwNzUgNTIuMDE4OCA2LjQzOTE3IDQ5LjY5OSA4LjEwMTM0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNTEuMDE0OSAyNy4yMzA1QzUzLjI2OTQgMjcuNjk5OSA1NS41MTA3IDI2LjA5NCA1Ni4wMjA4IDIzLjY0MzdDNTYuNTMxIDIxLjE5MzMgNTUuMTE3IDE4LjgyNjQgNTIuODYyNCAxOC4zNTdDNTAuNjA3OSAxNy44ODc2IDQ4LjM2NjcgMTkuNDkzNSA0Ny44NTY1IDIxLjk0MzhDNDcuMzQ2MyAyNC4zOTQyIDQ4Ljc2MDQgMjYuNzYxMSA1MS4wMTQ5IDI3LjIzMDVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMC4yMDc1IDU3LjU3MzRDNy4yNzcxNiA1OS42NzMgNC4zNDY3NiA2MS43NzI2IDEuNDE2NDMgNjMuODcyMUMtMC45MDM0MTUgNjUuNTM0MyAxLjQwNzY2IDY5LjQwMjYgMy43Mjc1IDY3Ljc0MDRDNi42NTc4MyA2NS42NDA5IDkuNTg4MjMgNjMuNTQxMyAxMi41MTg2IDYxLjQ0MTdDMTQuODM4NCA1OS43Nzk2IDEyLjYyNjkgNTUuOTMyIDEwLjIwNzUgNTcuNTczNFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPHBhdGggZD0iTTIwLjg5ODkgNDAuMTU0QzE1LjUyNjYgNDQuMDAzMiAxMC4xNTQ0IDQ3Ljg1MjUgNC42NjAwMiA1MS43ODkyQzIuMzQwMTggNTMuNDUxMyA0LjY1MTI1IDU3LjMxOTYgNi45NzExIDU1LjY1NzVDMTIuMzQzNCA1MS44MDgyIDE3LjcxNTYgNDcuOTU5IDIzLjIwOTkgNDQuMDIyM0MyNS41NTIzIDQyLjI1MTkgMjMuMjQxMiAzOC4zODM2IDIwLjg5ODkgNDAuMTU0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjYuMDQwOSA0My4yNzYzQzY0Ljg0NzQgNDMuMjc2MyA2My42OTE3IDQzLjA5NSA2Mi41NzM4IDQyLjczMjRDNjEuNDcxIDQyLjM1NDggNjAuNjAyMyA0MS44NzEzIDU5Ljk2NzggNDEuMjgyMUw2MC44MDYyIDM5LjUxNDZDNjEuNDEwNSA0MC4wNTg0IDYyLjE4MSA0MC41MDQxIDYzLjExNzcgNDAuODUxNkM2NC4wNjk0IDQxLjE4MzkgNjUuMDQzOCA0MS4zNTAxIDY2LjA0MDkgNDEuMzUwMUM2Ny4zNTUzIDQxLjM1MDEgNjguMzM3MiA0MS4xMzExIDY4Ljk4NjggNDAuNjkyOUM2OS42MzY1IDQwLjIzOTcgNjkuOTYxMyAzOS42NDMgNjkuOTYxMyAzOC45MDI3QzY5Ljk2MTMgMzguMzU4OSA2OS43OCAzNy45MjA3IDY5LjQxNzQgMzcuNTg4NEM2OS4wNjk5IDM3LjI0MDkgNjguNjMxOCAzNi45NzY1IDY4LjEwMzEgMzYuNzk1M0M2Ny41ODk0IDM2LjYxNCA2Ni44NTY3IDM2LjQxIDY1LjkwNSAzNi4xODM0QzY0LjcxMTUgMzUuODk2NCA2My43NDQ2IDM1LjYwOTMgNjMuMDA0MyAzNS4zMjIzQzYyLjI3OTIgMzUuMDM1MyA2MS42NTIyIDM0LjU5NzEgNjEuMTIzNSAzNC4wMDhDNjAuNjA5OCAzMy40MDM3IDYwLjM1MyAzMi41OTU0IDYwLjM1MyAzMS41ODMyQzYwLjM1MyAzMC43MzcyIDYwLjU3MjEgMjkuOTc0MyA2MS4wMTAyIDI5LjI5NDVDNjEuNDYzNCAyOC42MTQ2IDYyLjE0MzIgMjguMDcwOCA2My4wNDk3IDI3LjY2MjlDNjMuOTU2MSAyNy4yNTUgNjUuMDgxNiAyNy4wNTEgNjYuNDI2MiAyNy4wNTFDNjcuMzYyOCAyNy4wNTEgNjguMjg0NCAyNy4xNzE5IDY5LjE5MDggMjcuNDEzNkM3MC4wOTcyIDI3LjY1NTMgNzAuODc1MyAyOC4wMDI4IDcxLjUyNDkgMjguNDU2TDcwLjc3NzEgMzAuMjY4OUM3MC4xMTIzIDI5Ljg0NTkgNjkuNDAyMyAyOS41Mjg2IDY4LjY0NjkgMjkuMzE3MUM2Ny44OTE2IDI5LjA5MDUgNjcuMTUxMyAyOC45NzcyIDY2LjQyNjIgMjguOTc3MkM2NS4xNDIgMjguOTc3MiA2NC4xNzUyIDI5LjIxMTQgNjMuNTI1NSAyOS42Nzk3QzYyLjg5MSAzMC4xNDggNjIuNTczOCAzMC43NTIzIDYyLjU3MzggMzEuNDkyNkM2Mi41NzM4IDMyLjAzNjQgNjIuNzU1MSAzMi40ODIxIDYzLjExNzcgMzIuODI5NkM2My40ODAyIDMzLjE2MTkgNjMuOTI1OSAzMy40MjYzIDY0LjQ1NDYgMzMuNjIyN0M2NC45OTg1IDMzLjgwNCA2NS43MzEyIDM0LjAwMDQgNjYuNjUyOCAzNC4yMTE5QzY3Ljg0NjIgMzQuNDk4OSA2OC44MDU2IDM0Ljc4NiA2OS41MzA3IDM1LjA3M0M3MC4yNTU5IDM1LjM2MDEgNzAuODc1MyAzNS43OTgyIDcxLjM4ODkgMzYuMzg3NEM3MS45MTc3IDM2Ljk3NjUgNzIuMTgyIDM3Ljc2OTcgNzIuMTgyIDM4Ljc2NjhDNzIuMTgyIDM5LjU5NzcgNzEuOTU1NCA0MC4zNjA2IDcxLjUwMjIgNDEuMDU1NUM3MS4wNDkgNDEuNzM1NCA3MC4zNjE2IDQyLjI3OTIgNjkuNDQwMSA0Mi42ODcxQzY4LjUxODUgNDMuMDc5OSA2Ny4zODU1IDQzLjI3NjMgNjYuMDQwOSA0My4yNzYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExMC43ODQgMzUuNTg1N0g5Ny4wNzQxQzk3LjE5ODcgMzcuMjg5MSA5Ny44NTMxIDM4LjY3MDUgOTkuMDM3MSAzOS43Mjk5QzEwMC4yMjEgNDAuNzY4NSAxMDEuNzE3IDQxLjI4NzggMTAzLjUyNCA0MS4yODc4QzEwNC41NDIgNDEuMjg3OCAxMDUuNDc3IDQxLjExMTIgMTA2LjMyOCA0MC43NTgxQzEwNy4xOCA0MC4zODQyIDEwNy45MTcgMzkuODQ0MSAxMDguNTQxIDM5LjEzNzhMMTA5Ljc4NyA0MC41NzExQzEwOS4wNiA0MS40NDM2IDEwOC4xNDYgNDIuMTA4MyAxMDcuMDQ1IDQyLjU2NTNDMTA1Ljk2NSA0My4wMjIzIDEwNC43NyA0My4yNTA4IDEwMy40NjIgNDMuMjUwOEMxMDEuNzc5IDQzLjI1MDggMTAwLjI4MyA0Mi44OTc3IDk4Ljk3NDggNDIuMTkxNEM5Ny42ODY5IDQxLjQ2NDQgOTYuNjc5NCA0MC40NjczIDk1Ljk1MjQgMzkuMjAwMkM5NS4yMjUzIDM3LjkzMyA5NC44NjE4IDM2LjQ5OTcgOTQuODYxOCAzNC45MDAyQzk0Ljg2MTggMzMuMzAwNyA5NS4yMDQ2IDMxLjg2NzQgOTUuODkgMzAuNjAwM0M5Ni41OTYzIDI5LjMzMzIgOTcuNTUxOSAyOC4zNDY1IDk4Ljc1NjcgMjcuNjQwMkM5OS45ODIyIDI2LjkzMzkgMTAxLjM1MyAyNi41ODA4IDEwMi44NyAyNi41ODA4QzEwNC4zODYgMjYuNTgwOCAxMDUuNzQ3IDI2LjkzMzkgMTA2Ljk1MSAyNy42NDAyQzEwOC4xNTYgMjguMzQ2NSAxMDkuMTAxIDI5LjMzMzIgMTA5Ljc4NyAzMC42MDAzQzExMC40NzIgMzEuODQ2NyAxMTAuODE1IDMzLjI4IDExMC44MTUgMzQuOTAwMkwxMTAuNzg0IDM1LjU4NTdaTTEwMi44NyAyOC40ODE1QzEwMS4yOTEgMjguNDgxNSA5OS45NjE1IDI4Ljk5MDQgOTguODgxMyAzMC4wMDgzQzk3LjgyMTkgMzEuMDA1NCA5Ny4yMTk1IDMyLjMxNCA5Ny4wNzQxIDMzLjkzNDNIMTA4LjY5NkMxMDguNTUxIDMyLjMxNCAxMDcuOTM4IDMxLjAwNTQgMTA2Ljg1OCAzMC4wMDgzQzEwNS43OTkgMjguOTkwNCAxMDQuNDY5IDI4LjQ4MTUgMTAyLjg3IDI4LjQ4MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI5LjU4OSAzNS41ODU3SDExNS44NzlDMTE2LjAwNCAzNy4yODkxIDExNi42NTggMzguNjcwNSAxMTcuODQyIDM5LjcyOTlDMTE5LjAyNiA0MC43Njg1IDEyMC41MjIgNDEuMjg3OCAxMjIuMzI5IDQxLjI4NzhDMTIzLjM0NyA0MS4yODc4IDEyNC4yODEgNDEuMTExMiAxMjUuMTMzIDQwLjc1ODFDMTI1Ljk4NSA0MC4zODQyIDEyNi43MjIgMzkuODQ0MSAxMjcuMzQ1IDM5LjEzNzhMMTI4LjU5MiA0MC41NzExQzEyNy44NjUgNDEuNDQzNiAxMjYuOTUxIDQyLjEwODMgMTI1Ljg1IDQyLjU2NTNDMTI0Ljc3IDQzLjAyMjMgMTIzLjU3NSA0My4yNTA4IDEyMi4yNjcgNDMuMjUwOEMxMjAuNTg0IDQzLjI1MDggMTE5LjA4OCA0Mi44OTc3IDExNy43OCA0Mi4xOTE0QzExNi40OTIgNDEuNDY0NCAxMTUuNDg0IDQwLjQ2NzMgMTE0Ljc1NyAzOS4yMDAyQzExNC4wMyAzNy45MzMgMTEzLjY2NyAzNi40OTk3IDExMy42NjcgMzQuOTAwMkMxMTMuNjY3IDMzLjMwMDcgMTE0LjAwOSAzMS44Njc0IDExNC42OTUgMzAuNjAwM0MxMTUuNDAxIDI5LjMzMzIgMTE2LjM1NyAyOC4zNDY1IDExNy41NjIgMjcuNjQwMkMxMTguNzg3IDI2LjkzMzkgMTIwLjE1OCAyNi41ODA4IDEyMS42NzQgMjYuNTgwOEMxMjMuMTkxIDI2LjU4MDggMTI0LjU1MSAyNi45MzM5IDEyNS43NTYgMjcuNjQwMkMxMjYuOTYxIDI4LjM0NjUgMTI3LjkwNiAyOS4zMzMyIDEyOC41OTIgMzAuNjAwM0MxMjkuMjc3IDMxLjg0NjcgMTI5LjYyIDMzLjI4IDEyOS42MiAzNC45MDAyTDEyOS41ODkgMzUuNTg1N1pNMTIxLjY3NCAyOC40ODE1QzEyMC4wOTYgMjguNDgxNSAxMTguNzY2IDI4Ljk5MDQgMTE3LjY4NiAzMC4wMDgzQzExNi42MjcgMzEuMDA1NCAxMTYuMDI0IDMyLjMxNCAxMTUuODc5IDMzLjkzNDNIMTI3LjUwMUMxMjcuMzU2IDMyLjMxNCAxMjYuNzQzIDMxLjAwNTQgMTI1LjY2MyAzMC4wMDgzQzEyNC42MDMgMjguOTkwNCAxMjMuMjc0IDI4LjQ4MTUgMTIxLjY3NCAyOC40ODE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0Ny4wNiAyNy4yMzIzVjQzLjA5NUgxNDUuMjAxTDEzNS42ODQgMzEuMjY2VjQzLjA5NUgxMzMuNDE4VjI3LjIzMjNIMTM1LjI3NkwxNDQuNzkzIDM5LjA2MTRWMjcuMjMyM0gxNDcuMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzUuNTgxMSAyNy4yMzI0SDc3Ljg0NzJWNDMuMDk1MUg3NS41ODExVjI3LjIzMjRaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik04NS43NDYxIDI5LjIwMzlIODAuMzA3NVYyNy4yMzI0SDkzLjQyODJWMjkuMjAzOUg4Ny45ODk1VjQzLjA5NTFIODUuNzQ2MVYyOS4yMDM5WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyOC43NDkxIiB5MT0iNTkuNTQ1NCIgeDI9IjQwLjAyMTUiIHkyPSI1LjQwNDQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFNjAwN0UiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjM5MjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUxLjA1OCIgeTE9IjI3LjI2NCIgeDI9IjUyLjkyMjEiIHkyPSIxOC4zMTA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOTRFMUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjIxNzkiIHN0b3AtY29sb3I9IiNFQzY1MTIiLz4KPHN0b3Agb2Zmc2V0PSIwLjUxMTEiIHN0b3AtY29sb3I9IiNGMDdFMDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjc4IiBzdG9wLWNvbG9yPSIjRjI4RDAyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YzOTIwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI1LjY3Nzc0IiB5MT0iNjguODk0OSIgeDI9IjguMjU5OTUiIHkyPSI1Ni40OTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyOTIzNUMiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2MzMiIHN0b3AtY29sb3I9IiM3RjFCM0EiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjExLjk2ODEiIHkxPSI1Ny4yNjQ3IiB4Mj0iMTUuOTA0MSIgeTI9IjM4LjM2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI5MjM1QyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDg0Njc2NiIgc3RvcC1jb2xvcj0iIzQ3MjA1MCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjQzNiIgc3RvcC1jb2xvcj0iIzdBMUMzQyIvPgo8c3RvcCBvZmZzZXQ9IjAuMzgyNCIgc3RvcC1jb2xvcj0iIzlGMTkyRSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDk0MiIgc3RvcC1jb2xvcj0iI0I2MTcyNSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTY1IiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjxzdG9wIG9mZnNldD0iMC42NjQ3IiBzdG9wLWNvbG9yPSIjQ0EwRjNGIi8+CjxzdG9wIG9mZnNldD0iMC44MDY2IiBzdG9wLWNvbG9yPSIjRDkwNzYxIi8+CjxzdG9wIG9mZnNldD0iMC45MjM1IiBzdG9wLWNvbG9yPSIjRTMwMjc2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2MDA3RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXIiIHgxPSI4My44MjM3IiB5MT0iMjAuNDM0MSIgeDI9IjgzLjgyMzciIHkyPSI0OC43NjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUE5NEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREQ0MjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhciIgeDE9IjgzLjgyMzciIHkxPSIyMC40MzQxIiB4Mj0iODMuODIzNyIgeTI9IjQ4Ljc2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQTk0QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERDQyNDIiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNDcuMDYiIGhlaWdodD0iNzcuMDAwMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "G4Q/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__3-3nD"
};


/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
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
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "VXBr":
/***/ (function(module, exports) {

module.exports = require("hamburger-react");

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "YVQ8":
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "aZcP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("G4Q/");
/* harmony import */ var _styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import { Component } from 'react'



const Button = (_ref) => {
  let {
    max = "max-content",
    Icon = null,
    className,
    children = null
  } = _ref,
      props = _objectWithoutProperties(_ref, ["max", "Icon", "className", "children"]);

  const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_components_formElements_Button_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.btn, className);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", _objectSpread(_objectSpread({
    style: {
      maxWidth: max
    },
    className: classNames
  }, props), {}, {
    children: [children && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      children: children
    }), Icon && Icon]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

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

/***/ "cP3f":
/***/ (function(module, exports) {



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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "nextjs-progressbar"
var external_nextjs_progressbar_ = __webpack_require__("YVQ8");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/formElements/Button.tsx
var Button = __webpack_require__("aZcP");

// EXTERNAL MODULE: ./styles/components/Layout.module.sass
var Layout_module = __webpack_require__("opiH");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: external "hamburger-react"
var external_hamburger_react_ = __webpack_require__("VXBr");
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_);

// EXTERNAL MODULE: ./images/logo_nav.svg
var logo_nav = __webpack_require__("4RUv");
var logo_nav_default = /*#__PURE__*/__webpack_require__.n(logo_nav);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Layout.tsx














const Layout = ({
  children
}) => {
  const {
    0: isHamburgerOpen,
    1: setHamburgerOpen
  } = Object(external_react_["useState"])(false);

  const hamburgerDependencies = () => {
    isHamburgerOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
  };

  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  Object(external_react_["useEffect"])(() => {
    hamburgerDependencies();
  }, [hamburgerDependencies]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Layout_module_default.a.layout_wrap,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: Layout_module_default.a.navigation_bar,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Layout_module_default.a.navigation_bar_wrap,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              onClick: () => {
                document.body.scrollTop = 0;
              },
              className: Layout_module_default.a.logo_link,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: logo_nav_default.a,
                alt: "Siteen"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: Layout_module_default.a.nav_menu,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/#our_services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Services"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/#cases_section",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Cases"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/#contact_us",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Contact us"
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: Layout_module_default.a.nav_tel,
            href: "tel:0971630202",
            children: "+38 (097) 163 02 02"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/#contact_us",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                className: Layout_module_default.a.get_brif,
                children: "Get a Brif"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Layout_module_default.a.hamburger_wrap_hamburger,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_hamburger_react_default.a, {
              toggled: isHamburgerOpen,
              toggle: setHamburgerOpen
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("aside", {
      className: isHamburgerOpen ? `${Layout_module_default.a.aside_bar} ${Layout_module_default.a.aside_bar_transparent}` : Layout_module_default.a.aside_bar,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Layout_module_default.a.hamburger_wrap,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_hamburger_react_default.a, {
          toggled: isHamburgerOpen,
          toggle: setHamburgerOpen
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: isHamburgerOpen ? `${Layout_module_default.a.social_link_aside_bar} ${Layout_module_default.a.element_hidden}` : Layout_module_default.a.social_link_aside_bar,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.facebook.com/siteen.co/",
          target: "_blank",
          children: "Facebook"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.instagram.com/siteen.co/",
          target: "_blank",
          children: "Instagram"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.linkedin.com/company/siteen/",
          target: "_blank",
          children: "Linkedin"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("article", {
      className: Layout_module_default.a.main_wrap_content,
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: isHamburgerOpen ? `${Layout_module_default.a.menu_opened} ${Layout_module_default.a.menu_opened_visible}` : Layout_module_default.a.menu_opened,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Layout_module_default.a.content_opened_wrap,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Layout_module_default.a.navigation_bar_wrap_opened,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: Layout_module_default.a.logo_link_opened,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: logo_nav_default.a,
                  alt: "Siteen"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: Layout_module_default.a.nav_tel,
              href: "tel:0971630202",
              children: "+38 (097) 163 02 02"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              className: Layout_module_default.a.get_brif,
              children: "Get a Brif"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Layout_module_default.a.hamburger_wrap_hamburger,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_hamburger_react_default.a, {
                toggled: isHamburgerOpen,
                toggle: setHamburgerOpen
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Layout_module_default.a.nav_menus_opened_wrap,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Layout_module_default.a.nav_menus_opened,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/#our_services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      onClick: closeHamburger,
                      children: "Our Services"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/about",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      onClick: closeHamburger,
                      children: "About Us"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/#contacts_section",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      onClick: closeHamburger,
                      children: "Contacts"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/#cases_section",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      onClick: closeHamburger,
                      children: "Our Projects"
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            className: Layout_module_default.a.get_brif_hamburger,
            children: "Get a Brif"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: Layout_module_default.a.nav_tel_hamburger,
            href: "tel:0971630202",
            children: "+38 (097) 163 02 02"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Layout_module_default.a.social_link_mobile,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaInstagram"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaFacebookSquare"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaLinkedin"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaTelegram"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaYoutube"], {})
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Layout_module_default.a.social_link_aside_bar_opened,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.facebook.com/siteen.co/",
              target: "_blank",
              children: "Facebook"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.instagram.com/siteen.co/",
              target: "_blank",
              children: "Instagram"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.linkedin.com/company/siteen/",
              target: "_blank",
              children: "Linkedin"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./styles/globals.sass
var globals = __webpack_require__("cP3f");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_toastify_["ToastContainer"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_nextjs_progressbar_default.a, {
      color: "#FAAA4C",
      startPosition: 0.3,
      stopDelayMs: 200,
      height: 3
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Layout, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

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
} // tslint:disable:no-console


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
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
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

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _styles_globals_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.sass */ \"./styles/globals.sass\");\n/* harmony import */ var _styles_globals_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/frontend/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"ToastContainer\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      color: \"#FAAA4C\",\n      startPosition: 0.3,\n      stopDelayMs: 200,\n      height: 3\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyx5REFBRDtBQUNFLFdBQUssRUFBQyxTQURSO0FBRUUsbUJBQWEsRUFBRSxHQUZqQjtBQUdFLGlCQUFXLEVBQUUsR0FIZjtBQUlFLFlBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVFFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUFjRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zYXNzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICA8TmV4dE5wcm9ncmVzc1xuICAgICAgICBjb2xvcj1cIiNGQUFBNENcIlxuICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XG4gICAgICAgIHN0b3BEZWxheU1zPXsyMDB9XG4gICAgICAgIGhlaWdodD17M31cbiAgICAgIC8+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");
=======
>>>>>>> 5cebc10dde807935a44af37dda0386e9c52b093d


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

/***/ "opiH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout_wrap": "Layout_layout_wrap__2d2ZU",
	"aside_bar": "Layout_aside_bar__YKxRu",
	"aside_bar_transparent": "Layout_aside_bar_transparent__3OJXc",
	"hamburger_wrap": "Layout_hamburger_wrap__2rSW8",
	"menu_opened": "Layout_menu_opened__3sRHL",
	"content_opened_wrap": "Layout_content_opened_wrap__1LnYP",
	"menu_opened_visible": "Layout_menu_opened_visible__1EGXp",
	"navigation_bar": "Layout_navigation_bar__2jTQo",
	"navigation_bar_wrap": "Layout_navigation_bar_wrap__2l0Us",
	"navigation_bar_wrap_opened": "Layout_navigation_bar_wrap_opened__DXoVj",
	"logo_link": "Layout_logo_link__3J-lL",
	"logo_link_opened": "Layout_logo_link_opened__3mafS",
	"main_wrap_content": "Layout_main_wrap_content__1c3ao",
	"social_link_aside_bar": "Layout_social_link_aside_bar__p_86a",
	"social_link_aside_bar_opened": "Layout_social_link_aside_bar_opened__2O2dG",
	"element_hidden": "Layout_element_hidden__13hia",
	"lang_toggler": "Layout_lang_toggler__jDWk_",
	"nav_menu": "Layout_nav_menu__BaRHv",
	"nav_tel": "Layout_nav_tel__35vSu",
	"nav_menus_opened_wrap": "Layout_nav_menus_opened_wrap__1JB6N",
	"nav_menus_opened": "Layout_nav_menus_opened__2URT7",
	"get_brif_hamburger": "Layout_get_brif_hamburger__2VgQT",
	"nav_tel_hamburger": "Layout_nav_tel_hamburger__2Y9c0",
	"social_link_mobile": "Layout_social_link_mobile__1oc8V",
	"hamburger_wrap_hamburger": "Layout_hamburger_wrap_hamburger__3rWio",
	"get_brif": "Layout_get_brif__2eypx"
};


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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });