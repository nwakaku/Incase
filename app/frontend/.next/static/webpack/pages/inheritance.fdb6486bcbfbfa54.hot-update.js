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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nfunction Index() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    // Check If any Beneficiaries\n    var data = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)(_objectSpread({}, contractConfig, {\n        functionName: \"getBeneficiaryLegacies\",\n        args: []\n    })).data;\n    // const getMyNFTs = async () => {\n    //   if (isConnected) {\n    //     try {\n    //       const provider = new ethers.providers.Web3Provider(window.ethereum);\n    //       const signer = provider.getSigner();\n    //       const contract = new ethers.Contract(\n    //         contractAddress,\n    //         contractAbi,\n    //         signer\n    //       );\n    //       const nfts = await contract.getBeneficiaryLegacies();\n    //       console.log(nfts);\n    //       setMyNFTs(nfts);\n    //     } catch (error) {\n    //       console.error(\"Error getting NFTs: \", error);\n    //     }\n    //   }\n    // };\n    // getMyNFTs();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(data);\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.token) === null || ref === void 0 ? void 0 : ref.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"tqFfNeIWPcGGuDN4/aQo81j2GGU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFkQSxLQUFBQSxDQUFjLEdBQWRBLE1BQU0sQ0FBRXNCLE1BQU0sQ0FBQyxDQUFDSixRQUFRLEVBQUU7Ozs7O29DQUNqRCxpQkFFTCw4REFBQ0YsSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLHFCQUFxQjswQ0FDaENiLE1BQU0sYUFBTkEsTUFBTSxXQUFRLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsQ0FBQUEsSUFBYyxHQUFkQSxNQUFNLENBQUVzQixNQUFNLGNBQWR0QixJQUFjLGNBQWRBLEtBQUFBLENBQWMsR0FBZEEsSUFBYyxDQUFFa0IsUUFBUSxFQUFFOzs7OztvQ0FDeEI7MENBRVAsOERBQUNGLElBQUU7Z0NBQUNILFNBQVMsRUFBQyxxQkFBcUI7MENBQ2hDYixNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLElBQWUsR0FBZkEsTUFBTSxDQUFFdUIsT0FBTyxjQUFmdkIsSUFBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLElBQWUsQ0FBRWtCLFFBQVEsRUFBRTs7Ozs7b0NBQ3pCOzBDQUNMLDhEQUFDRixJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUFFVCxTQUFTOzs7OztvQ0FBTTswQ0FDcEQsOERBQUNvQixRQUFNO2dDQUNMWCxTQUFTLEVBQUMsZ0dBQWdHO2dDQUMxR1ksT0FBTyxFQUFFOzJDQUFNQyxZQUFZLEVBQUU7aUNBQUE7MENBQzlCLEdBRUQ7Ozs7O29DQUFTOzs7Ozs7NEJBQ0w7Ozs7O3dCQUNEOzs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBN0VRM0IsS0FBSzs7UUFDcUJOLDZDQUFVO1FBSzFCQyxrREFBZTs7O0FBTnpCSyxLQUFBQSxLQUFLO0FBK0VkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhEOUM0MmIwRWQzRTJENTE0MmZjZjRFNTMzNjQ5OTdlZTg5MDhGQ2VEXCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IFtteU5GVHMsIHNldE15TkZUc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2tlblR5cGUsIHNldFRva2VuVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBDaGVjayBJZiBhbnkgQmVuZWZpY2lhcmllc1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgLi4uY29udHJhY3RDb25maWcsXG4gICAgZnVuY3Rpb25OYW1lOiBcImdldEJlbmVmaWNpYXJ5TGVnYWNpZXNcIixcbiAgICBhcmdzOiBbXSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgLy8gICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gIC8vICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgLy8gICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gIC8vICAgICAgICAgY29udHJhY3RBYmksXG4gIC8vICAgICAgICAgc2lnbmVyXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKG5mdHMpO1xuICAvLyAgICAgICBzZXRNeU5GVHMobmZ0cyk7XG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfTtcblxuICAvLyBnZXRNeU5GVHMoKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldE15TkZUcygpO1xuICAvLyB9LCBbYWRkcmVzcywgaXNDb25uZWN0ZWRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy50b2tlbj8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihteU5GVHM/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7bXlORlRzPy5hbW91bnQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bXlORlRzPy50b2tlbklkPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJldGhlcnMiLCJjb250cmFjdEFiaSIsIkhlYWRlciIsImNvbnRyYWN0QWRkcmVzcyIsIkluZGV4IiwibXlORlRzIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwic2V0TXlORlRzIiwidG9rZW5UeXBlIiwic2V0VG9rZW5UeXBlIiwiZGF0YSIsImNvbnRyYWN0Q29uZmlnIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJoMyIsInRva2VuIiwidG9TdHJpbmciLCJiZW5lZmljaWFyeSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJhbW91bnQiLCJ0b2tlbklkIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUxlZ2FjeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});