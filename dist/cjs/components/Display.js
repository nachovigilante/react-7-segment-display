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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Digit_1 = require("./Digit");
const react_1 = __importStar(require("react"));
const Display = ({ count = 2, height = 250, value = null, color = "red", backgroundColor, skew = false, }) => {
    const [digits, setDigits] = (0, react_1.useState)([]);
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        padding: "20px",
    };
    const displayStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        padding: "20px",
        color: "white",
    };
    (0, react_1.useEffect)(() => {
        let newDigits = value && value.toString().split("");
        if (!value || count < value.toString().length) {
            newDigits = null;
        }
        if (value && count > value.toString().length) {
            for (let i = 0; i < count - value.toString().length; i++) {
                newDigits.unshift("0");
            }
        }
        setDigits(newDigits);
    }, [count, value]);
    return (react_1.default.createElement("div", { className: "display", style: displayStyle },
        react_1.default.createElement("div", { className: "display-digits", style: style }, digits
            ? digits.map((digit, index) => {
                return (react_1.default.createElement(Digit_1.Digit, { key: index, char: digit, height: height, color: color, skew: skew }));
            })
            : Array.from(Array(count).keys()).map((index) => {
                return (react_1.default.createElement(Digit_1.Digit, { key: index, char: "-", height: height, color: color, skew: skew }));
            }))));
};
exports.Display = Display;
//# sourceMappingURL=Display.js.map