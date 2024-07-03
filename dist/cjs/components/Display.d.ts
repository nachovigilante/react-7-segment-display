declare type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
    skew: boolean;
};
export declare const Display: ({ count, height, value, color, backgroundColor, skew, }: DisplayType) => JSX.Element;
export {};
