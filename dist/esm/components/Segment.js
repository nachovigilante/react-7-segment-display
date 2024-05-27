import React from "react";
import { segmentStyle, skewedSegmentStyle } from "../utils/segmentStyle";
const Segment = ({ active, color, size, id, skew }) => {
    const ss = skew ? skewedSegmentStyle[id] : segmentStyle[id];
    const outerStyle = {
        filter: active ? `drop-shadow(0px 0px ${size * 0.3}px ${color})` : "none",
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
        filter: active ? "opacity(1) grayscale(0)" : "opacity(0.3) grayscale(0.7)",
        color: color,
        clipPath: ss.clipPath,
        WebkitClipPath: ss.clipPath,
        MozClipPath: ss.clipPath,
        height: `${size}px`,
        width: `${size * 5}px`,
    };
    return (React.createElement("div", { style: outerStyle },
        React.createElement("div", { style: innerStyle })));
};
export default Segment;
//# sourceMappingURL=Segment.js.map