import { I_Link, I_LinkedList } from "../linked-list/interfaces";

export interface I_Queue<T> {
  get head(): T | null;
  get isEmpty(): boolean;

  push(value: T): void;
  pop(): T | null;
}
