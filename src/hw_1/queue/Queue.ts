import { I_LinkedList } from "../linked-list/interfaces";
import LinkedList from "../linked-list/LinkedList";
import { I_Queue } from "./interfaces";

export default class Queue<T> implements I_Queue<T> {
  protected queue: I_LinkedList<T>;

  constructor() {
    this.queue = new LinkedList<T>();
  }

  get head(): T | null {
    return this.queue.first?.value ?? null;
  }

  get isEmpty(): boolean {
    return this.queue.isEmpty
  }

  push(value: T): void {
    this.queue.add(value);
  }

  pop(): T | null {
    if (this.isEmpty) {
      throw new Error("Nothing to pop. The queue is empty!");
    }

    const head = this.head;

    this.queue.delete();

    return head;
  }
}