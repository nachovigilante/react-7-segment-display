import Segment from "./Segment";
import React, { useEffect, useState } from "react";

import charToDigit, { CharToDigit } from "../utils/charToDigit";

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;

const DEFAULT_CHAR = "-";

type DigitType = {
    char: string;
    color: string;
    height: number;
    skew: boolean;
    charMap?: CharToDigit;
};


export const Digit = ({
    char = DEFAULT_CHAR,
    color = "red",
    height = 250,
    skew = false,
    charMap = charToDigit,
}: DigitType) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    } as React.CSSProperties;

    const [activeArray, setActiveArray] = useState(
        char && char in charMap ? charMap[char] : charMap[DEFAULT_CHAR],
    );

    useEffect(() => {
        setActiveArray(char && char in charMap ? charMap[char] : charMap[DEFAULT_CHAR]);
    }, [char]);

    return (
        <div className="digit" style={style}>
            {activeArray.map((active, index) => {
                const letter = letters[index];
                return (
                    <Segment
                        key={letter}
                        active={active === 1}
                        size={height / 12.5}
                        color={color}
                        id={letter}
                        skew={skew}
                    />
                );
            })}
        </div>
    );
};
