// 2. Реализовать итератор по символам юникода для строки, аналогичный нативному. Т.е. суррогатные пары должны учитываться. *

export const iter = (str: string): IterableIterator<string> => {
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
        } else if (code <= 0xdfff && code >= 0xdc00) {
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
