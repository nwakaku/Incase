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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var ref8, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        console.log(myNFTs);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    getMyNFTs();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref7;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        // getMyNFTs();\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref7 = myNFTs.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref8 = myNFTs.token) === null || ref8 === void 0 ? void 0 : ref8.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFkQSxDQUFBQSxJQUFjLEdBQWRBLE1BQU0sQ0FBRXFCLE1BQU0sY0FBZHJCLElBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxJQUFjLENBQUVzQixRQUFRLEVBQUU7Ozs7O29DQUN4QjswQ0FFUCw4REFBQ08sSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLHFCQUFxQjswQ0FDaEMxQixNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLElBQWUsR0FBZkEsTUFBTSxDQUFFdUIsT0FBTyxjQUFmdkIsSUFBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLElBQWUsQ0FBRXNCLFFBQVEsRUFBRTs7Ozs7b0NBQ3pCOzBDQUNMLDhEQUFDTyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUFFdEIsU0FBUzs7Ozs7b0NBQU07MENBQ3BELDhEQUFDOEIsUUFBTTtnQ0FDTFIsU0FBUyxFQUFDLGdHQUFnRztnQ0FDMUdTLE9BQU8sRUFBRTsyQ0FBTUMsWUFBWSxFQUFFO2lDQUFBOzBDQUM5QixHQUVEOzs7OztvQ0FBUzs7Ozs7OzRCQUNMOzs7Ozt3QkFDRDs7Ozs7O2dCQUNIO3FCQUVQLENBQ0g7Q0FDSDtHQTlFUXJDLEtBQUs7O1FBQ3FCUCw2Q0FBVTs7O0FBRHBDTyxLQUFBQSxLQUFLO0FBZ0ZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RDlDNDJiMEVkM0UyRDUxNDJmY2Y0RTUzMzY0OTk3ZWU4OTA4RkNlRFwiO1xuY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCIweDQyZThkMUJCQjYxM2RjNjNBNmZEYkYzOUIwYjAxNkU3OGRGNEU0ZjZcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgW215TkZUcywgc2V0TXlORlRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rva2VuVHlwZSwgc2V0VG9rZW5UeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QmVuZWZpY2lhcnlMZWdhY2llcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZnRzKTtcbiAgICAgICAgc2V0TXlORlRzKG5mdHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhteU5GVHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgTkZUczogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZ2V0TXlORlRzKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRNeU5GVHMoKTtcbiAgLy8gfSwgW2FkZHJlc3MsIGlzQ29ubmVjdGVkXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYExlZ2FjeU5GVHNbJHtuZnRJZH1dOiAke2RhdGE/LnRvU3RyaW5nKCl9YClcbiAgICAvLyBnZXRNeU5GVHMoKTtcbiAgICBjb25zdCBhbW91bnQgPSBteU5GVHM/LmFtb3VudD8udG9TdHJpbmcoKTtcbiAgICBjb25zdCB0b2tlbklkID0gbXlORlRzPy50b2tlbklkPy50b051bWJlcigpO1xuICAgIGlmICh0b2tlbklkID09IDApIHNldFRva2VuVHlwZShcIkVSQzIwXCIpO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkM3MjFcIik7XG4gICAgICBlbHNlIHNldFRva2VuVHlwZShcIkVSQzExNTVcIik7XG4gICAgfVxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy50b2tlbj8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihteU5GVHM/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7bXlORlRzPy5hbW91bnQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bXlORlRzPy50b2tlbklkPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJldGhlcnMiLCJjb250cmFjdEFiaSIsIkhlYWRlciIsImNvbnRyYWN0QWRkcmVzcyIsImJlbmVmaWNpYXJ5QWRkcmVzcyIsIkluZGV4IiwibXlORlRzIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwic2V0TXlORlRzIiwidG9rZW5UeXBlIiwic2V0VG9rZW5UeXBlIiwiZ2V0TXlORlRzIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsIm5mdHMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0QmVuZWZpY2lhcnlMZWdhY2llcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFtb3VudCIsInRvU3RyaW5nIiwidG9rZW5JZCIsInRvTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJtYWluIiwiaDMiLCJ0b2tlbiIsImJlbmVmaWNpYXJ5IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVMZWdhY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});