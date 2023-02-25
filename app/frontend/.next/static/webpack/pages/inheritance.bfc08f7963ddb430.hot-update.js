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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    _s();\n    var ref3 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref3.address, isConnected = ref3.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref2;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        getMyNFTs();\n        setLegacy(data);\n        var amount = data === null || data === void 0 ? void 0 : (ref = data.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = data === null || data === void 0 ? void 0 : (ref2 = data.tokenId) === null || ref2 === void 0 ? void 0 : ref2.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return getMyNFTs();\n                            },\n                            children: \"see\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this),\n                        \"This is the section where inheritance will be displayed\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 53,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"b+s+1z7ejJfMIOxRhlJ8d0sEvxY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkUsOERBQUNHLFFBQU07NEJBQUNDLE9BQU8sRUFBRTt1Q0FBTTNCLFNBQVMsRUFBRTs2QkFBQTtzQ0FBRSxLQUFHOzs7OztnQ0FBUzt3QkFBQSx5REFFbEQ7Ozs7Ozt3QkFBTzs7Ozs7O2dCQUNIO3FCQUVILENBRUg7Q0FDSDtHQXZEUUwsS0FBSzs7UUFDcUJQLDZDQUFVOzs7QUFEcENPLEtBQUFBLEtBQUs7QUF5RGQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgIGNvbnRyYWN0QWJpIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhEOUM0MmIwRWQzRTJENTE0MmZjZjRFNTMzNjQ5OTdlZTg5MDhGQ2VEXCI7XG5jb25zdCBiZW5lZmljaWFyeUFkZHJlc3MgPSBcIjB4NDJlOGQxQkJCNjEzZGM2M0E2ZkRiRjM5QjBiMDE2RTc4ZEY0RTRmNlwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QmVuZWZpY2lhcnlMZWdhY2llcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZnRzKTtcbiAgICAgICAgc2V0TXlORlRzKG5mdHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgTkZUczogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRNeU5GVHMoKTtcbiAgLy8gfSwgW2FkZHJlc3MsIGlzQ29ubmVjdGVkXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYExlZ2FjeU5GVHNbJHtuZnRJZH1dOiAke2RhdGE/LnRvU3RyaW5nKCl9YClcbiAgICBnZXRNeU5GVHMoKTtcbiAgICBzZXRMZWdhY3koZGF0YSk7XG4gICAgY29uc3QgYW1vdW50ID0gZGF0YT8uYW1vdW50Py50b1N0cmluZygpO1xuICAgIGNvbnN0IHRva2VuSWQgPSBkYXRhPy50b2tlbklkPy50b051bWJlcigpO1xuICAgIGlmICh0b2tlbklkID09IDApIHNldFRva2VuVHlwZShcIkVSQzIwXCIpO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkM3MjFcIik7XG4gICAgICBlbHNlIHNldFRva2VuVHlwZShcIkVSQzExNTVcIik7XG4gICAgfVxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8aHI+PC9ocj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE15TkZUcygpfT5zZWU8L2J1dHRvbj5cbiAgICAgICAgVGhpcyBpcyB0aGUgc2VjdGlvbiB3aGVyZSBpbmhlcml0YW5jZSB3aWxsIGJlIGRpc3BsYXllZFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgIDwvPlxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJldGhlcnMiLCJjb250cmFjdEFiaSIsIkhlYWRlciIsImNvbnRyYWN0QWRkcmVzcyIsImJlbmVmaWNpYXJ5QWRkcmVzcyIsIkluZGV4IiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwibXlORlRzIiwic2V0TXlORlRzIiwiZ2V0TXlORlRzIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsIm5mdHMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0QmVuZWZpY2lhcnlMZWdhY2llcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRhdGEiLCJzZXRMZWdhY3kiLCJhbW91bnQiLCJ0b1N0cmluZyIsInRva2VuSWQiLCJ0b051bWJlciIsInNldFRva2VuVHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImhyIiwibWFpbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});