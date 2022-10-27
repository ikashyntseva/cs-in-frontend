export interface I_Link<T> {
    value: T,
    get next(): I_Link<T> | null,
    get prev(): I_Link<T> | null,
}

export interface I_LinkedList<T> {
    get first(): I_Link<T> | null,
    get last(): I_Link<T> | null,
    get isEmpty(): boolean,
    add(value: T): void
    delete(): void
}

export type I_LinkOrNull<T> = I_Link<T> | null;
