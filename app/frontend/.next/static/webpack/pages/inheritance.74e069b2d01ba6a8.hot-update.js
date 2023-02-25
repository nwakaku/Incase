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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3;\n        // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-semibold max-w-50 justify-center\",\n                                children: \"Check Your Inheritance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center\",\n                                children: \"This is the Assumed Inheritance you will be recieving from this Account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Beneficiary\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token ID\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            myNFTs.map(function(legacy, index) {\n                                var ref, ref5, ref6, ref7;\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this),\n                                        tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center truncate\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.amount) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref7 = legacy.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: tokenType\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                            onClick: function() {\n                                                return removeLegacy();\n                                            },\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: \"snull\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCO3NEQUFFdEIsU0FBUzs7Ozs7aURBQU07c0RBQ3BELDhEQUFDbUMsUUFBTTs0Q0FDTGIsU0FBUyxFQUFDLGdHQUFnRzs0Q0FDMUdjLE9BQU8sRUFBRTt1REFBTUMsWUFBWSxFQUFFOzZDQUFBO3NEQUM5QixHQUVEOzs7OztpREFBUzs7Ozs7O3lDQUNMOzZCQUNQLENBQUM7O29DQUNELGlCQUFHO2tDQUFFLE9BQ0Q7cUNBQUc7Ozs7O3dCQUVIOzs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBdkdRMUMsS0FBSzs7UUFDcUJQLDZDQUFVOzs7QUFEcENPLEtBQUFBLEtBQUs7QUF5R2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgIGNvbnRyYWN0QWJpIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhEOUM0MmIwRWQzRTJENTE0MmZjZjRFNTMzNjQ5OTdlZTg5MDhGQ2VEXCI7XG5jb25zdCBiZW5lZmljaWFyeUFkZHJlc3MgPSBcIjB4NDJlOGQxQkJCNjEzZGM2M0E2ZkRiRjM5QjBiMDE2RTc4ZEY0RTRmNlwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0TXlORlRzKCk7XG4gIC8vIH0sIFthZGRyZXNzLCBpc0Nvbm5lY3RlZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBMZWdhY3lORlRzWyR7bmZ0SWR9XTogJHtuZnRzPy50b1N0cmluZygpfWApXG4gICAgLy8gZ2V0TXlORlRzKCk7XG4gICAgZ2V0TXlORlRzKCk7XG4gICAgY29uc29sZS5sb2cobXlORlRzKVxuICAgIGNvbnN0IGFtb3VudCA9IG15TkZUcz8uYW1vdW50Py50b1N0cmluZygpO1xuICAgIGNvbnN0IHRva2VuSWQgPSBteU5GVHM/LnRva2VuSWQ/LnRvTnVtYmVyKCk7XG4gICAgaWYgKHRva2VuSWQgPT0gMCkgc2V0VG9rZW5UeXBlKFwiRVJDMjBcIik7XG4gICAgZWxzZSB7XG4gICAgICBpZiAoYW1vdW50ID09IDApIHNldFRva2VuVHlwZShcIkVSQzcyMVwiKTtcbiAgICAgIGVsc2Ugc2V0VG9rZW5UeXBlKFwiRVJDMTE1NVwiKTtcbiAgICB9XG4gICAgXG4gIH0sIFtteU5GVHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWF4LXctNTAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICBDaGVjayBZb3VyIEluaGVyaXRhbmNlXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTIgdGV4dC1ncmF5LTQwMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBwYi0zIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIFRoaXMgaXMgdGhlIEFzc3VtZWQgSW5oZXJpdGFuY2UgeW91IHdpbGwgYmUgcmVjaWV2aW5nIGZyb20gdGhpcyBBY2NvdW50XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNSBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRva2VuPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5CZW5lZmljaWFyeTwvaDM+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QW1vdW50PC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Ub2tlbiBJRDwvaDM+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VHlwZTwvaDM+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RGVsZXRlPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge215TkZUcy5tYXAoKGxlZ2FjeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bGVnYWN5Py5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICAgIHt0b2tlblR5cGUgPT0gXCJFUkMyMFwiID8gKFxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihsZWdhY3k/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsZWdhY3k/LmFtb3VudD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge2xlZ2FjeT8udG9rZW5JZD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+e3Rva2VuVHlwZX08L2gzPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlTGVnYWN5KCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPik6IDw+XG4gICAgICAgICAgICBzbnVsbDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImdldE15TkZUcyIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJuZnRzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImdldEJlbmVmaWNpYXJ5TGVnYWNpZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJhbW91bnQiLCJ0b1N0cmluZyIsInRva2VuSWQiLCJ0b051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImhyIiwibWFpbiIsImgyIiwicCIsImgzIiwibWFwIiwibGVnYWN5IiwiaW5kZXgiLCJ0b2tlbiIsImJlbmVmaWNpYXJ5IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVMZWdhY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});