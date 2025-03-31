import Segment from "./Segment";
import React from "react"; // Removed useEffect, useState
import defaultCharMap, { CharToDigit } from "../utils/charToDigit"; // Use default map for fallback internally

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;
const DEFAULT_CHAR = "-"; // Character to use if the provided char is invalid

// Helper function to check if a value is a valid segment array [0, 1, ...]
const isValidSegmentArray = (arr: any): arr is number[] => {
    return Array.isArray(arr) && arr.every((item) => typeof item === "number");
};

type DigitType = {
    char: string; // The character prop received from Display
    color: string;
    height: number;
    skew: boolean;
    charMap?: CharToDigit; // Optional custom map passed from Display
};

export const Digit = ({
    char, // No default needed here, logic below handles invalid/missing char
    color = "red",
    height = 250,
    skew = false,
    charMap = defaultCharMap, // Use the default map if none is provided via props
}: DigitType) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0", // Keep original style calculation
        boxSizing: "border-box",
    } as React.CSSProperties;

    // --- Calculate segments to render directly based on current props ---
    let segmentsToRender: number[];

    // 1. Determine the map to use (prop or default)
    const currentMap = charMap || defaultCharMap;

    // 2. Try to get segments for the actual character prop `char`
    //    Ensure `char` is a string and exists as a key in the map.
    const charSegments =
        typeof char === "string" && char in currentMap
            ? currentMap[char]
            : undefined; // Explicitly undefined if lookup fails

    // 3. Validate the result or use the default fallback character's segments
    if (isValidSegmentArray(charSegments)) {
        // Use segments if they are valid
        segmentsToRender = charSegments;
    } else {
        // Fallback: Try to get segments for the DEFAULT_CHAR ('-')
        const fallbackSegments = currentMap[DEFAULT_CHAR];
        if (isValidSegmentArray(fallbackSegments)) {
            // Use fallback segments if they are valid
            segmentsToRender = fallbackSegments;
            // Optional: Log warning if the original char was unexpected but fallback is used
            // if (char !== DEFAULT_CHAR) { // Avoid warning if '-' was intended
            //     console.warn(`react-7-segment-display: Character "${char}" not found in charMap. Displaying default "${DEFAULT_CHAR}".`);
            // }
        } else {
            // Ultimate Fallback: If even DEFAULT_CHAR segments are invalid (problem with map!)
            console.error(
                `react-7-segment-display: Invalid segment data for char "${char}" AND default char "${DEFAULT_CHAR}". Check charMap.`,
            );
            segmentsToRender = []; // Assign empty array to prevent .map error
        }
    }
    // --- End segment calculation ---

    // Now, `segmentsToRender` is guaranteed to be an array (possibly empty in case of error)

    return (
        <div className="digit" style={style}>
            {segmentsToRender.map((active, index) => {
                // Safety check: Ensure index is valid for the 'letters' array
                if (index >= letters.length) {
                    console.warn(
                        `react-7-segment-display: Segment index ${index} out of bounds for letter mapping.`,
                    );
                    return null; // Don't render segment if index is bad
                }
                const letter = letters[index];
                return (
                    <Segment
                        key={letter}
                        active={active === 1}
                        size={height / 12.5} // Keep original size calculation
                        color={color}
                        id={letter}
                        skew={skew}
                    />
                );
            })}
        </div>
    );
};
