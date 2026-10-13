(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Page() {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [interpretation, setInterpretation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sliderValue, setSliderValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const resultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const questions = [
        {
            question: 'My thoughts race through my mind.',
            marking_polarity: true
        },
        {
            question: 'I find it hard to mentally relax.',
            marking_polarity: true
        },
        {
            question: "My mind feels constantly 'busy'.",
            marking_polarity: true
        },
        {
            question: 'I have difficulty stopping my thoughts when I want to sleep.',
            marking_polarity: true
        },
        {
            question: 'I feel an inner urge to keep myself occupied.',
            marking_polarity: true
        },
        {
            question: 'I feel restless even when sitting quietly.',
            marking_polarity: true
        },
        {
            question: 'My attention easily drifts away during conversations.',
            marking_polarity: true
        },
        {
            question: 'I find it difficult to concentrate on what someone is saying.',
            marking_polarity: true
        },
        {
            question: 'I often lose track of my thoughts mid-task.',
            marking_polarity: true
        },
        {
            question: 'I feel mentally disorganized.',
            marking_polarity: true
        },
        {
            question: 'I jump quickly from one thought to another.',
            marking_polarity: true
        },
        {
            question: 'I struggle to keep my attention steady on one thing.',
            marking_polarity: true
        },
        {
            question: "I often think about unrelated things when I'm supposed to be focused.",
            marking_polarity: true
        },
        {
            question: 'I tend to act on ideas before fully thinking them through.',
            marking_polarity: true
        },
        {
            question: 'I get mentally impatient if things move too slowly.',
            marking_polarity: true
        },
        {
            question: 'I feel a strong need to be mentally stimulated all the time.',
            marking_polarity: true
        },
        {
            question: 'I notice my thoughts interfere with getting things done.',
            marking_polarity: true
        },
        {
            question: 'I have difficulty putting worries or ideas aside.',
            marking_polarity: true
        },
        {
            question: 'My thoughts often make me feel unsettled.',
            marking_polarity: true
        },
        {
            question: 'I feel mentally impulsive.',
            marking_polarity: true
        },
        {
            question: "My mind feels 'scattered' or hard to organize.",
            marking_polarity: true
        },
        // Reverse-scored items (higher = less restlessness)
        {
            question: 'I am organized.',
            marking_polarity: false
        },
        {
            question: 'I feel mentally calm.',
            marking_polarity: false
        },
        {
            question: 'I can focus well on tasks.',
            marking_polarity: false
        }
    ];
    const scaleLabels = [
        'Not at all true',
        'Mostly not true',
        'Slightly not true',
        'Neutral',
        'Slightly true',
        'Mostly true',
        'Very true'
    ];
    // Initialize answers array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setAnswers(new Array(questions.length).fill(null));
            setIsLoading(false);
        }
    }["Page.useEffect"], []);
    const handleAnswer = (value)=>{
        const newAnswers = [
            ...answers
        ];
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSliderValue(newAnswers[currentQuestion + 1] ?? 4);
        } else {
            calculateScore(newAnswers);
            setShowResult(true);
            // Scroll to results
            setTimeout(()=>{
                resultRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    };
    const calculateScore = (answers)=>{
        let total = 0;
        questions.forEach((question, index)=>{
            const response = answers[index];
            if (response !== null) {
                total += question.marking_polarity ? response : 8 - response; // Reverse score for certain questions
            }
        });
        setScore(total);
        // Set interpretation based on score
        if (total < 40) {
            setInterpretation('Very low inner restlessness. This is unusually low and may indicate high levels of mental calmness.');
        } else if (total < 70) {
            setInterpretation('Low to moderate inner restlessness. Typical for neurotypical adults.');
        } else if (total < 90) {
            setInterpretation('Moderate inner restlessness. May indicate subclinical levels of restlessness or mild ADHD traits.');
        } else if (total < 110) {
            setInterpretation('High inner restlessness. Typical for adults with ADHD.');
        } else {
            setInterpretation('Very high inner restlessness. Commonly seen in individuals with significant ADHD symptoms.');
        }
    };
    const handleNext = ()=>{
        handleAnswer(sliderValue);
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSliderValue(answers[currentQuestion - 1] ?? 4);
        }
    };
    const resetAssessment = ()=>{
        setCurrentQuestion(0);
        setAnswers(new Array(questions.length).fill(null));
        setShowResult(false);
        setScore(0);
        setSliderValue(4);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const progress = Math.round((currentQuestion + 1) / questions.length * 100);
    const percentage = score > 0 ? Math.round((score - 24) / (168 - 24) * 100) : 0;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                        lineNumber: 167,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading assessment..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                lineNumber: 166,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
            lineNumber: 165,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center px-6 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:mx-2xl lg:mx-3xl max-w-3xl overflow-hidden rounded-2xl border-2 border-gray-200 bg-white/40 shadow-xl backdrop-blur-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 border-b border-gray-200 pb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-800 sm:text-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-blue-600",
                                    children: "Internal Restlessness"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-blue-600",
                                    children: "Scale (IRS) Assessment"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-3 max-w-md text-base text-gray-600",
                            children: "Research Author: Dr. Lisa Weyandt and Colleagues"
                        }, void 0, false, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 border-l-4 border-red-400 bg-red-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Note:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this),
                            " I am not a doctor or mental health professional. I just recreated the original questions and made a web application for it."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                        lineNumber: 188,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 187,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 border-l-4 border-yellow-400 bg-yellow-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-yellow-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Disclaimer:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this),
                            " Be aware these are not the original questions. This assessment is for educational and research purposes only. It is not a diagnostic tool. For clinical use, please consult with a qualified professional."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                        lineNumber: 195,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 194,
                    columnNumber: 17
                }, this),
                !showResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 mb-6 rounded-xl border-2 border-gray-100 bg-white/50 p-6 shadow-lg backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-blue-600",
                                    children: [
                                        "Question ",
                                        currentQuestion + 1,
                                        " of ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: [
                                        Math.round(progress),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 205,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 h-2 w-full rounded-full bg-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded-full bg-blue-600 transition-all duration-300",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                lineNumber: 215,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-8 text-center text-lg font-medium text-gray-800",
                                    children: questions[currentQuestion].question
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, this),
                                "cc",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "1",
                                            max: "7",
                                            step: "1",
                                            value: sliderValue,
                                            onChange: (e)=>setSliderValue(parseInt(e.target.value)),
                                            className: "h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200",
                                            style: {
                                                background: `linear-gradient(to right, #4a6fa5 0%, #4a6fa5 ${(sliderValue - 1) / 6 * 100}%, #e9ecef ${(sliderValue - 1) / 6 * 100}%, #e9ecef 100%)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex justify-between text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-left",
                                                    children: "Not at all true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-right",
                                                    children: "Very true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 flex justify-between text-xs text-gray-400",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7
                                            ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-4 cursor-pointer text-center ${sliderValue === num ? 'font-bold text-blue-600' : ''}`,
                                                    onClick: ()=>setSliderValue(num),
                                                    children: num
                                                }, num, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-center text-sm font-medium text-blue-600",
                                            children: scaleLabels[sliderValue - 1]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrevious,
                                            disabled: currentQuestion === 0,
                                            className: `rounded-lg px-4 py-2 font-medium transition-colors ${currentQuestion === 0 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600 hover:bg-blue-50'}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNext,
                                            className: "rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700",
                                            children: currentQuestion === questions.length - 1 ? 'See Results' : 'Next'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 221,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 204,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 my-4 overflow-hidden rounded-xl border-2 border-gray-100 bg-white/50 shadow-lg backdrop-blur-sm",
                    ref: resultRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Assessment Complete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "opacity-90",
                                    children: "Your IRS assessment results"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 286,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-white/40 to-white/20 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 text-sm font-medium text-gray-500",
                                            children: "Your Score"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-1 text-5xl font-bold text-blue-600",
                                            children: score
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 text-sm text-gray-500",
                                            children: "out of 168 (maximum possible score)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto h-4 w-full max-w-md overflow-hidden rounded-full bg-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 rounded-full bg-blue-600 transition-all duration-1000 ease-out",
                                                style: {
                                                    width: `${percentage}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 text-lg font-medium text-gray-900",
                                            children: "Score Interpretation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border-2 border-gray-100 bg-white/70 p-4 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-sm font-medium text-gray-700",
                                                            children: "Your Level:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${score < 40 ? 'bg-green-100 text-green-800' : score < 70 ? 'bg-yellow-100 text-yellow-800' : score < 90 ? 'bg-amber-100 text-amber-800' : score < 110 ? 'bg-pink-100 text-pink-800' : 'bg-red-100 text-red-800'}`,
                                                            children: score < 40 ? 'Very Low' : score < 70 ? 'Low to Moderate' : score < 90 ? 'Moderate' : score < 110 ? 'High' : 'Very High'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-800",
                                                    children: interpretation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-sm text-gray-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "24-69:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Typical range for neurotypical adults"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "70-89:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Borderline range, may indicate subclinical symptoms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "90-110:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Typical range for adults with ADHD"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "110-168:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "High range, often seen in significant ADHD symptoms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 text-lg font-medium text-gray-900",
                                            children: "Your Responses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent max-h-96 space-y-4 overflow-y-auto pr-2",
                                            children: questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-2 rounded-xl border-2 border-gray-100 bg-white/60 p-4 shadow-sm backdrop-blur-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-800",
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-2 text-sm font-medium text-gray-800",
                                                                        children: question.question
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mb-1 flex justify-between text-xs text-gray-500",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Not at all true"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                        lineNumber: 397,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Very true"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                        lineNumber: 398,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                lineNumber: 396,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-2 w-full overflow-hidden rounded-full bg-gray-200",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-full bg-blue-600 transition-all duration-500 ease-out",
                                                                                    style: {
                                                                                        width: `${(answers[index] || 0) / 7 * 100}%`
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                    lineNumber: 401,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                lineNumber: 400,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-right text-sm font-medium text-blue-600",
                                                                                children: answers[index] ? scaleLabels[answers[index] - 1] : 'Not answered'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                                lineNumber: 408,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 45
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 mb-6 rounded-lg border-t-2 border-r-2 border-b-2 border-l-4 border-yellow-100 border-yellow-400 bg-yellow-50/80 p-4 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-5 w-5 text-yellow-400",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-medium text-yellow-800",
                                                        children: "Important Note"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-yellow-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "This assessment is not a diagnostic tool. Only a qualified healthcare professional can diagnose ADHD or any other medical condition. This tool is for informational purposes only."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center gap-4 border-t border-white/20 pt-6 sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetAssessment,
                                            className: "inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "mr-2 -ml-1 h-5 w-5",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 37
                                                }, this),
                                                "Take the Test Again"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.researchgate.net/profile/Lisa-Weyandt-2",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-2.5 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "mr-2 -ml-1 h-5 w-5 text-gray-500",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                        lineNumber: 485,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 37
                                                }, this),
                                                "Research Author"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 291,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 282,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 border-t border-white/20 bg-white/10 p-6 text-center text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This assessment is based on the Internal Restlessness Scale (IRS) developed by Dr. Lisa Weyandt and colleagues."
                        }, void 0, false, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 500,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: [
                                new Date().getFullYear(),
                                " WKDKavishka. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                            lineNumber: 504,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
                    lineNumber: 499,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
            lineNumber: 176,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/IRS-Calculate_Inner_restlessnes_score/page.tsx",
        lineNumber: 175,
        columnNumber: 9
    }, this);
}
_s(Page, "OjpMXumBc6DU4o2kck2+QqKv9Ns=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_IRS-Calculate_Inner_restlessnes_score_page_tsx_7ddbec3b._.js.map