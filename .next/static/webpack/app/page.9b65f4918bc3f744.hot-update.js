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

/***/ "(app-pages-browser)/./components/todolist.jsx":
/*!*********************************!*\
  !*** ./components/todolist.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/menus */ \"(app-pages-browser)/./components/menus.jsx\");\n/* harmony import */ var _store_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/background */ \"(app-pages-browser)/./store/background.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ToDoList = ()=>{\n    _s();\n    const globalColor = (0,_store_background__WEBPACK_IMPORTED_MODULE_2__.useGlobalColor)((state)=>state.globalColor);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"Study HTML\"\n    ]);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const addTask = async (task)=>{\n        try {\n            console.log(\"Sending request to add task:\", task);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"https://pomotodolist.azurewebsites.net/api/AddTaskFunction?code=BVln3Wjvh22KveCBvAylK1Ys-LrwTPAGBGCHT3m8dJ46AzFu5qRs9A%3D%3D\"), {\n                task\n            });\n            console.log(\"Response received:\", response);\n            setTasks([\n                ...tasks,\n                task\n            ]);\n        } catch (error) {\n            console.error(\"There was a network error:\", error);\n            if (error.response) {\n                console.error(\"Server responded with status:\", error.response.status);\n            }\n        }\n    };\n    const handleAddTask = async (event)=>{\n        event.preventDefault();\n        if (newTask.trim() !== \"\") {\n            await addTask(newTask);\n            setNewTask(\"\");\n        }\n    };\n    const handleDeleteTask = async (index)=>{\n        try {\n            console.log(\"Sending request to delete task:\", index);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"https://pomotodolist.azurewebsites.net/api/DeleteTaskFunction?code=Z-Hfqmh25SDhC_T0NjtmDsqzoZbtVbioytcOoog7Qo1RAzFuMYHINQ%3D%3D\"), {\n                index\n            });\n            console.log(\"Response received:\", response);\n            const updatedTasks = tasks.filter((_, i)=>i !== index);\n            setTasks(updatedTasks);\n        } catch (error) {\n            console.error(\"There was a network error:\", error);\n        }\n    };\n    const handleEditTask = async (index)=>{\n        const newText = prompt(\"Enter new task\", tasks[index]);\n        if (newText !== null) {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"https://pomotodolist.azurewebsites.net/api/EditTaskFunction?code=uhzlw0cHwFBkjVdZldAGyg6fWBXaxzwbqFie871L_RYGAzFuQ92omA%3D%3D\"), {\n                index,\n                newText\n            });\n            const updatedTasks = [\n                ...tasks\n            ];\n            updatedTasks[index] = newText.trim();\n            setTasks(updatedTasks);\n        }\n    };\n    const handleToggleComplete = async (index)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(process.env.NEXT_PUBLIC_AZURE_TOGGLE_COMPLETE_TASK_FUNCTION_KEY), {\n            index\n        });\n        const task = document.getElementById(\"task-\".concat(index));\n        if (task.classList.contains(\"completed\")) {\n            task.classList.remove(\"completed\");\n        } else {\n            task.classList.add(\"completed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white text-lg font-bold p-10 w-full\",\n            style: {\n                backgroundColor: \"#\".concat(globalColor)\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/3 mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-md rounded-lg p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddTask,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"w-full px-4 py-2 mr-2  rounded-lg border-gray-300 focus:outline-none focus:border-blue-500\",\n                                        value: newTask,\n                                        onChange: (e)=>setNewTask(e.target.value),\n                                        placeholder: \"Add your To Do List\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                                        style: {\n                                            backgroundColor: \"#\".concat(globalColor)\n                                        },\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    id: \"task-\".concat(index),\n                                    className: \"border-b border-gray-200 flex items-center justify-between py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"mr-2\",\n                                                    onChange: ()=>handleToggleComplete(index)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: task\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-red-500 hover:text-red-700 mr-2\",\n                                                    onClick: ()=>handleDeleteTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-blue-500 hover:text-blue-700\",\n                                                    onClick: ()=>handleEditTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoList, \"lJI38RT/u6rPlJao0dgUYkgjZEg=\", false, function() {\n    return [\n        _store_background__WEBPACK_IMPORTED_MODULE_2__.useGlobalColor\n    ];\n});\n_c = ToDoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoList);\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdG9kb2xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFdUM7QUFDYTtBQUNuQjtBQUNQO0FBRTFCLE1BQU1JLFdBQVc7O0lBQ2IsTUFBTUMsY0FBY0osaUVBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUQsV0FBVztJQUUvRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7UUFBQztLQUFhO0lBQ2pELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxVQUFVLE9BQU9DO1FBQ25CLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0Y7WUFDNUMsTUFBTUcsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLEdBQXVELE9BQXBEQyw4SEFBbUQsR0FBSTtnQkFBRUw7WUFBSztZQUNuR0MsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkM7WUFDbENQLFNBQVM7bUJBQUlEO2dCQUFPSzthQUFLO1FBQzdCLEVBQUUsT0FBT1EsT0FBTztZQUNaUCxRQUFRTyxLQUFLLENBQUMsOEJBQThCQTtZQUM1QyxJQUFJQSxNQUFNTCxRQUFRLEVBQUU7Z0JBQ2hCRixRQUFRTyxLQUFLLENBQUMsaUNBQWlDQSxNQUFNTCxRQUFRLENBQUNNLE1BQU07WUFDeEU7UUFDSjtJQUNKO0lBRUEsTUFBTUMsZ0JBQWdCLE9BQU9DO1FBQ3pCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUlmLFFBQVFnQixJQUFJLE9BQU8sSUFBSTtZQUN2QixNQUFNZCxRQUFRRjtZQUNkQyxXQUFXO1FBQ2Y7SUFDSjtJQUVBLE1BQU1nQixtQkFBbUIsT0FBT0M7UUFDNUIsSUFBSTtZQUNBZCxRQUFRQyxHQUFHLENBQUMsbUNBQW1DYTtZQUMvQyxNQUFNWixXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsR0FBMEQsT0FBdkRDLGlJQUFzRCxHQUFJO2dCQUFF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dC5qc3g/OTI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBNZW51cyBmcm9tIFwiQC9jb21wb25lbnRzL21lbnVzXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbENvbG9yIH0gZnJvbSBcIkAvc3RvcmUvYmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnbG9iYWxDb2xvciA9IHVzZUdsb2JhbENvbG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsQ29sb3IpXHJcblxyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXCJTdHVkeSBIVE1MXCJdKTtcclxuICAgIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSBhc3luYyAodGFzaykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyByZXF1ZXN0IHRvIGFkZCB0YXNrOlwiLCB0YXNrKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FaVVJFX0FERF9UQVNLX0ZVTkNUSU9OX0tFWX1gLCB7IHRhc2sgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgcmVjZWl2ZWQ6XCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCB0YXNrXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIG5ldHdvcmsgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2VydmVyIHJlc3BvbmRlZCB3aXRoIHN0YXR1czpcIiwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkVGFzayA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5ld1Rhc2sudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFkZFRhc2sobmV3VGFzayk7XHJcbiAgICAgICAgICAgIHNldE5ld1Rhc2soXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gYXN5bmMgKGluZGV4KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIHJlcXVlc3QgdG8gZGVsZXRlIHRhc2s6XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FaVVJFX0RFTEVURV9UQVNLX0ZVTkNUSU9OX0tFWX1gLCB7IGluZGV4IH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIHJlY2VpdmVkOlwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG4gICAgICAgICAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBuZXR3b3JrIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFZGl0VGFzayA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGV4dCA9IHByb21wdChcIkVudGVyIG5ldyB0YXNrXCIsIHRhc2tzW2luZGV4XSk7XHJcbiAgICBpZiAobmV3VGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfRURJVF9UQVNLX0ZVTkNUSU9OX0tFWX1gLCB7IGluZGV4LCBuZXdUZXh0IH0pO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrc107XHJcbiAgICAgICAgdXBkYXRlZFRhc2tzW2luZGV4XSA9IG5ld1RleHQudHJpbSgpO1xyXG4gICAgICAgIHNldFRhc2tzKHVwZGF0ZWRUYXNrcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gYXN5bmMgKGluZGV4KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BWlVSRV9UT0dHTEVfQ09NUExFVEVfVEFTS19GVU5DVElPTl9LRVl9YCwgeyBpbmRleCB9KTtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAodGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIHAtMTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke2dsb2JhbENvbG9yfWAgfX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMyBteC1hdXRvIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtc20gc206dGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRUYXNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXItMiAgcm91bmRlZC1sZyBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIFRvIERvIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgIyR7Z2xvYmFsQ29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHRhc2stJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTcwMCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogYCMke2dsb2JhbENvbG9yfWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdFRhc2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBgIyR7Z2xvYmFsQ29sb3J9YCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0XHJcbiJdLCJuYW1lcyI6WyJNZW51cyIsInVzZUdsb2JhbENvbG9yIiwidXNlU3RhdGUiLCJheGlvcyIsIlRvRG9MaXN0IiwiZ2xvYmFsQ29sb3IiLCJzdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJuZXdUYXNrIiwic2V0TmV3VGFzayIsImFkZFRhc2siLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BWlVSRV9BRERfVEFTS19GVU5DVElPTl9LRVkiLCJlcnJvciIsInN0YXR1cyIsImhhbmRsZUFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImhhbmRsZURlbGV0ZVRhc2siLCJpbmRleCIsIk5FWFRfUFVCTElDX0FaVVJFX0RFTEVURV9UQVNLX0ZVTkNUSU9OX0tFWSIsInVwZGF0ZWRUYXNrcyIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlRWRpdFRhc2siLCJuZXdUZXh0IiwicHJvbXB0IiwiTkVYVF9QVUJMSUNfQVpVUkVfRURJVF9UQVNLX0ZVTkNUSU9OX0tFWSIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlIiwiTkVYVF9QVUJMSUNfQVpVUkVfVE9HR0xFX0NPTVBMRVRFX1RBU0tfRlVOQ1RJT05fS0VZIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJ1bCIsIm1hcCIsImxpIiwiaWQiLCJsYWJlbCIsInNwYW4iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/todolist.jsx\n"));

/***/ })

});