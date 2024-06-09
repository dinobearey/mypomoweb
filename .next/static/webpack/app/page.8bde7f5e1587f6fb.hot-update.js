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

/***/ "(app-pages-browser)/./components/menus/music-menu.jsx":
/*!*****************************************!*\
  !*** ./components/menus/music-menu.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/background */ \"(app-pages-browser)/./store/background.js\");\n/* harmony import */ var _store_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/audio-player */ \"(app-pages-browser)/./store/audio-player.js\");\n/* harmony import */ var _store_music_played__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/music-played */ \"(app-pages-browser)/./store/music-played.js\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./components/ui/scroll-area.jsx\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./components/ui/separator.jsx\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MusicMenu = (param)=>{\n    let { setModal } = param;\n    _s();\n    const globalColor = (0,_store_background__WEBPACK_IMPORTED_MODULE_1__.useGlobalColor)((state)=>state.globalColor);\n    const audioPlayer = (0,_store_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer)((state)=>state.audioPlayer);\n    const setAudioPlayer = (0,_store_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer)((state)=>state.setAudioPlayer);\n    const musicPlayed = (0,_store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed)((state)=>state.musicPlayed);\n    const setMusicPlayed = (0,_store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed)((state)=>state.setMusicPlayed);\n    const setIsMusicPlayed = (0,_store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed)((state)=>state.setIsMusicPlayed);\n    const isMusicPlayed = (0,_store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed)((state)=>state.isMusicPlayed);\n    const [musicList, setMusicList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const fetchMusicList = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(\"nMi4bznkVQRp7DXtbhqcPrkmqjJTC3VwcS2-zpXeyR6eAzFuJTyK-w\", \"==\"));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setMusicList(data);\n            } catch (error) {\n                console.error(\"There was a problem with the fetch operation:\", error);\n            }\n        };\n        fetchMusicList();\n    }, []);\n    const playMusic = (item)=>{\n        if (audioPlayer && musicPlayed === item) {\n            audioPlayer.pause();\n            audioPlayer.currentTime = 0;\n            setAudioPlayer(null);\n            setIsMusicPlayed(false);\n        } else {\n            if (audioPlayer && musicPlayed !== item) {\n                audioPlayer.pause();\n                audioPlayer.currentTime = 0;\n            }\n            const newAudioPlayer = new Audio(item.url);\n            newAudioPlayer.play();\n            setAudioPlayer(newAudioPlayer);\n            setMusicPlayed(item);\n            setIsMusicPlayed(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"transition-all h-3/4 w-full md:h-1/2 fixed flex-col top-10 right-0 md:w-1/3 bg-secondary rounded-l-lg p-5 space-y-5 text-slate-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                            icon: \"material-symbols-light:music-note-rounded\",\n                            className: \"text-2xl\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Music\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            variant: \"ghost\",\n                            onClick: ()=>setModal(null),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                icon: \"material-symbols-light:close-rounded\",\n                                className: \"text-2xl\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_4__.ScrollArea, {\n                    className: \"h-3/4 w-full border rounded-lg border-slate-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: musicList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>playMusic(item),\n                                        className: \"text-sm flex justify-between cursor-pointer hover:bg-slate-200 items-center p-2 rounded-lg\",\n                                        children: [\n                                            item.title,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                                icon: \"material-symbols-light:\".concat(isMusicPlayed && musicPlayed.url === item.url ? \"stop-rounded\" : \"play-arrow-rounded\"),\n                                                className: \"text-xl\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_5__.Separator, {\n                                        className: \"my-2\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Skripsi\\\\beneran final 2\\\\Archive\\\\components\\\\menus\\\\music-menu.jsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(MusicMenu, \"DQG6rARZUw3cIgtkPJpKMCkVAFc=\", false, function() {\n    return [\n        _store_background__WEBPACK_IMPORTED_MODULE_1__.useGlobalColor,\n        _store_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer,\n        _store_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer,\n        _store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed,\n        _store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed,\n        _store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed,\n        _store_music_played__WEBPACK_IMPORTED_MODULE_3__.useMusicPlayed\n    ];\n});\n_c = MusicMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicMenu);\nvar _c;\n$RefreshReg$(_c, \"MusicMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudXMvbXVzaWMtbWVudS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNFO0FBQ0E7QUFDRztBQUNIO0FBQ2hCO0FBQ1U7QUFDSjtBQUU1QyxNQUFNUyxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQixNQUFNQyxjQUFjWCxpRUFBY0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNRCxXQUFXO0lBQy9ELE1BQU1FLGNBQWNaLG1FQUFjQSxDQUFDLENBQUNXLFFBQVVBLE1BQU1DLFdBQVc7SUFDL0QsTUFBTUMsaUJBQWlCYixtRUFBY0EsQ0FBQyxDQUFDVyxRQUFVQSxNQUFNRSxjQUFjO0lBQ3JFLE1BQU1DLGNBQWNiLG1FQUFjQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1HLFdBQVc7SUFDL0QsTUFBTUMsaUJBQWlCZCxtRUFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNSSxjQUFjO0lBQ3JFLE1BQU1DLG1CQUFtQmYsbUVBQWNBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTUssZ0JBQWdCO0lBQ3pFLE1BQU1DLGdCQUFnQmhCLG1FQUFjQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1NLGFBQWE7SUFDbkUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWMsaUJBQWlCO1lBQ25CLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQW9ELE9BQWpEQyx3REFBZ0QsRUFBQztnQkFDakYsSUFBSSxDQUFDRixTQUFTSyxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNO2dCQUNwQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7Z0JBQ2hDVixhQUFhUztZQUNqQixFQUFFLE9BQU9FLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyxpREFBaURBO1lBQ25FO1FBQ0o7UUFFQVY7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNWSxZQUFZLENBQUNDO1FBQ2YsSUFBSXJCLGVBQWVFLGdCQUFnQm1CLE1BQU07WUFDckNyQixZQUFZc0IsS0FBSztZQUNqQnRCLFlBQVl1QixXQUFXLEdBQUc7WUFDMUJ0QixlQUFlO1lBQ2ZHLGlCQUFpQjtRQUNyQixPQUFPO1lBQ0gsSUFBSUosZUFBZUUsZ0JBQWdCbUIsTUFBTTtnQkFDckNyQixZQUFZc0IsS0FBSztnQkFDakJ0QixZQUFZdUIsV0FBVyxHQUFHO1lBQzlCO1lBRUEsTUFBTUMsaUJBQWlCLElBQUlDLE1BQU1KLEtBQUtLLEdBQUc7WUFDekNGLGVBQWVHLElBQUk7WUFDbkIxQixlQUFldUI7WUFDZnJCLGVBQWVrQjtZQUNmakIsaUJBQWlCO1FBQ3JCO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ3dCO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNyQyxnREFBSUE7NEJBQUNzQyxNQUFLOzRCQUE0Q0QsV0FBVTs7Ozs7O3NDQUNqRSw4REFBQ0U7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ3RDLHlEQUFNQTs0QkFBQ3VDLFNBQVE7NEJBQVFDLFNBQVMsSUFBTXBDLFNBQVM7c0NBQzVDLDRFQUFDTCxnREFBSUE7Z0NBQUNzQyxNQUFLO2dDQUF1Q0QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3BFLDhEQUFDdkMsa0VBQVVBO29CQUFDdUMsV0FBVTs4QkFDbEIsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNWdkIsVUFBVTRCLEdBQUcsQ0FBQyxDQUFDYixNQUFNYyxzQkFDbEI7O2tEQUNJLDhEQUFDUDt3Q0FFR0ssU0FBUyxJQUFNYixVQUFVQzt3Q0FDekJRLFdBQVU7OzRDQUVUUixLQUFLZSxLQUFLOzBEQUNYLDhEQUFDNUMsZ0RBQUlBO2dEQUNEc0MsTUFBTSwwQkFBZ0gsT0FBdEZ6QixpQkFBaUJILFlBQVl3QixHQUFHLEtBQUtMLEtBQUtLLEdBQUcsR0FBRyxpQkFBaUI7Z0RBQ2pHRyxXQUFVOzs7Ozs7O3VDQVBUTTs7Ozs7a0RBVVQsOERBQUM1QywrREFBU0E7d0NBQUNzQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJEO0dBaEZNakM7O1FBQ2tCVCw2REFBY0E7UUFDZEMsK0RBQWNBO1FBQ1hBLCtEQUFjQTtRQUNqQkMsK0RBQWNBO1FBQ1hBLCtEQUFjQTtRQUNaQSwrREFBY0E7UUFDakJBLCtEQUFjQTs7O0tBUGxDTztBQWtGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnVzL211c2ljLW1lbnUuanN4P2YyZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2xvYmFsQ29sb3IgfSBmcm9tIFwiQC9zdG9yZS9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyB1c2VBdWRpb1BsYXllciB9IGZyb20gXCJAL3N0b3JlL2F1ZGlvLXBsYXllclwiO1xuaW1wb3J0IHsgdXNlTXVzaWNQbGF5ZWQgfSBmcm9tIFwiQC9zdG9yZS9tdXNpYy1wbGF5ZWRcIjtcbmltcG9ydCB7IFNjcm9sbEFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhXCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NlcGFyYXRvclwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTXVzaWNNZW51ID0gKHsgc2V0TW9kYWwgfSkgPT4ge1xuICAgIGNvbnN0IGdsb2JhbENvbG9yID0gdXNlR2xvYmFsQ29sb3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxDb2xvcik7XG4gICAgY29uc3QgYXVkaW9QbGF5ZXIgPSB1c2VBdWRpb1BsYXllcigoc3RhdGUpID0+IHN0YXRlLmF1ZGlvUGxheWVyKTtcbiAgICBjb25zdCBzZXRBdWRpb1BsYXllciA9IHVzZUF1ZGlvUGxheWVyKChzdGF0ZSkgPT4gc3RhdGUuc2V0QXVkaW9QbGF5ZXIpO1xuICAgIGNvbnN0IG11c2ljUGxheWVkID0gdXNlTXVzaWNQbGF5ZWQoKHN0YXRlKSA9PiBzdGF0ZS5tdXNpY1BsYXllZCk7XG4gICAgY29uc3Qgc2V0TXVzaWNQbGF5ZWQgPSB1c2VNdXNpY1BsYXllZCgoc3RhdGUpID0+IHN0YXRlLnNldE11c2ljUGxheWVkKTtcbiAgICBjb25zdCBzZXRJc011c2ljUGxheWVkID0gdXNlTXVzaWNQbGF5ZWQoKHN0YXRlKSA9PiBzdGF0ZS5zZXRJc011c2ljUGxheWVkKTtcbiAgICBjb25zdCBpc011c2ljUGxheWVkID0gdXNlTXVzaWNQbGF5ZWQoKHN0YXRlKSA9PiBzdGF0ZS5pc011c2ljUGxheWVkKTtcbiAgICBjb25zdCBbbXVzaWNMaXN0LCBzZXRNdXNpY0xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hNdXNpY0xpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfTVVTSUNfRlVOQ1RJT05fS0VZfT09YCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldE11c2ljTGlzdChkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoTXVzaWNMaXN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcGxheU11c2ljID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGF1ZGlvUGxheWVyICYmIG11c2ljUGxheWVkID09PSBpdGVtKSB7XG4gICAgICAgICAgICBhdWRpb1BsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgYXVkaW9QbGF5ZXIuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgc2V0QXVkaW9QbGF5ZXIobnVsbCk7XG4gICAgICAgICAgICBzZXRJc011c2ljUGxheWVkKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhdWRpb1BsYXllciAmJiBtdXNpY1BsYXllZCAhPT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIGF1ZGlvUGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYXVkaW9QbGF5ZXIuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdBdWRpb1BsYXllciA9IG5ldyBBdWRpbyhpdGVtLnVybCk7XG4gICAgICAgICAgICBuZXdBdWRpb1BsYXllci5wbGF5KCk7XG4gICAgICAgICAgICBzZXRBdWRpb1BsYXllcihuZXdBdWRpb1BsYXllcik7XG4gICAgICAgICAgICBzZXRNdXNpY1BsYXllZChpdGVtKTtcbiAgICAgICAgICAgIHNldElzTXVzaWNQbGF5ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaC0zLzQgdy1mdWxsIG1kOmgtMS8yIGZpeGVkIGZsZXgtY29sIHRvcC0xMCByaWdodC0wIG1kOnctMS8zIGJnLXNlY29uZGFyeSByb3VuZGVkLWwtbGcgcC01IHNwYWNlLXktNSB0ZXh0LXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJtYXRlcmlhbC1zeW1ib2xzLWxpZ2h0Om11c2ljLW5vdGUtcm91bmRlZFwiIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TXVzaWM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWwobnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cIm1hdGVyaWFsLXN5bWJvbHMtbGlnaHQ6Y2xvc2Utcm91bmRlZFwiIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiaC0zLzQgdy1mdWxsIGJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttdXNpY0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwbGF5TXVzaWMoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXgganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLXNsYXRlLTIwMCBpdGVtcy1jZW50ZXIgcC0yIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YG1hdGVyaWFsLXN5bWJvbHMtbGlnaHQ6JHtpc011c2ljUGxheWVkICYmIG11c2ljUGxheWVkLnVybCA9PT0gaXRlbS51cmwgPyAnc3RvcC1yb3VuZGVkJyA6ICdwbGF5LWFycm93LXJvdW5kZWQnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11c2ljTWVudTtcbiJdLCJuYW1lcyI6WyJ1c2VHbG9iYWxDb2xvciIsInVzZUF1ZGlvUGxheWVyIiwidXNlTXVzaWNQbGF5ZWQiLCJTY3JvbGxBcmVhIiwiU2VwYXJhdG9yIiwiSWNvbiIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXVzaWNNZW51Iiwic2V0TW9kYWwiLCJnbG9iYWxDb2xvciIsInN0YXRlIiwiYXVkaW9QbGF5ZXIiLCJzZXRBdWRpb1BsYXllciIsIm11c2ljUGxheWVkIiwic2V0TXVzaWNQbGF5ZWQiLCJzZXRJc011c2ljUGxheWVkIiwiaXNNdXNpY1BsYXllZCIsIm11c2ljTGlzdCIsInNldE11c2ljTGlzdCIsImZldGNoTXVzaWNMaXN0IiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BWlVSRV9NVVNJQ19GVU5DVElPTl9LRVkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJwbGF5TXVzaWMiLCJpdGVtIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIm5ld0F1ZGlvUGxheWVyIiwiQXVkaW8iLCJ1cmwiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsInAiLCJ2YXJpYW50Iiwib25DbGljayIsIm1hcCIsImluZGV4IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menus/music-menu.jsx\n"));

/***/ })

});