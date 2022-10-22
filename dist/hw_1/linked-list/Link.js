"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
class Link {
    value;
    #next = null;
    #prev = null;
    constructor(value) {
        this.value = value;
    }
    get next() {
        return this.#next;
    }
    get prev() {
        return this.#prev;
    }
    set next(link) {
        this.#next = link;
    }
    set prev(link) {
        this.#prev = link;
    }
}
exports.Link = Link;
