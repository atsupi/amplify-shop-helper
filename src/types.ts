export type Item = {
    id: string;
    imagefile: string;
    price: number;
    username: string;
    description: string;
    isInCart: number;
};

export type ItemWithCheck = {
    id: string;
    imagefile: string;
    price: number;
    username: string;
    description: string;
    isInCart: number;
    isPurchased: number;
    index: number;
};

export type Purchase = {
    id: string;
    itemID: [string];
    username: string;
    numberOfItems: number;
    isPurchased: [number];
};
