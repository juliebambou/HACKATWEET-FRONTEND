/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_like__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/like */ \"./reducers/like.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__, _reducers_user__WEBPACK_IMPORTED_MODULE_7__, _reducers_like__WEBPACK_IMPORTED_MODULE_8__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_3__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__, _reducers_user__WEBPACK_IMPORTED_MODULE_7__, _reducers_like__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst persistConfig = {\n    key: \"Hackatweet\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_9___default())\n};\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    like: _reducers_like__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_5__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_5__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__.PersistGate, {\n            persistor: persistor,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Hackatweet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juliebambou/Desktop/HACKATWEET/frontend/pages/_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/juliebambou/Desktop/HACKATWEET/frontend/pages/_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/juliebambou/Desktop/HACKATWEET/frontend/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juliebambou/Desktop/HACKATWEET/frontend/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/juliebambou/Desktop/HACKATWEET/frontend/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRjtBQUNVO0FBQzRCO0FBQ047QUFDQztBQUMxQjtBQUNBO0FBQ1k7QUFFaEQsTUFBTVUsYUFBYSxHQUFHO0lBQUVDLEdBQUcsRUFBRSxZQUFZO0lBQUVGLE9BQU87Q0FBRTtBQUVwRCxNQUFNRyxRQUFRLEdBQUdWLGlFQUFlLENBQUM7SUFBRUssSUFBSTtJQUFFQyxJQUFJO0NBQUUsQ0FBQztBQUVoRCxNQUFNSyxLQUFLLEdBQUdWLGdFQUFjLENBQUM7SUFDM0JXLE9BQU8sRUFBRVQsNkRBQWMsQ0FBQ0ssYUFBYSxFQUFFRSxRQUFRLENBQUM7SUFDaERHLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FBS0Esb0JBQW9CLENBQUM7WUFBRUMsaUJBQWlCLEVBQUUsS0FBSztTQUFFLENBQUM7Q0FDekYsQ0FBQztBQUNGLE1BQU1DLFNBQVMsR0FBR2QsMkRBQVksQ0FBQ1MsS0FBSyxDQUFDO0FBRXJDLFNBQVNNLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDcEIsaURBQVE7UUFBQ1ksS0FBSyxFQUFFQSxLQUFLO2tCQUNuQiw0RUFBQ1Asd0VBQVc7WUFBQ1ksU0FBUyxFQUFFQSxTQUFTOzs4QkFDbEMsOERBQUNsQixrREFBSTs4QkFDSCw0RUFBQ3NCLE9BQUs7a0NBQUMsWUFBVTs7Ozs7NEJBQVE7Ozs7O3dCQUNwQjs4QkFDUCw4REFBQ0YsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7O2dCQUNkOzs7OztZQUNMLENBRVg7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IGxpa2UgZnJvbSAnLi4vcmVkdWNlcnMvbGlrZSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHsga2V5OiAnSGFja2F0d2VldCcsIHN0b3JhZ2UgfTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyB1c2VyLCBsaWtlIH0pO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpLFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKHsgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLFxufSk7XG5jb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFja2F0d2VldDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1BlcnNpc3RHYXRlPlxuICAgIDwvUHJvdmlkZXI+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm92aWRlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJQZXJzaXN0R2F0ZSIsInVzZXIiLCJsaWtlIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJyZWR1Y2VycyIsInN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwicGVyc2lzdG9yIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/like.js":
/*!**************************!*\
  !*** ./reducers/like.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"likeSlice\": () => (/* binding */ likeSlice),\n/* harmony export */   \"removeLike\": () => (/* binding */ removeLike)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    value: []\n};\nconst likeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"like\",\n    initialState,\n    reducers: {\n        addLike: (state, action)=>{\n            state.value.push(action.payload);\n        },\n        removeLike: (state, action)=>{\n            state.value = state.value.filter((like)=>like.tweet !== action.payload.tweet\n            );\n        }\n    }\n});\nconst { addLike , removeLike  } = likeSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9saWtlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLFlBQVksR0FBRztJQUNwQkMsS0FBSyxFQUFFLEVBQUU7Q0FDVDtBQUVNLE1BQU1DLFNBQVMsR0FBR0gsNkRBQVcsQ0FBQztJQUNwQ0ksSUFBSSxFQUFFLE1BQU07SUFDWkgsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDVEMsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzNCRCxLQUFLLENBQUNMLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0RDLFVBQVUsRUFBRSxDQUFDSixLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUM5QkQsS0FBSyxDQUFDTCxLQUFLLEdBQUdLLEtBQUssQ0FBQ0wsS0FBSyxDQUFDVSxNQUFNLENBQUNDLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDQyxLQUFLLEtBQUtOLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSSxLQUFLO1lBQUEsQ0FBQyxDQUFDO1NBQ3hFO0tBQ1A7Q0FDRCxDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVSLE9BQU8sR0FBRUssVUFBVSxHQUFFLEdBQUdSLFNBQVMsQ0FBQ1ksT0FBTyxDQUFDO0FBQ3pELGlFQUFlWixTQUFTLENBQUNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL2xpa2UuanM/ZDY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHZhbHVlOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBsaWtlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdsaWtlJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdGFkZExpa2U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS52YWx1ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcblx0XHR9LFxuXHRcdHJlbW92ZUxpa2U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS52YWx1ZSA9IHN0YXRlLnZhbHVlLmZpbHRlcihsaWtlID0+IGxpa2UudHdlZXQgIT09IGFjdGlvbi5wYXlsb2FkLnR3ZWV0KTtcbiAgICAgICAgfVxuXHR9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGFkZExpa2UsIHJlbW92ZUxpa2UgfSA9IGxpa2VTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgbGlrZVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImxpa2VTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZExpa2UiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwicmVtb3ZlTGlrZSIsImZpbHRlciIsImxpa2UiLCJ0d2VldCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/like.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    value: {\n        token: null,\n        username: null,\n        firstName: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.value.token = action.payload.token;\n            state.value.username = action.payload.username;\n            state.value.firstName = action.payload.firstName;\n        },\n        logout: (state)=>{\n            state.value.token = null;\n            state.value.username = null;\n            state.value.firstName = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRSxJQUFJO1FBQUVDLFNBQVMsRUFBRSxJQUFJO0tBQUU7Q0FDeEQ7QUFFTSxNQUFNQyxTQUFTLEdBQUdOLDZEQUFXLENBQUM7SUFDbkNPLElBQUksRUFBRSxNQUFNO0lBQ1pOLFlBQVk7SUFDWk8sUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN4QkQsS0FBSyxDQUFDUixLQUFLLENBQUNDLEtBQUssR0FBR1EsTUFBTSxDQUFDQyxPQUFPLENBQUNULEtBQUssQ0FBQztZQUN6Q08sS0FBSyxDQUFDUixLQUFLLENBQUNFLFFBQVEsR0FBR08sTUFBTSxDQUFDQyxPQUFPLENBQUNSLFFBQVEsQ0FBQztZQUMvQ00sS0FBSyxDQUFDUixLQUFLLENBQUNHLFNBQVMsR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUNQLFNBQVM7U0FDakQ7UUFDRFEsTUFBTSxFQUFFLENBQUNILEtBQUssR0FBSztZQUNqQkEsS0FBSyxDQUFDUixLQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDekJPLEtBQUssQ0FBQ1IsS0FBSyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzVCTSxLQUFLLENBQUNSLEtBQUssQ0FBQ0csU0FBUyxHQUFHLElBQUksQ0FBQztTQUM5QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFSSxLQUFLLEdBQUVJLE1BQU0sR0FBRSxHQUFHUCxTQUFTLENBQUNRLE9BQU8sQ0FBQztBQUNuRCxpRUFBZVIsU0FBUyxDQUFDUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9yZWR1Y2Vycy91c2VyLmpzPzBkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB2YWx1ZTogeyB0b2tlbjogbnVsbCwgdXNlcm5hbWU6IG51bGwsIGZpcnN0TmFtZTogbnVsbCB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3VzZXInLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcbiAgICAgIHN0YXRlLnZhbHVlLmZpcnN0TmFtZSA9IGFjdGlvbi5wYXlsb2FkLmZpcnN0TmFtZVxuICAgIH0sXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlLnRva2VuID0gbnVsbDtcbiAgICAgIHN0YXRlLnZhbHVlLnVzZXJuYW1lID0gbnVsbDtcbiAgICAgIHN0YXRlLnZhbHVlLmZpcnN0TmFtZSA9IG51bGw7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwidG9rZW4iLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ2luIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9nb3V0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();