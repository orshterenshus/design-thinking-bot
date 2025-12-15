(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/project/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProjectContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "2789a9ed33ca000d0346a37d51a728bcd551495dbd2f8b21d947c6e98e2ebace") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2789a9ed33ca000d0346a37d51a728bcd551495dbd2f8b21d947c6e98e2ebace";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("name") || "Project";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const initialName = t0;
    let t1;
    if ($[3] !== searchParams) {
        t1 = searchParams.get("phase") || "Empathize";
        $[3] = searchParams;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const initialPhase = t1;
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPhase);
    const t2 = `Hello! I am the Socratic Bot accompanying the project. Currently, we are in the <strong>${initialPhase}</strong> phase. <br><br>How can you enter your user's inner circle?`;
    let t3;
    if ($[5] !== t2) {
        t3 = [
            {
                sender: "Bot",
                text: t2
            }
        ];
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_ProjectContentUseEffect, t5);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProjectContent[changePhase]": (phase)=>{
                const formattedPhase = phase.charAt(0).toUpperCase() + phase.slice(1);
                setCurrentPhase(formattedPhase);
                setMessages({
                    "ProjectContent[changePhase > setMessages()]": (prev)=>[
                            ...prev,
                            {
                                sender: "Bot",
                                text: `Switched to <strong>${formattedPhase}</strong> phase. What are your goals for this step?`
                            }
                        ]
                }["ProjectContent[changePhase > setMessages()]"]);
            }
        })["ProjectContent[changePhase]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const changePhase = t6;
    let t7;
    if ($[10] !== chatInput) {
        t7 = ({
            "ProjectContent[sendMessage]": (e)=>{
                e.preventDefault();
                if (!chatInput.trim()) {
                    return;
                }
                setMessages({
                    "ProjectContent[sendMessage > setMessages()]": (prev_0)=>[
                            ...prev_0,
                            {
                                sender: "You",
                                text: chatInput
                            }
                        ]
                }["ProjectContent[sendMessage > setMessages()]"]);
                const userText = chatInput;
                setChatInput("");
                setTimeout({
                    "ProjectContent[sendMessage > setTimeout()]": ()=>{
                        let botReply = "That's an interesting perspective. Tell me more.";
                        if (userText.toLowerCase().includes("hello")) {
                            botReply = "Hi there! Ready to design?";
                        }
                        setMessages({
                            "ProjectContent[sendMessage > setTimeout() > setMessages()]": (prev_1)=>[
                                    ...prev_1,
                                    {
                                        sender: "Bot",
                                        text: botReply
                                    }
                                ]
                        }["ProjectContent[sendMessage > setTimeout() > setMessages()]"]);
                    }
                }["ProjectContent[sendMessage > setTimeout()]"], 1000);
            }
        })["ProjectContent[sendMessage]"];
        $[10] = chatInput;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const sendMessage = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ProjectContent[handleFileUpload]": (e_0)=>{
                if (e_0.target.files && e_0.target.files.length > 0) {
                    const newFiles = Array.from(e_0.target.files).map(_ProjectContentHandleFileUploadAnonymous);
                    setFiles({
                        "ProjectContent[handleFileUpload > setFiles()]": (prev_2)=>[
                                ...prev_2,
                                ...newFiles
                            ]
                    }["ProjectContent[handleFileUpload > setFiles()]"]);
                }
            }
        })["ProjectContent[handleFileUpload]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const handleFileUpload = t8;
    let t9;
    if ($[13] !== currentPhase) {
        t9 = ({
            "ProjectContent[getStepClass]": (stepPhase)=>{
                const steps = [
                    "Empathize",
                    "Define",
                    "Ideate",
                    "Prototype",
                    "Test"
                ];
                const currentIndex = steps.indexOf(currentPhase);
                const stepIndex = steps.indexOf(stepPhase);
                if (stepIndex === currentIndex) {
                    return "bg-blue-600 text-white";
                } else {
                    if (stepIndex < currentIndex) {
                        return "bg-green-500 text-white";
                    } else {
                        return "bg-white border-2 border-gray-300 text-gray-500";
                    }
                }
            }
        })["ProjectContent[getStepClass]"];
        $[13] = currentPhase;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const getStepClass = t9;
    let t10;
    if ($[15] !== router) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 flex items-center font-bold text-blue-600 text-xl cursor-pointer",
            onClick: {
                "ProjectContent[<div>.onClick]": ()=>router.push("/project-management")
            }["ProjectContent[<div>.onClick]"],
            children: "DesignBot"
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[15] = router;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:ml-6 sm:flex sm:space-x-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                children: "Workspace"
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 175,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-white shadow-sm border-b border-gray-200 z-10 shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            t10,
                            t11
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/page.jsx",
                        lineNumber: 182,
                        columnNumber: 185
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 182,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 182,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== initialName) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4",
            children: [
                "Project Progress: ",
                initialName
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[20] = initialName;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute w-full top-1/2 transform -translate-y-1/2 bg-gray-200 h-1 z-0"
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== getStepClass) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between w-full relative",
            children: [
                t14,
                [
                    "Empathize",
                    "Define",
                    "Ideate",
                    "Prototype",
                    "Test"
                ].map({
                    "ProjectContent[(anonymous)()]": (phase_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-center cursor-pointer",
                            onClick: {
                                "ProjectContent[(anonymous)() > <div>.onClick]": ()=>changePhase(phase_0)
                            }["ProjectContent[(anonymous)() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-10 h-10 rounded-full flex items-center justify-center mx-auto font-bold shadow-lg transition-all ${getStepClass(phase_0)}`,
                                    children: idx + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/page.jsx",
                                    lineNumber: 208,
                                    columnNumber: 61
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium mt-2 block text-gray-600",
                                    children: phase_0
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/page.jsx",
                                    lineNumber: 208,
                                    columnNumber: 219
                                }, this)
                            ]
                        }, phase_0, true, {
                            fileName: "[project]/src/app/project/page.jsx",
                            lineNumber: 206,
                            columnNumber: 60
                        }, this)
                }["ProjectContent[(anonymous)()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[23] = getStepClass;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== currentPhase) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-800",
            children: [
                "Phase: ",
                currentPhase
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[28] = currentPhase;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-2 text-sm bg-indigo-50 text-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-100 transition-colors",
            children: "Share Project"
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors",
            onClick: _ProjectContentDivOnClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-blue-600 hover:text-blue-500 focus:outline-none cursor-pointer",
                            children: "Upload a file"
                        }, void 0, false, {
                            fileName: "[project]/src/app/project/page.jsx",
                            lineNumber: 249,
                            columnNumber: 207
                        }, this),
                        "or drag and drop"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 249,
                    columnNumber: 165
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "file-upload",
                    type: "file",
                    className: "hidden",
                    multiple: true,
                    onChange: handleFileUpload
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 249,
                    columnNumber: 345
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== files) {
        t21 = files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-medium text-gray-700 mb-3",
                    children: "Uploaded Files:"
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 256,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: files.map(_ProjectContentFilesMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 256,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 256,
            columnNumber: 31
        }, this);
        $[34] = files;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t19 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow p-6 mb-6",
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t16 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 overflow-y-auto p-6 bg-gray-50",
            children: [
                t16,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-gray-200 bg-blue-600 text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "Socratic Bot"
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 282,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-blue-100",
                    children: "Design Thinking Mentor"
                }, void 0, false, {
                    fileName: "[project]/src/app/project/page.jsx",
                    lineNumber: 282,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== messages) {
        t25 = messages.map(_ProjectContentMessagesMap);
        $[43] = messages;
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[45] = t25;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "ProjectContent[<input>.onChange]": (e_1)=>setChatInput(e_1.target.value)
        })["ProjectContent[<input>.onChange]"];
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== chatInput) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            className: "flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Type a message...",
            value: chatInput,
            onChange: t27
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[48] = chatInput;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition",
            children: "Send"
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== sendMessage || $[52] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-gray-200 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: sendMessage,
                className: "flex gap-2",
                children: [
                    t28,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 329,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[51] = sendMessage;
        $[52] = t28;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== t26 || $[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl z-20",
            children: [
                t24,
                t26,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[54] = t26;
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t23 || $[58] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 overflow-hidden",
            children: [
                t23,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[57] = t23;
        $[58] = t31;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t12 || $[61] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 text-gray-800 font-sans h-screen flex flex-col overflow-hidden",
            children: [
                t12,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[60] = t12;
        $[61] = t32;
        $[62] = t33;
    } else {
        t33 = $[62];
    }
    return t33;
}
_s(ProjectContent, "YGhvKhdwzeyh+mptIy5CMYl28Ag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectContent;
function _ProjectContentMessagesMap(msg, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${msg.sender === "Bot" ? "bg-blue-600" : "bg-green-500"}`,
                children: msg.sender === "Bot" ? "Bot" : "You"
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 366,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-3 bg-white p-3 rounded-lg shadow-sm text-sm text-gray-700 border border-gray-100",
                dangerouslySetInnerHTML: {
                    __html: msg.text
                }
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 366,
                columnNumber: 271
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/project/page.jsx",
        lineNumber: 366,
        columnNumber: 10
    }, this);
}
function _ProjectContentFilesMap(f, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "col-span-1 bg-white border rounded-lg shadow-sm p-4 flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-100 p-2 rounded text-blue-600 font-bold text-xs",
                children: "FILE"
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 371,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-900",
                        children: f.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/page.jsx",
                        lineNumber: 371,
                        columnNumber: 209
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: f.size
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/page.jsx",
                        lineNumber: 371,
                        columnNumber: 270
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 371,
                columnNumber: 187
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/project/page.jsx",
        lineNumber: 371,
        columnNumber: 10
    }, this);
}
function _ProjectContentDivOnClick() {
    return document.getElementById("file-upload")?.click();
}
function _ProjectContentHandleFileUploadAnonymous(file) {
    return {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        date: "Just now"
    };
}
function _ProjectContentUseEffect() {}
function ProjectPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2789a9ed33ca000d0346a37d51a728bcd551495dbd2f8b21d947c6e98e2ebace") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2789a9ed33ca000d0346a37d51a728bcd551495dbd2f8b21d947c6e98e2ebace";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 394,
                columnNumber: 30
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContent, {}, void 0, false, {
                fileName: "[project]/src/app/project/page.jsx",
                lineNumber: 394,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/project/page.jsx",
            lineNumber: 394,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = ProjectPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectContent");
__turbopack_context__.k.register(_c1, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_3cafa026._.js.map