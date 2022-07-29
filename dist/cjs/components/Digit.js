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
const charToDigit_1 = __importDefault(require("../utils/charToDigit"));
const letters = ["A", "B", "C", "D", "E", "F", "G"];
const Digit = ({ char = "-", color = "red", height = 250, skew = false, }) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    };
    const [activeArray, setActiveArray] = (0, react_1.useState)(char ? charToDigit_1.default[char] : charToDigit_1.default["-"]);
    (0, react_1.useEffect)(() => {
        setActiveArray(char ? charToDigit_1.default[char] : charToDigit_1.default["-"]);
    }, [char]);
    return (react_1.default.createElement("div", { className: "digit", style: style }, activeArray.map((active, index) => {
        const letter = letters[index];
        return (react_1.default.createElement(Segment_1.default, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter, skew: skew }));
    })));
};
exports.Digit = Digit;
//# sourceMappingURL=Digit.js.map