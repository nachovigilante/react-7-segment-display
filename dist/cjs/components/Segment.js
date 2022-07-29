"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const segmentStyle_1 = require("../utils/segmentStyle");
const Segment = ({ active, color, size, id, skew }) => {
    const ss = skew ? segmentStyle_1.skewedSegmentStyle[id] : segmentStyle_1.segmentStyle[id];
    const outerStyle = {
        filter: active
            ? `drop-shadow(0px 0px ${size * 0.3}px ${color})`
            : "none",
        padding: size * 0.3,
        width: "fit-content",
        position: ss.id ? "absolute" : "relative",
        transform: ss.transform,
        marginTop: `${size * ss.marginTop}px`,
        marginLeft: `${size * ss.marginLeft}px`,
        zIndex: "2",
    };
    const innerStyle = {
        backgroundColor: color,
        filter: active
            ? "opacity(1) grayscale(0)"
            : "opacity(0.3) grayscale(0.7)",
        color: color,
        clipPath: ss.clipPath,
        WebkitClipPath: ss.clipPath,
        MozClipPath: ss.clipPath,
        height: `${size}px`,
        width: `${size * 5}px`,
    };
    return (react_1.default.createElement("div", { style: outerStyle },
        react_1.default.createElement("div", { style: innerStyle })));
};
exports.default = Segment;
//# sourceMappingURL=Segment.js.map