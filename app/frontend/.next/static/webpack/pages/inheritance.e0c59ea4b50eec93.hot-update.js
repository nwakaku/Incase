"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/inheritance",{

/***/ "./pages/inheritance/index.js":
/*!************************************!*\
  !*** ./pages/inheritance/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"\";\nfunction Index() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref.address, isConnected = ref.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, provider);\n                        _ctx.next = 6;\n                        return contract.getBeneficiaryLegacies();\n                    case 6:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center grow mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return getMyNFTs();\n                        },\n                        children: \"see\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    \"This is the section where inheritance will be displayed\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"3OWfp0n/rbJgjskx0jrwLKDVclQ=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRUM7QUFDcEI7QUFDcUI7QUFDSjs7QUFFakQsSUFBTVEsZUFBZSxHQUFHLDRDQUE0QztBQUNwRSxJQUFNQyxrQkFBa0IsR0FBRyxFQUFFO0FBRTdCLFNBQVNDLEtBQUssR0FBRzs7SUFDZixJQUFpQ1AsR0FBWSxHQUFaQSxpREFBVSxFQUFFLEVBQXJDUSxPQUFPLEdBQWtCUixHQUFZLENBQXJDUSxPQUFPLEVBQUVDLFdBQVcsR0FBS1QsR0FBWSxDQUE1QlMsV0FBVztJQUM1QixJQUE0QlYsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVoxQyxNQVllLEdBQWVBLElBQVksR0FBM0IsRUFaZixTQVkwQixHQUFJQSxJQUFZLEdBQWhCO0lBRXhCLElBQU1hLFNBQVM7bUJBQUcsMExBQVk7Z0JBR2xCQyxRQUFRLEVBQ1JDLFFBQVEsRUFLUkMsSUFBSTs7Ozs0QkFSVk4sQ0FBQUEsV0FBVzs7Ozs7d0JBRUxJLFFBQVEsR0FBRyxJQUFJWCxpRUFBNkIsQ0FBQ2dCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7d0JBQzlETCxRQUFRLEdBQUcsSUFBSVosbURBQWUsQ0FDbENHLGVBQWUsRUFDZkYseURBQVcsRUFDWFUsUUFBUSxDQUNULENBQUM7OytCQUNpQkMsUUFBUSxDQUFDTyxzQkFBc0IsRUFBRTs7d0JBQTlDTixJQUFJLFlBQTBDO3dCQUNwRE8sT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksQ0FBQyxDQUFDO3dCQUNsQkosU0FBUyxDQUFDSSxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUVoQk8sT0FBTyxDQUFDRSxLQUFLLENBQUMsc0JBQXNCLFVBQVEsQ0FBQzs7Ozs7Ozs7Ozs7U0FHbEQ7d0JBaEJLWixTQUFTOzs7T0FnQmQ7SUFFRCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUU5QixxQkFDRSw4REFBQ2EsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzswQkFDckMsOERBQUN0QixzREFBTTs7OztvQkFBRzswQkFDViw4REFBQ3FCLEtBQUc7Ozs7b0JBQU87MEJBQ1gsOERBQUNFLElBQUU7Ozs7b0JBQU07MEJBQ1QsOERBQUNDLE1BQUk7Z0JBQUNGLFNBQVMsRUFBQyxxREFBcUQ7O2tDQUNuRSw4REFBQ0csUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNbEIsU0FBUyxFQUFFO3lCQUFBO2tDQUFFLEtBQUc7Ozs7OzRCQUFTO29CQUFBLHlEQUVsRDs7Ozs7O29CQUFPOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FyQ1FMLEtBQUs7O1FBQ3FCUCw2Q0FBVTs7O0FBRHBDTyxLQUFBQSxLQUFLO0FBdUNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RDlDNDJiMEVkM0UyRDUxNDJmY2Y0RTUzMzY0OTk3ZWU4OTA4RkNlRFwiO1xuY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCJcIlxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgcHJvdmlkZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldEJlbmVmaWNpYXJ5TGVnYWNpZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2cobmZ0cyk7XG4gICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIE5GVHM6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0TXlORlRzKCk7XG4gIC8vIH0sIFthZGRyZXNzLCBpc0Nvbm5lY3RlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRNeU5GVHMoKX0+c2VlPC9idXR0b24+XG4gICAgICAgIFRoaXMgaXMgdGhlIHNlY3Rpb24gd2hlcmUgaW5oZXJpdGFuY2Ugd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsImdldE15TkZUcyIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJuZnRzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJDb250cmFjdCIsImdldEJlbmVmaWNpYXJ5TGVnYWNpZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});