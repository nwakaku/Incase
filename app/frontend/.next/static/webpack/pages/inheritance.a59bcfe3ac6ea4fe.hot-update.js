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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nfunction Index() {\n    var ref8, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    // Check If any Beneficiaries\n    var data = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useContractRead)(_objectSpread({}, contractConfig, {\n        functionName: \"getBeneficiaryLegacies\",\n        args: [\n            nftId\n        ]\n    })).data;\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    getMyNFTs();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref7;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        // getMyNFTs();\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref7 = myNFTs.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref8 = myNFTs.token) === null || ref8 === void 0 ? void 0 : ref8.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"tqFfNeIWPcGGuDN4/aQo81j2GGU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useContractRead\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFTCw4REFBQ08sSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLHFCQUFxQjswQ0FDaEMvQixNQUFNLGFBQU5BLE1BQU0sV0FBUSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUFBLElBQWMsR0FBZEEsTUFBTSxDQUFFMEIsTUFBTSxjQUFkMUIsSUFBYyxjQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQWMsQ0FBRTJCLFFBQVEsRUFBRTs7Ozs7b0NBQ3hCOzBDQUVQLDhEQUFDTyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUNoQy9CLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsSUFBZSxHQUFmQSxNQUFNLENBQUU0QixPQUFPLGNBQWY1QixJQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsSUFBZSxDQUFFMkIsUUFBUSxFQUFFOzs7OztvQ0FDekI7MENBQ0wsOERBQUNPLElBQUU7Z0NBQUNILFNBQVMsRUFBQyxxQkFBcUI7MENBQUUzQixTQUFTOzs7OztvQ0FBTTswQ0FDcEQsOERBQUNtQyxRQUFNO2dDQUNMUixTQUFTLEVBQUMsZ0dBQWdHO2dDQUMxR1MsT0FBTyxFQUFFOzJDQUFNQyxZQUFZLEVBQUU7aUNBQUE7MENBQzlCLEdBRUQ7Ozs7O29DQUFTOzs7Ozs7NEJBQ0w7Ozs7O3dCQUNEOzs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBcEZRMUMsS0FBSzs7UUFDcUJOLDZDQUFVO1FBSzFCQyxrREFBZTs7O0FBTnpCSyxLQUFBQSxLQUFLO0FBc0ZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RDlDNDJiMEVkM0UyRDUxNDJmY2Y0RTUzMzY0OTk3ZWU4OTA4RkNlRFwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gQ2hlY2sgSWYgYW55IEJlbmVmaWNpYXJpZXNcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250cmFjdFJlYWQoe1xuICAgIC4uLmNvbnRyYWN0Q29uZmlnLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzXCIsXG4gICAgYXJnczogW25mdElkXSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5mdHMpO1xuICAgICAgICBzZXRNeU5GVHMobmZ0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBnZXRNeU5GVHMoKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldE15TkZUcygpO1xuICAvLyB9LCBbYWRkcmVzcywgaXNDb25uZWN0ZWRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgTGVnYWN5TkZUc1ske25mdElkfV06ICR7ZGF0YT8udG9TdHJpbmcoKX1gKVxuICAgIC8vIGdldE15TkZUcygpO1xuICAgIGNvbnN0IGFtb3VudCA9IG15TkZUcz8uYW1vdW50Py50b1N0cmluZygpO1xuICAgIGNvbnN0IHRva2VuSWQgPSBteU5GVHM/LnRva2VuSWQ/LnRvTnVtYmVyKCk7XG4gICAgaWYgKHRva2VuSWQgPT0gMCkgc2V0VG9rZW5UeXBlKFwiRVJDMjBcIik7XG4gICAgZWxzZSB7XG4gICAgICBpZiAoYW1vdW50ID09IDApIHNldFRva2VuVHlwZShcIkVSQzcyMVwiKTtcbiAgICAgIGVsc2Ugc2V0VG9rZW5UeXBlKFwiRVJDMTE1NVwiKTtcbiAgICB9XG4gIH0sIFtteU5GVHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntteU5GVHM/LnRva2VuPy50b1N0cmluZygpfTwvaDM+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntteU5GVHM/LmJlbmVmaWNpYXJ5Py50b1N0cmluZygpfTwvaDM+XG4gICAgICAgICAgICAgIHt0b2tlblR5cGUgPT0gXCJFUkMyMFwiID8gKFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKG15TkZUcz8uYW1vdW50KS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtteU5GVHM/LmFtb3VudD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtteU5GVHM/LnRva2VuSWQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+e3Rva2VuVHlwZX08L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsYWNrIGhvdmVyOmJnLXJlZC01MDAgdGV4dC1ib2xkIHJvdW5kZWQtZnVsbCBweC02IHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlTGVnYWN5KCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsImV0aGVycyIsImNvbnRyYWN0QWJpIiwiSGVhZGVyIiwiY29udHJhY3RBZGRyZXNzIiwiSW5kZXgiLCJteU5GVHMiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJzZXRNeU5GVHMiLCJ0b2tlblR5cGUiLCJzZXRUb2tlblR5cGUiLCJkYXRhIiwiY29udHJhY3RDb25maWciLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwibmZ0SWQiLCJnZXRNeU5GVHMiLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwibmZ0cyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYW1vdW50IiwidG9TdHJpbmciLCJ0b2tlbklkIiwidG9OdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJoMyIsInRva2VuIiwiYmVuZWZpY2lhcnkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUxlZ2FjeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});