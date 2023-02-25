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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var ref7, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref6;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        getMyNFTs();\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref6 = myNFTs.tokenId) === null || ref6 === void 0 ? void 0 : ref6.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: my === null || my === void 0 ? void 0 : (ref7 = my.token) === null || ref7 === void 0 ? void 0 : ref7.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: my === null || my === void 0 ? void 0 : (ref1 = my.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(my === null || my === void 0 ? void 0 : my.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: my === null || my === void 0 ? void 0 : (ref2 = my.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: my === null || my === void 0 ? void 0 : (ref3 = my.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            isRemoveLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"fixed top-0 left-0 bottom-0 right-0 bg-black/[0.5] flex justify-center text-center z-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-white pt-2 pb-8 px-10 rounded-3xl h-fit text-black self-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \" text-xl font-bold p-5\",\n                                        children: \"Removing Legacy...\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"b+s+1z7ejJfMIOxRhlJ8d0sEvxY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFYQSxLQUFBQSxDQUFXLEdBQVhBLENBQUFBLElBQVcsR0FBWEEsRUFBRSxDQUFFc0IsT0FBTyxjQUFYdEIsSUFBVyxjQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQVcsQ0FBRXFCLFFBQVEsRUFBRTs7Ozs7b0NBQ3JCOzBDQUNMLDhEQUFDUSxJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUFFTSxTQUFTOzs7OztvQ0FBTTswQ0FDcEQsOERBQUNHLFFBQU07Z0NBQ0xULFNBQVMsRUFBQyxnR0FBZ0c7Z0NBQzFHVSxPQUFPLEVBQUU7MkNBQU1DLFlBQVksRUFBRTtpQ0FBQTswQ0FDOUIsR0FFRDs7Ozs7b0NBQVM7NEJBQ1JDLGVBQWUsa0JBQ2QsOERBQUNiLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx3RkFBd0Y7MENBQ3JHLDRFQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUVBQW1FOzhDQUNoRiw0RUFBQ2EsSUFBRTt3Q0FBQ2IsU0FBUyxFQUFDLHdCQUF3QjtrREFBQyxvQkFFdkM7Ozs7OzRDQUFLOzs7Ozt3Q0FDRDs7Ozs7b0NBQ0Y7Ozs7Ozs0QkFFSjs7Ozs7d0JBQ0Q7Ozs7OztnQkFDSDtxQkFFUCxDQUNIO0NBQ0g7R0FuRlEzQixLQUFLOztRQUNxQlAsNkNBQVU7OztBQURwQ08sS0FBQUEsS0FBSztBQXFGZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luaGVyaXRhbmNlL2luZGV4LmpzPzZhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyAgY29udHJhY3RBYmkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweEQ5QzQyYjBFZDNFMkQ1MTQyZmNmNEU1MzM2NDk5N2VlODkwOEZDZURcIjtcbmNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IFwiMHg0MmU4ZDFCQkI2MTNkYzYzQTZmRGJGMzlCMGIwMTZFNzhkRjRFNGY2XCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IFtteU5GVHMsIHNldE15TkZUc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5mdHMpO1xuICAgICAgICBzZXRNeU5GVHMobmZ0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldE15TkZUcygpO1xuICAvLyB9LCBbYWRkcmVzcywgaXNDb25uZWN0ZWRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgTGVnYWN5TkZUc1ske25mdElkfV06ICR7ZGF0YT8udG9TdHJpbmcoKX1gKVxuICAgIGdldE15TkZUcygpO1xuICAgIGNvbnN0IGFtb3VudCA9IG15TkZUcz8uYW1vdW50Py50b1N0cmluZygpO1xuICAgIGNvbnN0IHRva2VuSWQgPSBteU5GVHM/LnRva2VuSWQ/LnRvTnVtYmVyKCk7XG4gICAgaWYgKHRva2VuSWQgPT0gMCkgc2V0VG9rZW5UeXBlKFwiRVJDMjBcIik7XG4gICAgZWxzZSB7XG4gICAgICBpZiAoYW1vdW50ID09IDApIHNldFRva2VuVHlwZShcIkVSQzcyMVwiKTtcbiAgICAgIGVsc2Ugc2V0VG9rZW5UeXBlKFwiRVJDMTE1NVwiKTtcbiAgICB9XG4gIH0sIFtteU5GVHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntteT8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e215Py5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihteT8uYW1vdW50KS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtteT8uYW1vdW50Py50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge215Py50b2tlbklkPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge2lzUmVtb3ZlTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgcmlnaHQtMCBiZy1ibGFjay9bMC41XSBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHotMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwdC0yIHBiLTggcHgtMTAgcm91bmRlZC0zeGwgaC1maXQgdGV4dC1ibGFjayBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQteGwgZm9udC1ib2xkIHAtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92aW5nIExlZ2FjeS4uLlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsIm15IiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwibXlORlRzIiwic2V0TXlORlRzIiwiZ2V0TXlORlRzIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsIm5mdHMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0QmVuZWZpY2lhcnlMZWdhY2llcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFtb3VudCIsInRvU3RyaW5nIiwidG9rZW5JZCIsInRvTnVtYmVyIiwic2V0VG9rZW5UeXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJtYWluIiwiaDMiLCJ0b2tlbiIsImJlbmVmaWNpYXJ5IiwidG9rZW5UeXBlIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVMZWdhY3kiLCJpc1JlbW92ZUxvYWRpbmciLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});