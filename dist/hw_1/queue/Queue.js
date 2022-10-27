"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../linked-list/LinkedList"));
class Queue {
    queue;
    constructor() {
        this.queue = new LinkedList_1.default();
    }
    get head() {
        return this.queue.first?.value ?? null;
    }
    get isEmpty() {
        return this.queue.isEmpty;
    }
    push(value) {
        this.queue.add(value);
    }
    pop() {
        if (this.isEmpty) {
            throw new Error("Nothing to pop. The queue is empty!");
        }
        const head = this.head;
        this.queue.delete();
        return head;
    }
}
exports.default = Queue;
