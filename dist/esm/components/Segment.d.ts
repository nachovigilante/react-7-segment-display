declare type SegmentType = {
    active: boolean;
    color: string;
    size: number;
    id: string;
    skew: boolean;
};
declare const Segment: ({ active, color, size, id, skew }: SegmentType) => JSX.Element;
export default Segment;
