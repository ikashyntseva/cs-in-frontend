// 1. Необходимо написать итератор для генерации случайных чисел по заданным параметрам

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const random = (min: number, max: number): IterableIterator<number> => {
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

// 2. Необходимо написать функцию take, которая принимает любой Iterable объект и возвращает итератор по заданному количеству его элементов

export const take = (
  iterable: Iterable<unknown>,
  limit: number
): IterableIterator<unknown> => {
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

// 3. Необходимо написать функцию filter, которая принимает любой Iterable объект и функцию-предикат. И возвращает итератор по элементам которые удовлетворяют предикату.

type FilterCallBack = (el: any) => boolean;

export const filter = (
  iterable: Iterable<any>,
  filterCb: FilterCallBack
): IterableIterator<any> => {
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

        done = data.done!;

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

// 4. Необходимо написать функцию enumerate, которая принимает любой Iterable объект и возвращает итератор по парам (номер итерации, элемент)

export const enumerate = (
  iterable: Iterable<any>
): IterableIterator<any> => {
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

        done = data.done!;
        cursor++;

        return {
          value: !done ? [currentCursor, value] : undefined,
          done,
        };
      } while (!done);
    },
  };
};

