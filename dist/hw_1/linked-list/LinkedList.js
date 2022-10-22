"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = require("./Link");
class LinkedList {
    #first = null;
    #last = null;
    get first() {
        return this.#first;
    }
    get last() {
        return this.#last;
    }
    set first(link) {
        this.#first = link;
    }
    set last(link) {
        this.#last = link;
    }
    add(value) {
        const newLink = new Link_1.Link(value);
        if (this.#last) {
            newLink.prev = this.#last;
            this.#last.next = newLink;
            this.#last = newLink;
        }
        else {
            this.#first = newLink;
            this.#last = newLink;
        }
    }
    *generateValues(reversed) {
        let current = !reversed ? this.#first : this.#last;
        while (current) {
            yield current.value;
            current = !reversed ? current.next : current.prev;
        }
    }
    [Symbol.iterator]() {
        return this.generateValues();
    }
}
exports.default = LinkedList;
