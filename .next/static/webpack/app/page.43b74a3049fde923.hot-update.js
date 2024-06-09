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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/menus */ \"(app-pages-browser)/./components/menus.jsx\");\n/* harmony import */ var _store_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/background */ \"(app-pages-browser)/./store/background.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ToDoList = ()=>{\n    _s();\n    const globalColor = (0,_store_background__WEBPACK_IMPORTED_MODULE_2__.useGlobalColor)((state)=>state.globalColor);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"Study HTML\"\n    ]);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const addTask = async (task)=>{\n        try {\n            console.log(\"Sending request to add task:\", task);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://pomotodolist.azurewebsites.net/api/AddTaskFunction?code=\".concat(\"BVln3Wjvh22KveCBvAylK1Ys-LrwTPAGBGCHT3m8dJ46AzFu5qRs9A%3D%3D\"), {\n                task\n            });\n            console.log(\"Response received:\", response);\n            setTasks([\n                ...tasks,\n                task\n            ]);\n        } catch (error) {\n            console.error(\"There was a network error:\", error);\n            if (error.response) {\n                console.error(\"Server responded with status:\", error.response.status);\n            }\n        }\n    };\n    const handleAddTask = async (event)=>{\n        event.preventDefault();\n        if (newTask.trim() !== \"\") {\n            await addTask(newTask);\n            setNewTask(\"\");\n        }\n    };\n    const handleDeleteTask = async (index)=>{\n        try {\n            console.log(\"Sending request to delete task:\", index);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://pomotodolist.azurewebsites.net/api/DeleteTaskFunction?code=\".concat(\"Z-Hfqmh25SDhC_T0NjtmDsqzoZbtVbioytcOoog7Qo1RAzFuMYHINQ%3D%3D\"), {\n                index\n            });\n            console.log(\"Response received:\", response);\n            const updatedTasks = tasks.filter((_, i)=>i !== index);\n            setTasks(updatedTasks);\n        } catch (error) {\n            console.error(\"There was a network error:\", error);\n        }\n    };\n    const handleEditTask = async (index)=>{\n        const newText = prompt(\"Enter new task\", tasks[index]);\n        if (newText !== null) {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://pomotodolist.azurewebsites.net/api/EditTaskFunction?code=\".concat(\"uhzlw0cHwFBkjVdZldAGyg6fWBXaxzwbqFie871L_RYGAzFuQ92omA%3D%3D\"), {\n                index,\n                newText\n            });\n            const updatedTasks = [\n                ...tasks\n            ];\n            updatedTasks[index] = newText.trim();\n            setTasks(updatedTasks);\n        }\n    };\n    const handleToggleComplete = async (index)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://pomotodolist.azurewebsites.net/api/ToggleCompleteTaskFunction?code=\", {\n            index\n        });\n        const task = document.getElementById(\"task-\".concat(index));\n        if (task.classList.contains(\"completed\")) {\n            task.classList.remove(\"completed\");\n        } else {\n            task.classList.add(\"completed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white text-lg font-bold p-10 w-full\",\n            style: {\n                backgroundColor: \"#\".concat(globalColor)\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/3 mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-md rounded-lg p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddTask,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"w-full px-4 py-2 mr-2  rounded-lg border-gray-300 focus:outline-none focus:border-blue-500\",\n                                        value: newTask,\n                                        onChange: (e)=>setNewTask(e.target.value),\n                                        placeholder: \"Add your To Do List\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                                        style: {\n                                            backgroundColor: \"#\".concat(globalColor)\n                                        },\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    id: \"task-\".concat(index),\n                                    className: \"border-b border-gray-200 flex items-center justify-between py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"mr-2\",\n                                                    onChange: ()=>handleToggleComplete(index)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: task\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-red-500 hover:text-red-700 mr-2\",\n                                                    onClick: ()=>handleDeleteTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-blue-500 hover:text-blue-700\",\n                                                    onClick: ()=>handleEditTask(index),\n                                                    style: {\n                                                        color: \"#\".concat(globalColor)\n                                                    },\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\todolist.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoList, \"lJI38RT/u6rPlJao0dgUYkgjZEg=\", false, function() {\n    return [\n        _store_background__WEBPACK_IMPORTED_MODULE_2__.useGlobalColor\n    ];\n});\n_c = ToDoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoList);\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdG9kb2xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1QztBQUNhO0FBQ25CO0FBQ1A7QUFFMUIsTUFBTUksV0FBVzs7SUFDYixNQUFNQyxjQUFjSixpRUFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRCxXQUFXO0lBRS9ELE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztRQUFDO0tBQWE7SUFDakQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLFVBQVUsT0FBT0M7UUFDbkIsSUFBSTtZQUNBQyxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDRjtZQUM1QyxNQUFNRyxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsbUVBQXVILE9BQXBEQyw4REFBbUQsR0FBSTtnQkFBRUw7WUFBSztZQUNuS0MsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkM7WUFDbENQLFNBQVM7bUJBQUlEO2dCQUFPSzthQUFLO1FBQzdCLEVBQUUsT0FBT1EsT0FBTztZQUNaUCxRQUFRTyxLQUFLLENBQUMsOEJBQThCQTtZQUM1QyxJQUFJQSxNQUFNTCxRQUFRLEVBQUU7Z0JBQ2hCRixRQUFRTyxLQUFLLENBQUMsaUNBQWlDQSxNQUFNTCxRQUFRLENBQUNNLE1BQU07WUFDeEU7UUFDSjtJQUNKO0lBRUEsTUFBTUMsZ0JBQWdCLE9BQU9DO1FBQ3pCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUlmLFFBQVFnQixJQUFJLE9BQU8sSUFBSTtZQUN2QixNQUFNZCxRQUFRRjtZQUNkQyxXQUFXO1FBQ2Y7SUFDSjtJQUVBLE1BQU1nQixtQkFBbUIsT0FBT0M7UUFDNUIsSUFBSTtZQUNBZCxRQUFRQyxHQUFHLENBQUMsbUNBQW1DYTtZQUMvQyxNQUFNWixXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsc0VBQTZILE9BQXZEQyw4REFBc0QsR0FBSTtnQkFBRVU7WUFBTTtZQUMxS2QsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkM7WUFDbEMsTUFBTWMsZUFBZXRCLE1BQU11QixNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUw7WUFDbERuQixTQUFTcUI7UUFDYixFQUFFLE9BQU9ULE9BQU87WUFDWlAsUUFBUU8sS0FBSyxDQUFDLDhCQUE4QkE7UUFDaEQ7SUFDSjtJQUVBLE1BQU1hLGlCQUFpQixPQUFPTjtRQUM5QixNQUFNTyxVQUFVQyxPQUFPLGtCQUFrQjVCLEtBQUssQ0FBQ29CLE1BQU07UUFDckQsSUFBSU8sWUFBWSxNQUFNO1lBQ2xCLE1BQU0vQiw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLG9FQUF5SCxPQUFyREMsOERBQW9ELEdBQUk7Z0JBQUVVO2dCQUFPTztZQUFRO1lBQzlKLE1BQU1MLGVBQWU7bUJBQUl0QjthQUFNO1lBQy9Cc0IsWUFBWSxDQUFDRixNQUFNLEdBQUdPLFFBQVFULElBQUk7WUFDbENqQixTQUFTcUI7UUFDYjtJQUNKO0lBR0ksTUFBTVEsdUJBQXVCLE9BQU9WO1FBQ2hDLE1BQU14Qiw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLCtFQUErRTtZQUFFVztRQUFNO1FBQ3hHLE1BQU1mLE9BQU8wQixTQUFTQyxjQUFjLENBQUMsUUFBYyxPQUFOWjtRQUM3QyxJQUFJZixLQUFLNEIsU0FBUyxDQUFDQyxRQUFRLENBQUMsY0FBYztZQUN0QzdCLEtBQUs0QixTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUMxQixPQUFPO1lBQ0g5QixLQUFLNEIsU0FBUyxDQUFDRyxHQUFHLENBQUM7UUFDdkI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtZQUNYQyxPQUFPO2dCQUFFQyxpQkFBaUIsSUFBZ0IsT0FBWjFDO1lBQWM7c0JBQzVDLDRFQUFDdUM7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQUtDLFVBQVUzQjtzQ0FDWiw0RUFBQ3NCO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0s7d0NBQ0dDLE1BQUs7d0NBQ0xOLFdBQVU7d0NBQ1ZPLE9BQU8zQzt3Q0FDUDRDLFVBQVUsQ0FBQ0MsSUFBTTVDLFdBQVc0QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQzFDSSxhQUFZO3dDQUNaQyxRQUFROzs7Ozs7a0RBRVosOERBQUNDO3dDQUFPYixXQUFVO3dDQUNsQkMsT0FBTzs0Q0FBRUMsaUJBQWlCLElBQWdCLE9BQVoxQzt3Q0FBYztrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3ZELDhEQUFDc0Q7c0NBQ0lwRCxNQUFNcUQsR0FBRyxDQUFDLENBQUNoRCxNQUFNZSxzQkFDZCw4REFBQ2tDO29DQUVHQyxJQUFJLFFBQWMsT0FBTm5DO29DQUNaa0IsV0FBVTs7c0RBRVYsOERBQUNrQjs0Q0FBTWxCLFdBQVU7OzhEQUNiLDhEQUFDSztvREFDR0MsTUFBSztvREFDTE4sV0FBVTtvREFDVlEsVUFBVSxJQUFNaEIscUJBQXFCVjs7Ozs7OzhEQUV6Qyw4REFBQ3FDOzhEQUFNcEQ7Ozs7Ozs7Ozs7OztzREFFWCw4REFBQ2dDOzs4REFDRyw4REFBQ2M7b0RBQ0diLFdBQVU7b0RBQ1ZvQixTQUFTLElBQU12QyxpQkFBaUJDO29EQUNoQ21CLE9BQU87d0RBQUVvQixPQUFPLElBQWdCLE9BQVo3RDtvREFBYzs4REFDckM7Ozs7Ozs4REFHRCw4REFBQ3FEO29EQUNHYixXQUFVO29EQUNWb0IsU0FBUyxJQUFNaEMsZUFBZU47b0RBQzlCbUIsT0FBTzt3REFBRW9CLE9BQU8sSUFBZ0IsT0FBWjdEO29EQUFjOzhEQUNyQzs7Ozs7Ozs7Ozs7OzttQ0F4QkFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DekM7R0ExSE12Qjs7UUFDa0JILDZEQUFjQTs7O0tBRGhDRztBQTRITiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZG9saXN0LmpzeD85MjRjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IE1lbnVzIGZyb20gXCJAL2NvbXBvbmVudHMvbWVudXNcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsQ29sb3IgfSBmcm9tIFwiQC9zdG9yZS9iYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdsb2JhbENvbG9yID0gdXNlR2xvYmFsQ29sb3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxDb2xvcilcclxuXHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcIlN0dWR5IEhUTUxcIl0pO1xyXG4gICAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9IGFzeW5jICh0YXNrKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIHJlcXVlc3QgdG8gYWRkIHRhc2s6XCIsIHRhc2spO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vcG9tb3RvZG9saXN0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS9BZGRUYXNrRnVuY3Rpb24/Y29kZT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FaVVJFX0FERF9UQVNLX0ZVTkNUSU9OX0tFWX1gLCB7IHRhc2sgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgcmVjZWl2ZWQ6XCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCB0YXNrXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIG5ldHdvcmsgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2VydmVyIHJlc3BvbmRlZCB3aXRoIHN0YXR1czpcIiwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkVGFzayA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5ld1Rhc2sudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFkZFRhc2sobmV3VGFzayk7XHJcbiAgICAgICAgICAgIHNldE5ld1Rhc2soXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gYXN5bmMgKGluZGV4KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIHJlcXVlc3QgdG8gZGVsZXRlIHRhc2s6XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL3BvbW90b2RvbGlzdC5henVyZXdlYnNpdGVzLm5ldC9hcGkvRGVsZXRlVGFza0Z1bmN0aW9uP2NvZGU9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BWlVSRV9ERUxFVEVfVEFTS19GVU5DVElPTl9LRVl9YCwgeyBpbmRleCB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSByZWNlaXZlZDpcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcclxuICAgICAgICAgICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGEgbmV0d29yayBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFRhc2sgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RleHQgPSBwcm9tcHQoXCJFbnRlciBuZXcgdGFza1wiLCB0YXNrc1tpbmRleF0pO1xyXG4gICAgaWYgKG5ld1RleHQgIT09IG51bGwpIHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL3BvbW90b2RvbGlzdC5henVyZXdlYnNpdGVzLm5ldC9hcGkvRWRpdFRhc2tGdW5jdGlvbj9jb2RlPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfRURJVF9UQVNLX0ZVTkNUSU9OX0tFWX1gLCB7IGluZGV4LCBuZXdUZXh0IH0pO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrc107XHJcbiAgICAgICAgdXBkYXRlZFRhc2tzW2luZGV4XSA9IG5ld1RleHQudHJpbSgpO1xyXG4gICAgICAgIHNldFRhc2tzKHVwZGF0ZWRUYXNrcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gYXN5bmMgKGluZGV4KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9wb21vdG9kb2xpc3QuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL1RvZ2dsZUNvbXBsZXRlVGFza0Z1bmN0aW9uP2NvZGU9JywgeyBpbmRleCB9KTtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAodGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIHAtMTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke2dsb2JhbENvbG9yfWAgfX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMyBteC1hdXRvIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtc20gc206dGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRUYXNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXItMiAgcm91bmRlZC1sZyBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIFRvIERvIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgIyR7Z2xvYmFsQ29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHRhc2stJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTcwMCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogYCMke2dsb2JhbENvbG9yfWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdFRhc2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBgIyR7Z2xvYmFsQ29sb3J9YCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0XHJcbiJdLCJuYW1lcyI6WyJNZW51cyIsInVzZUdsb2JhbENvbG9yIiwidXNlU3RhdGUiLCJheGlvcyIsIlRvRG9MaXN0IiwiZ2xvYmFsQ29sb3IiLCJzdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJuZXdUYXNrIiwic2V0TmV3VGFzayIsImFkZFRhc2siLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BWlVSRV9BRERfVEFTS19GVU5DVElPTl9LRVkiLCJlcnJvciIsInN0YXR1cyIsImhhbmRsZUFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImhhbmRsZURlbGV0ZVRhc2siLCJpbmRleCIsIk5FWFRfUFVCTElDX0FaVVJFX0RFTEVURV9UQVNLX0ZVTkNUSU9OX0tFWSIsInVwZGF0ZWRUYXNrcyIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlRWRpdFRhc2siLCJuZXdUZXh0IiwicHJvbXB0IiwiTkVYVF9QVUJMSUNfQVpVUkVfRURJVF9UQVNLX0ZVTkNUSU9OX0tFWSIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJ1bCIsIm1hcCIsImxpIiwiaWQiLCJsYWJlbCIsInNwYW4iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/todolist.jsx\n"));

/***/ })

});