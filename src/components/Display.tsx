import { Digit } from "./Digit";
import React, { useEffect, useState } from "react";
import charToDigit, { CharToDigit } from "../utils/charToDigit";

type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
    skew: boolean;
    charMap?: CharToDigit;
};

export const Display = ({
    count = 2,
    height = 250,
    value = null,
    color = "red",
    backgroundColor,
    skew = false,
    charMap = charToDigit,
}: DisplayType) => {
    const [digits, setDigits] = useState([]);

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        padding: "20px",
    } as React.CSSProperties;

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
    } as React.CSSProperties;

    useEffect(() => {
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

    return (
        <div className="display" style={displayStyle}>
            <div className="display-digits" style={style}>
                {digits
                    ? digits.map((digit, index) => {
                          return (
                              <Digit
                                  key={index}
                                  char={digit}
                                  height={height}
                                  color={color}
                                  skew={skew}
                                  charMap={charMap}
                              />
                          );
                      })
                    : Array.from(Array(count).keys()).map((index) => {
                          return (
                              <Digit
                                  key={index}
                                  char="-"
                                  height={height}
                                  color={color}
                                  skew={skew}
                              />
                          );
                      })}
            </div>
        </div>
    );
};
