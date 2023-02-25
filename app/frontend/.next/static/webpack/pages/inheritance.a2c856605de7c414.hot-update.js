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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3;\n        // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: myNFTs.map(function(legacy, index) {\n                        var ref, ref5, ref6, ref7;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, _this),\n                                tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center truncate\",\n                                    children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.amount) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref7 = legacy.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: tokenType\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                    onClick: function() {\n                                        return removeLegacy();\n                                    },\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQWMsR0FBZEEsTUFBTSxDQUFFVCxNQUFNLGNBQWRTLElBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxJQUFjLENBQUVSLFFBQVEsRUFBRTs7Ozs7eUNBQ3hCOzhDQUVQLDhEQUFDVSxJQUFFO29DQUFDTixTQUFTLEVBQUMscUJBQXFCOzhDQUNoQ0ksTUFBTSxhQUFOQSxNQUFNLFdBQVMsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxJQUFlLEdBQWZBLE1BQU0sQ0FBRVAsT0FBTyxjQUFmTyxJQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsSUFBZSxDQUFFUixRQUFRLEVBQUU7Ozs7O3lDQUN6Qjs4Q0FDTCw4REFBQ1UsSUFBRTtvQ0FBQ04sU0FBUyxFQUFDLHFCQUFxQjs4Q0FBRXRCLFNBQVM7Ozs7O3lDQUFNOzhDQUNwRCw4REFBQ2lDLFFBQU07b0NBQ0xYLFNBQVMsRUFBQyxnR0FBZ0c7b0NBQzFHWSxPQUFPLEVBQUU7K0NBQU1DLFlBQVksRUFBRTtxQ0FBQTs4Q0FDOUIsR0FFRDs7Ozs7eUNBQVM7Ozs7OztpQ0FDTDtxQkFDUCxDQUFDOzs7Ozt3QkFDRzs7Ozs7O2dCQUNIO3FCQUVQLENBQ0g7Q0FDSDtHQWpGUXhDLEtBQUs7O1FBQ3FCUCw2Q0FBVTs7O0FBRHBDTyxLQUFBQSxLQUFLO0FBbUZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RDlDNDJiMEVkM0UyRDUxNDJmY2Y0RTUzMzY0OTk3ZWU4OTA4RkNlRFwiO1xuY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCIweDQyZThkMUJCQjYxM2RjNjNBNmZEYkYzOUIwYjAxNkU3OGRGNEU0ZjZcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgW215TkZUcywgc2V0TXlORlRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rva2VuVHlwZSwgc2V0VG9rZW5UeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QmVuZWZpY2lhcnlMZWdhY2llcygpO1xuICAgICAgICBzZXRNeU5GVHMobmZ0cyk7XG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgTkZUczogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldE15TkZUcygpO1xuICAvLyB9LCBbYWRkcmVzcywgaXNDb25uZWN0ZWRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgTGVnYWN5TkZUc1ske25mdElkfV06ICR7bmZ0cz8udG9TdHJpbmcoKX1gKVxuICAgIC8vIGdldE15TkZUcygpO1xuICAgIGdldE15TkZUcygpO1xuICAgIGNvbnNvbGUubG9nKG15TkZUcylcbiAgICBjb25zdCBhbW91bnQgPSBteU5GVHM/LmFtb3VudD8udG9TdHJpbmcoKTtcbiAgICBjb25zdCB0b2tlbklkID0gbXlORlRzPy50b2tlbklkPy50b051bWJlcigpO1xuICAgIGlmICh0b2tlbklkID09IDApIHNldFRva2VuVHlwZShcIkVSQzIwXCIpO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkM3MjFcIik7XG4gICAgICBlbHNlIHNldFRva2VuVHlwZShcIkVSQzExNTVcIik7XG4gICAgfVxuICAgIFxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIHtteU5GVHMubWFwKChsZWdhY3ksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntsZWdhY3k/LnRva2VuPy50b1N0cmluZygpfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobGVnYWN5Py5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7bGVnYWN5Py5hbW91bnQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtsZWdhY3k/LnRva2VuSWQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImdldE15TkZUcyIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJuZnRzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImdldEJlbmVmaWNpYXJ5TGVnYWNpZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJhbW91bnQiLCJ0b1N0cmluZyIsInRva2VuSWQiLCJ0b051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImhyIiwibWFpbiIsIm1hcCIsImxlZ2FjeSIsImluZGV4IiwiaDMiLCJ0b2tlbiIsImJlbmVmaWNpYXJ5IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVMZWdhY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});