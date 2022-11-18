"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerate = exports.filter = exports.take = exports.random = void 0;
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const random = (min, max) => {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return {
                value: getRandomArbitrary(min, max),
                done: false,
            };
        },
    };
};
exports.random = random;
const take = (iterable, limit) => {
    let cursor = 0;
    let iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const isDone = cursor++ >= limit;
            return {
                value: !isDone ? iter.next().value : undefined,
                done: isDone,
            };
        },
    };
};
exports.take = take;
const filter = (iterable, filterCb) => {
    const iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let done = false;
            do {
                const data = iter.next();
                const value = data.value;
                done = data.done;
                if (filterCb(value)) {
                    return {
                        value,
                        done: false,
                    };
                }
            } while (!done);
            return {
                value: undefined,
                done: true,
            };
        },
    };
};
exports.filter = filter;
const enumerate = (iterable) => {
    let cursor = 0;
    let iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let currentCursor = cursor;
            let done = false;
            do {
                const data = iter.next();
                const value = data.value;
                done = data.done;
                cursor++;
                return {
                    value: !done ? [currentCursor, value] : undefined,
                    done,
                };
            } while (!done);
        },
    };
};
exports.enumerate = enumerate;
