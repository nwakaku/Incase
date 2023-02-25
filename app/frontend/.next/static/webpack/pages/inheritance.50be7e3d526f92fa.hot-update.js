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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref3, provider, signer, contract, nfts, amount, tokenId;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 18;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 8;\n                        return contract.getBeneficiaryLegacies();\n                    case 8:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        amount = data === null || data === void 0 ? void 0 : (ref = data.amount) === null || ref === void 0 ? void 0 : ref.toString();\n                        tokenId = data === null || data === void 0 ? void 0 : (ref3 = data.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n                        if (tokenId == 0) setTokenType(\"ERC20\");\n                        else {\n                            if (amount == 0) setTokenType(\"ERC721\");\n                            else setTokenType(\"ERC1155\");\n                        }\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: myNFTs.map(function(legacy, index) {\n                        var ref, ref5, ref6, ref7;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, _this),\n                                tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center truncate\",\n                                    children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 19\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.amount) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref7 = legacy.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: tokenType\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                    onClick: function() {\n                                        return removeLegacy();\n                                    },\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxDQUFjLEdBQWRBLENBQUFBLElBQWMsR0FBZEEsTUFBTSxDQUFFbkIsTUFBTSxjQUFkbUIsSUFBYyxjQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQWMsQ0FBRVYsUUFBUSxFQUFFOzs7Ozt5Q0FDeEI7OENBRVAsOERBQUNZLElBQUU7b0NBQUNOLFNBQVMsRUFBQyxxQkFBcUI7OENBQ2hDSSxNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLElBQWUsR0FBZkEsTUFBTSxDQUFFbEIsT0FBTyxjQUFma0IsSUFBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLElBQWUsQ0FBRVYsUUFBUSxFQUFFOzs7Ozt5Q0FDekI7OENBQ0wsOERBQUNZLElBQUU7b0NBQUNOLFNBQVMsRUFBQyxxQkFBcUI7OENBQUV2QixTQUFTOzs7Ozt5Q0FBTTs4Q0FDcEQsOERBQUNrQyxRQUFNO29DQUNMWCxTQUFTLEVBQUMsZ0dBQWdHO29DQUMxR1ksT0FBTyxFQUFFOytDQUFNQyxZQUFZLEVBQUU7cUNBQUE7OENBQzlCLEdBRUQ7Ozs7O3lDQUFTOzs7Ozs7aUNBQ0w7cUJBQ1AsQ0FBQzs7Ozs7d0JBQ0c7Ozs7OztnQkFDSDtxQkFFUCxDQUNIO0NBQ0g7R0FoRlF6QyxLQUFLOztRQUNxQlAsNkNBQVU7OztBQURwQ08sS0FBQUEsS0FBSztBQWtGZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luaGVyaXRhbmNlL2luZGV4LmpzPzZhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyAgY29udHJhY3RBYmkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweEQ5QzQyYjBFZDNFMkQ1MTQyZmNmNEU1MzM2NDk5N2VlODkwOEZDZURcIjtcbmNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IFwiMHg0MmU4ZDFCQkI2MTNkYzYzQTZmRGJGMzlCMGIwMTZFNzhkRjRFNGY2XCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IFtteU5GVHMsIHNldE15TkZUc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2tlblR5cGUsIHNldFRva2VuVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBnZXRNeU5GVHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICBjb250cmFjdEFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldEJlbmVmaWNpYXJ5TGVnYWNpZXMoKTtcbiAgICAgICAgc2V0TXlORlRzKG5mdHMpO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBkYXRhPy5hbW91bnQ/LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHRva2VuSWQgPSBkYXRhPy50b2tlbklkPy50b051bWJlcigpO1xuICAgICAgICBpZiAodG9rZW5JZCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkMyMFwiKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkM3MjFcIik7XG4gICAgICAgICAgZWxzZSBzZXRUb2tlblR5cGUoXCJFUkMxMTU1XCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0TXlORlRzKCk7XG4gIC8vIH0sIFthZGRyZXNzLCBpc0Nvbm5lY3RlZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBMZWdhY3lORlRzWyR7bmZ0SWR9XTogJHtkYXRhPy50b1N0cmluZygpfWApXG4gICAgLy8gZ2V0TXlORlRzKCk7XG4gICAgZ2V0TXlORlRzKCk7XG4gICAgY29uc29sZS5sb2cobXlORlRzKVxuICAgIFxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIHtteU5GVHMubWFwKChsZWdhY3ksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntsZWdhY3k/LnRva2VuPy50b1N0cmluZygpfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobGVnYWN5Py5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7bGVnYWN5Py5hbW91bnQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtsZWdhY3k/LnRva2VuSWQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImdldE15TkZUcyIsImRhdGEiLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwibmZ0cyIsImFtb3VudCIsInRva2VuSWQiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0QmVuZWZpY2lhcnlMZWdhY2llcyIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJtYXAiLCJsZWdhY3kiLCJpbmRleCIsImgzIiwidG9rZW4iLCJiZW5lZmljaWFyeSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlTGVnYWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});