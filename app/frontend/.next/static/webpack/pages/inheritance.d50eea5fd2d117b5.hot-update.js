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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nfunction Index() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    // Check If any Beneficiaries\n    var data = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)(_objectSpread({}, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractConfig, {\n        functionName: \"getBeneficiaryLegacies\",\n        args: [\n            \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\"\n        ]\n    })).data;\n    // const getMyNFTs = async () => {\n    //   if (isConnected) {\n    //     try {\n    //       const provider = new ethers.providers.Web3Provider(window.ethereum);\n    //       const signer = provider.getSigner();\n    //       const contract = new ethers.Contract(\n    //         contractAddress,\n    //         contractAbi,\n    //         signer\n    //       );\n    //       const nfts = await contract.getBeneficiaryLegacies();\n    //       console.log(nfts);\n    //       setMyNFTs(nfts);\n    //     } catch (error) {\n    //       console.error(\"Error getting NFTs: \", error);\n    //     }\n    //   }\n    // };\n    // getMyNFTs();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.token) === null || ref === void 0 ? void 0 : ref.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"tqFfNeIWPcGGuDN4/aQo81j2GGU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNLENBQUMsQ0FBQ0osUUFBUSxFQUFFOzs7OztvQ0FDakQsaUJBRUwsOERBQUNGLElBQUU7Z0NBQUNILFNBQVMsRUFBQyxxQkFBcUI7MENBQ2hDWixNQUFNLGFBQU5BLE1BQU0sV0FBUSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUFBLElBQWMsR0FBZEEsTUFBTSxDQUFFcUIsTUFBTSxjQUFkckIsSUFBYyxjQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQWMsQ0FBRWlCLFFBQVEsRUFBRTs7Ozs7b0NBQ3hCOzBDQUVQLDhEQUFDRixJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUNoQ1osTUFBTSxhQUFOQSxNQUFNLFdBQVMsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxJQUFlLEdBQWZBLE1BQU0sQ0FBRXNCLE9BQU8sY0FBZnRCLElBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxJQUFlLENBQUVpQixRQUFRLEVBQUU7Ozs7O29DQUN6QjswQ0FDTCw4REFBQ0YsSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLHFCQUFxQjswQ0FBRVIsU0FBUzs7Ozs7b0NBQU07MENBQ3BELDhEQUFDbUIsUUFBTTtnQ0FDTFgsU0FBUyxFQUFDLGdHQUFnRztnQ0FDMUdZLE9BQU8sRUFBRTsyQ0FBTUMsWUFBWSxFQUFFO2lDQUFBOzBDQUM5QixHQUVEOzs7OztvQ0FBUzs7Ozs7OzRCQUNMOzs7Ozt3QkFDRDs7Ozs7O2dCQUNIO3FCQUVQLENBQ0g7Q0FDSDtHQTFFUTFCLEtBQUs7O1FBQ3FCUCw2Q0FBVTtRQUsxQkMsa0RBQWU7OztBQU56Qk0sS0FBQUEsS0FBSztBQTRFZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luaGVyaXRhbmNlL2luZGV4LmpzPzZhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQge1xuICBjb250cmFjdENvbmZpZyxcbiAgY29udHJhY3RSZWNrbGVzc1dyaXRlQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RDlDNDJiMEVkM0UyRDUxNDJmY2Y0RTUzMzY0OTk3ZWU4OTA4RkNlRFwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gQ2hlY2sgSWYgYW55IEJlbmVmaWNpYXJpZXNcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250cmFjdFJlYWQoe1xuICAgIC4uLmNvbnRyYWN0Q29uZmlnLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzXCIsXG4gICAgYXJnczogW1wiMHg0MmU4ZDFCQkI2MTNkYzYzQTZmRGJGMzlCMGIwMTZFNzhkRjRFNGY2XCJdLFxuICB9KTtcblxuICAvLyBjb25zdCBnZXRNeU5GVHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAvLyAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgLy8gICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAvLyAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgLy8gICAgICAgICBjb250cmFjdEFiaSxcbiAgLy8gICAgICAgICBzaWduZXJcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldEJlbmVmaWNpYXJ5TGVnYWNpZXMoKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2cobmZ0cyk7XG4gIC8vICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIE5GVHM6IFwiLCBlcnJvcik7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIC8vIGdldE15TkZUcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0Nvbm5lY3RlZCAmJiBhZGRyZXNzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdyBteC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ3JpZC1yb3ctZmxvdyBnYXAtNCB3LWZ1bGwgbXgtYXV0byBtdC01IG1sLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e215TkZUcz8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e215TkZUcz8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAge3Rva2VuVHlwZSA9PSBcIkVSQzIwXCIgPyAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobXlORlRzPy5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge215TkZUcz8uYW1vdW50Py50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge215TkZUcz8udG9rZW5JZD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj57dG9rZW5UeXBlfTwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVMZWdhY3koKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RDb25maWciLCJjb250cmFjdFJlY2tsZXNzV3JpdGVDb25maWciLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJJbmRleCIsIm15TkZUcyIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImRhdGEiLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyIiwibWFpbiIsImgzIiwidG9rZW4iLCJ0b1N0cmluZyIsImJlbmVmaWNpYXJ5IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImFtb3VudCIsInRva2VuSWQiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlTGVnYWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});