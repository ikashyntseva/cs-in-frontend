"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iter = void 0;
const iter = (str) => {
    let cursor = 0;
    let sur = "";
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            while (true) {
                let state = 'symbol';
                let value = str[cursor];
                const code = value && value.charCodeAt(0);
                if (code >= 0xd800 && code <= 0xdbff) {
                    state = 'high_sur';
                }
                else if (code <= 0xdfff && code >= 0xdc00) {
                    state = 'low_sur';
                }
                switch (state) {
                    case 'high_sur': {
                        sur += value;
                        cursor++;
                        break;
                    }
                    case 'low_sur': {
                        sur += value;
                        value = sur;
                        sur = "";
                    }
                    default: {
                        return {
                            value,
                            done: cursor++ >= str.length,
                        };
                    }
                }
            }
        },
    };
};
exports.iter = iter;
