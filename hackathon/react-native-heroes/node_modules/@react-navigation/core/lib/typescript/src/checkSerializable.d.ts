export default function checkSerializable(o: {
    [key: string]: any;
}): {
    serializable: true;
} | {
    serializable: false;
    location: (string | number)[];
    reason: string;
};
