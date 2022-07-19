import { Digit } from "./Digit.jsx";
import { useEffect, useState } from "react";

export const Display = ({
    count = 2,
    height = 250,
    value = null,
    color = "red",
    backgroundColor = null,
}) => {
    const [digits, setDigits] = useState([]);

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

    useEffect(() => {
        let newDigits = value.toString().split("");

        if (count < value.toString().length) {
            newDigits = null;
        }

        if (count > value.toString().length) {
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
                              />
                          );
                      })}
            </div>
        </div>
    );
};
