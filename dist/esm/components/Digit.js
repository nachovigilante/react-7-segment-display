import Segment from "./Segment";
import React, { useEffect, useState } from "react";
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
export const Digit = ({ char = "-", color = "red", height = 250, }) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
    };
    const [activeArray, setActiveArray] = useState(char ? charToDigit[char] : [0, 0, 0, 0, 0, 0, 1]);
    useEffect(() => {
        setActiveArray(char ? charToDigit[char] : [0, 0, 0, 0, 0, 0, 1]);
    }, [char]);
    return (React.createElement("div", { className: "digit", style: style }, activeArray.map((active, index) => {
        const letter = letters[index];
        return (React.createElement(Segment, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter }));
    })));
};
//# sourceMappingURL=Digit.js.map