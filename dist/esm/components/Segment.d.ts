declare type SegmentType = {
    active: boolean;
    color: string;
    size: number;
    id: string;
};
declare const Segment: ({ active, color, size, id }: SegmentType) => JSX.Element;
export default Segment;
