export type Todo = {
    id: number,
    name: string,
    singer: string
}
export type Cart = {
    id: number | string;
    name: string;
    singer: string
}

export interface Generic<T> {
    list: T[];
    selected: T;
}