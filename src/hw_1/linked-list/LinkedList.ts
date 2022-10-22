import { I_LinkedList } from "./interfaces";
import { Link } from "./Link";

export default class LinkedList<T> implements I_LinkedList<T> {
  #first: Link<T> | null = null;
  #last: Link<T> | null = null;

  get first(): Link<T> | null {
    return this.#first;
  }

  get last(): Link<T> | null {
    return this.#last;
  }

  set first(link: Link<T> | null) {
    this.#first = link;
  }

  set last(link: Link<T> | null) {
    this.#last = link;
  }

  add(value: T): void {
    const newLink = new Link(value);

    if (this.#last) {
      newLink.prev = this.#last;
      this.#last.next = newLink;
      this.#last = newLink;
    } else {
      this.#first = newLink;
      this.#last = newLink;
    }
  }
}
