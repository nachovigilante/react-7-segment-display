declare type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
};
export declare const Display: ({ count, height, value, color, backgroundColor, }: DisplayType) => JSX.Element;
export {};
