"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digit = void 0;
const Segment_1 = __importDefault(require("./Segment"));
const react_1 = __importStar(require("react"));
const charToDigit = {
    "0": [1, 1, 1, 1, 1, 1, 0],
    "1": [0, 1, 1, 0, 0, 0, 0],
    "2": [1, 1, 0, 1, 1, 0, 1],
    "3": [1, 1, 1, 1, 0, 0, 1],
    "4": [0, 1, 1, 0, 0, 1, 1],
    "5": [1, 0, 1, 1, 0, 1, 1],
    "6": [1, 0, 1, 1, 1, 1, 1],
    "7": [1, 1, 1, 0, 0, 0, 0],
    "8": [1, 1, 1, 1, 1, 1, 1],
    "9": [1, 1, 1, 1, 0, 1, 1],
    "@": [1, 1, 1, 1, 1, 0, 1],
    a: [1, 1, 1, 0, 1, 1, 1],
    b: [0, 0, 1, 1, 1, 1, 1],
    c: [1, 0, 0, 1, 1, 1, 0],
    d: [0, 1, 1, 1, 1, 0, 1],
    e: [1, 0, 0, 1, 1, 1, 1],
    f: [1, 0, 0, 0, 1, 1, 1],
    "-": [0, 0, 0, 0, 0, 0, 1],
};
const letters = ["A", "B", "C", "D", "E", "F", "G"];
const Digit = ({ char = "-", color = "red", height = 250, }) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
    };
    const [activeArray, setActiveArray] = (0, react_1.useState)(char ? charToDigit[char] : [0, 0, 0, 0, 0, 0, 1]);
    (0, react_1.useEffect)(() => {
        setActiveArray(char ? charToDigit[char] : [0, 0, 0, 0, 0, 0, 1]);
    }, [char]);
    return (react_1.default.createElement("div", { className: "digit", style: style }, activeArray.map((active, index) => {
        const letter = letters[index];
        return (react_1.default.createElement(Segment_1.default, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter }));
    })));
};
exports.Digit = Digit;
//# sourceMappingURL=Digit.js.map