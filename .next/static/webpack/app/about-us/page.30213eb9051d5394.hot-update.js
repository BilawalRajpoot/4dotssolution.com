"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about-us/page",{

/***/ "(app-pages-browser)/./components/home-digital-agency/Portfolio.jsx":
/*!******************************************************!*\
  !*** ./components/home-digital-agency/Portfolio.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Industries() {\n    const industries = [\n        {\n            id: \"industry-1\",\n            title: \"Healthcare\",\n            description: \"Innovative digital solutions for hospitals, clinics, and healthcare providers.\",\n            img: \"/assets/imgs/industries/healthcare.jpg\"\n        },\n        {\n            id: \"industry-2\",\n            title: \"Finance\",\n            description: \"Secure and scalable financial technology for banking and investment firms.\",\n            img: \"/assets/imgs/industries/finance.jpg\"\n        },\n        {\n            id: \"industry-3\",\n            title: \"Retail\",\n            description: \"Transforming retail experiences with cutting-edge e-commerce platforms.\",\n            img: \"/assets/imgs/industries/retail.jpg\"\n        },\n        {\n            id: \"industry-4\",\n            title: \"Education\",\n            description: \"Empowering educators with modern e-learning tools and platforms.\",\n            img: \"/assets/imgs/industries/education.jpg\"\n        },\n        {\n            id: \"industry-5\",\n            title: \"Manufacturing\",\n            description: \"Streamlining production processes with smart manufacturing solutions.\",\n            img: \"/assets/imgs/industries/manufacturing.jpg\"\n        }\n    ];\n    function handleMouseEnter(event) {\n        const industry_id = event.currentTarget.getAttribute(\"data-industry\");\n        document.querySelectorAll(\".glry-img .industry-img\").forEach((el)=>{\n            el.classList.remove(\"current\");\n        });\n        document.querySelectorAll(\".content .cluom\").forEach((el)=>{\n            el.classList.remove(\"current\");\n        });\n        document.querySelector(\"#\".concat(industry_id)).classList.add(\"current\");\n        if (!event.currentTarget.classList.contains(\"current\")) {\n            event.currentTarget.classList.add(\"current\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"industries-tab crev section-padding sub-bg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sec-head mb-80\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title main-color mb-5\",\n                                        children: \"Industries We Serve\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"fw-600 fz-50 text-u d-rotate wow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"rotate-text\",\n                                            children: [\n                                                \"Our \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"fw-200\",\n                                                    children: \"Clients.\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto vi-more\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/industries\",\n                                        className: \"butn butn-sm butn-bord radius-30\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"View All\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon ti-arrow-top-right\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row lg-marg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-lg-6 d-flex align-items-center justify-content-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"glry-img md-mb50\",\n                                children: [\n                                    industries.map((industry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: industry.id,\n                                            className: \"industry-img \".concat(industry.id === \"industry-1\" ? \"current\" : \"\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: industry.img,\n                                                alt: industry.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, industry.id, false, {\n                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"circle-blur\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/assets/imgs/patterns/blur1.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-lg-6 content valign\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"full-width\",\n                                children: industries.map((industry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onMouseEnter: handleMouseEnter,\n                                        className: \"cluom mb-40 \".concat(industry.id === \"industry-1\" ? \"current\" : \"\"),\n                                        \"data-industry\": industry.id,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"info d-flex align-items-end\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"mr-10 fz-16\",\n                                                            children: [\n                                                                industries.indexOf(industry) + 1 < 10 ? \"0\".concat(industries.indexOf(industry) + 1) : industries.indexOf(industry) + 1,\n                                                                \".\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"/industry-details\",\n                                                            children: industry.title\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                            lineNumber: 110,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                    className: \"sub-title p-color ml-20\",\n                                                    children: industry.description\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, industry.id, false, {\n                                        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\webfolio-nextjs\\\\components\\\\home-digital-agency\\\\Portfolio.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c = Industries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Industries);\nvar _c;\n$RefreshReg$(_c, \"Industries\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS1kaWdpdGFsLWFnZW5jeS9Qb3J0Zm9saW8uanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBCO0FBRTFCLFNBQVNDO0lBQ1AsTUFBTUMsYUFBYTtRQUNqQjtZQUNFQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1FBQ1A7S0FDRDtJQUVELFNBQVNDLGlCQUFpQkMsS0FBSztRQUM3QixNQUFNQyxjQUFjRCxNQUFNRSxhQUFhLENBQUNDLFlBQVksQ0FBQztRQUVyREMsU0FBU0MsZ0JBQWdCLENBQUMsMkJBQTJCQyxPQUFPLENBQUMsQ0FBQ0M7WUFDNURBLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3RCO1FBQ0FMLFNBQVNDLGdCQUFnQixDQUFDLG1CQUFtQkMsT0FBTyxDQUFDLENBQUNDO1lBQ3BEQSxHQUFHQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUN0QjtRQUVBTCxTQUFTTSxhQUFhLENBQUMsSUFBZ0IsT0FBWlQsY0FBZU8sU0FBUyxDQUFDRyxHQUFHLENBQUM7UUFFeEQsSUFBSSxDQUFDWCxNQUFNRSxhQUFhLENBQUNNLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDLFlBQVk7WUFDdERaLE1BQU1FLGFBQWEsQ0FBQ00sU0FBUyxDQUFDRyxHQUFHLENBQUM7UUFDcEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDOztrREFDQyw4REFBQ0M7d0NBQUtGLFdBQVU7a0RBQTRCOzs7Ozs7a0RBQzVDLDhEQUFDRzt3Q0FBR0gsV0FBVTtrREFDWiw0RUFBQ0U7NENBQUtGLFdBQVU7O2dEQUFjOzhEQUN4Qiw4REFBQ0U7b0RBQUtGLFdBQVU7OERBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUluQyw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FDQ0MsTUFBSzt3Q0FDTEwsV0FBVTtrREFFViw0RUFBQ0U7c0RBQUs7Ozs7Ozs7Ozs7O2tEQUVSLDhEQUFDQTt3Q0FBS0YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXRCLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7b0NBQ1pwQixXQUFXMEIsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDTjs0Q0FFQ3BCLElBQUkwQixTQUFTMUIsRUFBRTs0Q0FDZm1CLFdBQVcsZ0JBQThELE9BQTlDTyxTQUFTMUIsRUFBRSxLQUFLLGVBQWUsWUFBWTtzREFFdEUsNEVBQUNHO2dEQUFJd0IsS0FBS0QsU0FBU3ZCLEdBQUc7Z0RBQUV5QixLQUFLRixTQUFTekIsS0FBSzs7Ozs7OzJDQUp0Q3lCLFNBQVMxQixFQUFFOzs7OztrREFPcEIsOERBQUNvQjt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQ2hCOzRDQUFJd0IsS0FBSTs0Q0FBa0NDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXJELDhEQUFDUjs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7MENBQ1pwQixXQUFXMEIsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDTjt3Q0FFQ1MsY0FBY3pCO3dDQUNkZSxXQUFXLGVBQTZELE9BQTlDTyxTQUFTMUIsRUFBRSxLQUFLLGVBQWUsWUFBWTt3Q0FDckU4QixpQkFBZUosU0FBUzFCLEVBQUU7a0RBRTFCLDRFQUFDb0I7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDWTs7c0VBQ0MsOERBQUNWOzREQUFLRixXQUFVOztnRUFDYnBCLFdBQVdpQyxPQUFPLENBQUNOLFlBQVksSUFBSSxLQUFLLElBQXFDLE9BQWpDM0IsV0FBV2lDLE9BQU8sQ0FBQ04sWUFBWSxLQUFNM0IsV0FBV2lDLE9BQU8sQ0FBQ04sWUFBWTtnRUFBRTs7Ozs7Ozt3REFDN0c7c0VBQ1IsOERBQUNIOzREQUFFQyxNQUFLO3NFQUFxQkUsU0FBU3pCLEtBQUs7Ozs7Ozs7Ozs7Ozs4REFFN0MsOERBQUNnQztvREFBR2QsV0FBVTs4REFBMkJPLFNBQVN4QixXQUFXOzs7Ozs7Ozs7Ozs7dUNBWjFEd0IsU0FBUzFCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JsQztLQXRIU0Y7QUF3SFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWRpZ2l0YWwtYWdlbmN5L1BvcnRmb2xpby5qc3g/Njc2YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJbmR1c3RyaWVzKCkge1xyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnaW5kdXN0cnktMScsXHJcbiAgICAgIHRpdGxlOiAnSGVhbHRoY2FyZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSW5ub3ZhdGl2ZSBkaWdpdGFsIHNvbHV0aW9ucyBmb3IgaG9zcGl0YWxzLCBjbGluaWNzLCBhbmQgaGVhbHRoY2FyZSBwcm92aWRlcnMuJyxcclxuICAgICAgaW1nOiAnL2Fzc2V0cy9pbWdzL2luZHVzdHJpZXMvaGVhbHRoY2FyZS5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdpbmR1c3RyeS0yJyxcclxuICAgICAgdGl0bGU6ICdGaW5hbmNlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTZWN1cmUgYW5kIHNjYWxhYmxlIGZpbmFuY2lhbCB0ZWNobm9sb2d5IGZvciBiYW5raW5nIGFuZCBpbnZlc3RtZW50IGZpcm1zLicsXHJcbiAgICAgIGltZzogJy9hc3NldHMvaW1ncy9pbmR1c3RyaWVzL2ZpbmFuY2UuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnaW5kdXN0cnktMycsXHJcbiAgICAgIHRpdGxlOiAnUmV0YWlsJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdUcmFuc2Zvcm1pbmcgcmV0YWlsIGV4cGVyaWVuY2VzIHdpdGggY3V0dGluZy1lZGdlIGUtY29tbWVyY2UgcGxhdGZvcm1zLicsXHJcbiAgICAgIGltZzogJy9hc3NldHMvaW1ncy9pbmR1c3RyaWVzL3JldGFpbC5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdpbmR1c3RyeS00JyxcclxuICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0VtcG93ZXJpbmcgZWR1Y2F0b3JzIHdpdGggbW9kZXJuIGUtbGVhcm5pbmcgdG9vbHMgYW5kIHBsYXRmb3Jtcy4nLFxyXG4gICAgICBpbWc6ICcvYXNzZXRzL2ltZ3MvaW5kdXN0cmllcy9lZHVjYXRpb24uanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnaW5kdXN0cnktNScsXHJcbiAgICAgIHRpdGxlOiAnTWFudWZhY3R1cmluZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtbGluaW5nIHByb2R1Y3Rpb24gcHJvY2Vzc2VzIHdpdGggc21hcnQgbWFudWZhY3R1cmluZyBzb2x1dGlvbnMuJyxcclxuICAgICAgaW1nOiAnL2Fzc2V0cy9pbWdzL2luZHVzdHJpZXMvbWFudWZhY3R1cmluZy5qcGcnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbmR1c3RyeV9pZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZHVzdHJ5Jyk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdscnktaW1nIC5pbmR1c3RyeS1pbWcnKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50IC5jbHVvbScpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2luZHVzdHJ5X2lkfWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuXHJcbiAgICBpZiAoIWV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5kdXN0cmllcy10YWIgY3JldiBzZWN0aW9uLXBhZGRpbmcgc3ViLWJnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtaGVhZCBtYi04MFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlIG1haW4tY29sb3IgbWItNVwiPkluZHVzdHJpZXMgV2UgU2VydmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTYwMCBmei01MCB0ZXh0LXUgZC1yb3RhdGUgd293XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3RhdGUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBPdXIgPHNwYW4gY2xhc3NOYW1lPVwiZnctMjAwXCI+Q2xpZW50cy48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byB2aS1tb3JlXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvaW5kdXN0cmllc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXRuIGJ1dG4tc20gYnV0bi1ib3JkIHJhZGl1cy0zMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VmlldyBBbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gdGktYXJyb3ctdG9wLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxnLW1hcmdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xyeS1pbWcgbWQtbWI1MFwiPlxyXG4gICAgICAgICAgICAgIHtpbmR1c3RyaWVzLm1hcCgoaW5kdXN0cnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmR1c3RyeS5pZH1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2luZHVzdHJ5LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbmR1c3RyeS1pbWcgJHtpbmR1c3RyeS5pZCA9PT0gJ2luZHVzdHJ5LTEnID8gJ2N1cnJlbnQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2luZHVzdHJ5LmltZ30gYWx0PXtpbmR1c3RyeS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJsdXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWdzL3BhdHRlcm5zL2JsdXIxLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbnRlbnQgdmFsaWduXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgIHtpbmR1c3RyaWVzLm1hcCgoaW5kdXN0cnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmR1c3RyeS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjbHVvbSBtYi00MCAke2luZHVzdHJ5LmlkID09PSAnaW5kdXN0cnktMScgPyAnY3VycmVudCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWluZHVzdHJ5PXtpbmR1c3RyeS5pZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMCBmei0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kdXN0cmllcy5pbmRleE9mKGluZHVzdHJ5KSArIDEgPCAxMCA/IGAwJHtpbmR1c3RyaWVzLmluZGV4T2YoaW5kdXN0cnkpICsgMX1gIDogaW5kdXN0cmllcy5pbmRleE9mKGluZHVzdHJ5KSArIDF9LlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2luZHVzdHJ5LWRldGFpbHNcIj57aW5kdXN0cnkudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Yi10aXRsZSBwLWNvbG9yIG1sLTIwXCI+e2luZHVzdHJ5LmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZHVzdHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkluZHVzdHJpZXMiLCJpbmR1c3RyaWVzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaGFuZGxlTW91c2VFbnRlciIsImV2ZW50IiwiaW5kdXN0cnlfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsImFkZCIsImNvbnRhaW5zIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJoMyIsImEiLCJocmVmIiwibWFwIiwiaW5kdXN0cnkiLCJzcmMiLCJhbHQiLCJvbk1vdXNlRW50ZXIiLCJkYXRhLWluZHVzdHJ5IiwiaDQiLCJpbmRleE9mIiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home-digital-agency/Portfolio.jsx\n"));

/***/ })

});