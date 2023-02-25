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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var ref8, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        console.log(nfts);\n                        setMyNFTs(nfts);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    get;\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref7;\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        getMyNFTs();\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref7 = myNFTs.tokenId) === null || ref7 === void 0 ? void 0 : ref7.toNumber();\n        if (tokenId == 0) setTokenType(\"ERC20\");\n        else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref8 = myNFTs.token) === null || ref8 === void 0 ? void 0 : ref8.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBYyxjQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQWMsQ0FBRXVCLFFBQVEsRUFBRTs7Ozs7b0NBQ3hCOzBDQUVQLDhEQUFDTyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUNoQzNCLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsSUFBZSxHQUFmQSxNQUFNLENBQUV3QixPQUFPLGNBQWZ4QixJQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsSUFBZSxDQUFFdUIsUUFBUSxFQUFFOzs7OztvQ0FDekI7MENBQ0wsOERBQUNPLElBQUU7Z0NBQUNILFNBQVMsRUFBQyxxQkFBcUI7MENBQUV2QixTQUFTOzs7OztvQ0FBTTswQ0FDcEQsOERBQUMrQixRQUFNO2dDQUNMUixTQUFTLEVBQUMsZ0dBQWdHO2dDQUMxR1MsT0FBTyxFQUFFOzJDQUFNQyxZQUFZLEVBQUU7aUNBQUE7MENBQzlCLEdBRUQ7Ozs7O29DQUFTOzs7Ozs7NEJBRUw7Ozs7O3dCQUNEOzs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBL0VRdEMsS0FBSzs7UUFDcUJQLDZDQUFVOzs7QUFEcENPLEtBQUFBLEtBQUs7QUFpRmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgIGNvbnRyYWN0QWJpIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhEOUM0MmIwRWQzRTJENTE0MmZjZjRFNTMzNjQ5OTdlZTg5MDhGQ2VEXCI7XG5jb25zdCBiZW5lZmljaWFyeUFkZHJlc3MgPSBcIjB4NDJlOGQxQkJCNjEzZGM2M0E2ZkRiRjM5QjBiMDE2RTc4ZEY0RTRmNlwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICBjb25zdCBnZXRNeU5GVHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICBjb250cmFjdEFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldEJlbmVmaWNpYXJ5TGVnYWNpZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2cobmZ0cyk7XG4gICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIE5GVHM6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGdldFxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0TXlORlRzKCk7XG4gIC8vIH0sIFthZGRyZXNzLCBpc0Nvbm5lY3RlZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBMZWdhY3lORlRzWyR7bmZ0SWR9XTogJHtkYXRhPy50b1N0cmluZygpfWApXG4gICAgZ2V0TXlORlRzKCk7XG4gICAgY29uc3QgYW1vdW50ID0gbXlORlRzPy5hbW91bnQ/LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdG9rZW5JZCA9IG15TkZUcz8udG9rZW5JZD8udG9OdW1iZXIoKTtcbiAgICBpZiAodG9rZW5JZCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkMyMFwiKTtcbiAgICBlbHNlIHtcbiAgICAgIGlmIChhbW91bnQgPT0gMCkgc2V0VG9rZW5UeXBlKFwiRVJDNzIxXCIpO1xuICAgICAgZWxzZSBzZXRUb2tlblR5cGUoXCJFUkMxMTU1XCIpO1xuICAgIH1cbiAgfSwgW215TkZUc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0Nvbm5lY3RlZCAmJiBhZGRyZXNzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdyBteC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ3JpZC1yb3ctZmxvdyBnYXAtNCB3LWZ1bGwgbXgtYXV0byBtdC01IG1sLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e215TkZUcz8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e215TkZUcz8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAge3Rva2VuVHlwZSA9PSBcIkVSQzIwXCIgPyAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobXlORlRzPy5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge215TkZUcz8uYW1vdW50Py50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge215TkZUcz8udG9rZW5JZD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj57dG9rZW5UeXBlfTwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVMZWdhY3koKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsImV0aGVycyIsImNvbnRyYWN0QWJpIiwiSGVhZGVyIiwiY29udHJhY3RBZGRyZXNzIiwiYmVuZWZpY2lhcnlBZGRyZXNzIiwiSW5kZXgiLCJteU5GVHMiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJzZXRNeU5GVHMiLCJ0b2tlblR5cGUiLCJzZXRUb2tlblR5cGUiLCJnZXRNeU5GVHMiLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwibmZ0cyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0IiwiYW1vdW50IiwidG9TdHJpbmciLCJ0b2tlbklkIiwidG9OdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJoMyIsInRva2VuIiwiYmVuZWZpY2lhcnkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUxlZ2FjeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});