"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/background */ \"(app-pages-browser)/./store/background.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const globalColor = (0,_store_background__WEBPACK_IMPORTED_MODULE_1__.useGlobalColor)((state)=>state.globalColor);\n    // To Do List\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Study HTML\"\n    ]);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const addTask = (task)=>{\n        setTasks([\n            ...tasks,\n            task\n        ]);\n    };\n    const handleAddTask = (event)=>{\n        event.preventDefault();\n        if (newTask.trim() !== \"\") {\n            addTask(newTask);\n            setNewTask(\"\");\n        }\n    };\n    const handleDeleteTask = (index)=>{\n        const updatedTasks = tasks.filter((_, i)=>i !== index);\n        setTasks(updatedTasks);\n    };\n    const handleEditTask = (index)=>{\n        const updatedTasks = [\n            ...tasks\n        ];\n        const newText = prompt(\"Enter new task\", tasks[index]);\n        if (newText !== null) {\n            updatedTasks[index] = newText.trim();\n            setTasks(updatedTasks);\n        }\n    };\n    const handleToggleComplete = (index)=>{\n        const task = document.getElementById(\"task-\".concat(index));\n        if (task.classList.contains(\"completed\")) {\n            task.classList.remove(\"completed\");\n        } else {\n            task.classList.add(\"completed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white text-lg font-bold p-10 w-full\",\n            style: {\n                backgroundColor: \"#\".concat(globalColor)\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/3 mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-md rounded-lg p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddTask,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"w-full px-4 py-2 mr-2  rounded-lg border-gray-300 focus:outline-none focus:border-blue-500\",\n                                        value: newTask,\n                                        onChange: (e)=>setNewTask(e.target.value),\n                                        placeholder: \"Add your To Do List\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                                        style: {\n                                            backgroundColor: \"#\".concat(globalColor)\n                                        },\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    id: \"task-\".concat(index),\n                                    className: \"border-b border-gray-200 flex items-center justify-between py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"mr-2\",\n                                                    onChange: ()=>handleToggleComplete(index)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: task\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-red-500 hover:text-red-700 mr-2\",\n                                                    onClick: ()=>handleDeleteTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-blue-500 hover:text-blue-700\",\n                                                    onClick: ()=>handleEditTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\app\\\\page.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"DozqJAUAtP2Oaz0pIAoibuqHpLM=\", false, function() {\n    return [\n        _store_background__WEBPACK_IMPORTED_MODULE_1__.useGlobalColor\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEQ7b0RBQWM7OERBQ3JDOzs7Ozs7Ozs7Ozs7O21DQXhCQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ3pDO0dBekdNZDs7UUFDa0JKLDZEQUFjQTs7O0tBRGhDSTtBQTJHTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlR2xvYmFsQ29sb3IgfSBmcm9tIFwiQC9zdG9yZS9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdsb2JhbENvbG9yID0gdXNlR2xvYmFsQ29sb3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxDb2xvcilcblxuICAgIC8vIFRvIERvIExpc3RcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAgXCJTdHVkeSBIVE1MXCJcbiAgICBdKTtcbiAgICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBzZXRUYXNrcyhbLi4udGFza3MsIHRhc2tdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWRkVGFzayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAobmV3VGFzay50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBzZXROZXdUYXNrKFwiXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgICAgIHNldFRhc2tzKHVwZGF0ZWRUYXNrcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVkaXRUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrc107XG4gICAgICAgIGNvbnN0IG5ld1RleHQgPSBwcm9tcHQoXCJFbnRlciBuZXcgdGFza1wiLCB0YXNrc1tpbmRleF0pO1xuICAgICAgICBpZiAobmV3VGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdXBkYXRlZFRhc2tzW2luZGV4XSA9IG5ld1RleHQudHJpbSgpO1xuICAgICAgICAgICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcbiAgICAgICAgaWYgKHRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZWQnKSkge1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZCBwLTEwIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgIyR7Z2xvYmFsQ29sb3J9YCB9fSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMyBteC1hdXRvIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtc20gc206dGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUFkZFRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXItMiAgcm91bmRlZC1sZyBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFza31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGFzayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIFRvIERvIExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke2dsb2JhbENvbG9yfWAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2B0YXNrLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YXNrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNzAwIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGAjJHtnbG9iYWxDb2xvcn1gIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRUYXNrKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGAjJHtnbG9iYWxDb2xvcn1gIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZUdsb2JhbENvbG9yIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJnbG9iYWxDb2xvciIsInN0YXRlIiwidGFza3MiLCJzZXRUYXNrcyIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwiYWRkVGFzayIsInRhc2siLCJoYW5kbGVBZGRUYXNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJoYW5kbGVEZWxldGVUYXNrIiwiaW5kZXgiLCJ1cGRhdGVkVGFza3MiLCJmaWx0ZXIiLCJfIiwiaSIsImhhbmRsZUVkaXRUYXNrIiwibmV3VGV4dCIsInByb21wdCIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJ1bCIsIm1hcCIsImxpIiwiaWQiLCJsYWJlbCIsInNwYW4iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});