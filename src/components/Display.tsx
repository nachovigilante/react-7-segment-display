import { Digit } from "./Digit";
import React, { useEffect, useState } from "react";

type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
    skew: boolean;
};

export const Display = ({
    count = 2,
    height = 250,
    value = null,
    color = "red",
    backgroundColor,
    skew = false,
}: DisplayType) => {
    const [digits, setDigits] = useState([]);

    const [actualValue, setActualValue] = useState(value) as [any, any];

    useEffect(() => {
        setTimeout(() => {
            console.log(actualValue);
            setActualValue((v: any) => parseInt(v) + 1);
        }, 500);
    }, [actualValue]);

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
        let newDigits = actualValue && actualValue.toString().split("");

        if (!actualValue || count < actualValue.toString().length) {
            newDigits = null;
        }

        if (actualValue && count > actualValue.toString().length) {
            for (let i = 0; i < count - actualValue.toString().length; i++) {
                newDigits.unshift("0");
            }
        }

        setDigits(newDigits);
    }, [count, actualValue]);

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
