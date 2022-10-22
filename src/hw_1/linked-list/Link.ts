import { I_Link } from "./interfaces";

export class Link<T> implements I_Link<T> {
  value: T;
  #next: Link<T> | null = null;
  #prev: Link<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  get next(): Link<T> | null {
    return this.#next;
  }

  get prev(): Link<T> | null {
    return this.#prev;
  }

  set next(link: Link<T> | null) {
    this.#next = link;
  }

  set prev(link: Link<T> | null) {
    this.#prev = link;
  }
}
