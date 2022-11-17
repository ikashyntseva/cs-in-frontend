# Домашнее задание к лекции № 3 - Важнейшие структуры данных: вектор, хеш-таблицы, деревья поиска.

1. Реализовать динамический расширяемый массив на основе связанного списка (список массивов). Для получения элемента по индексу добавить метод.

   ```js
   const arr = DynamicArray(3 /* Размер фиксированного массива в списке */);
   
   arr.add(1);
   arr.add(2);
   arr.add(3);
   arr.add(4);
   arr.add(5);
   
   console.log(arr.length);  // 5
   
   console.log(arr.get(0));  // 1
   console.log(arr.get(1));  // 2
   console.log(arr.get(4));  // 5
   ```

2. Сделать такой массив итерируемым *

   ```js
   const arr = DynamicArray(2);
   
   arr.add(1);
   arr.add(2);
   arr.add(3);
   
   for (const value of arr) {
     console.log(value);
   }
   ```

3. Реализовать динамический расширяемый массив как вектор. Необходимо поддержать возможность указания ёмкости.

   ```js
   const arr = DynamicArray(2);
   
   arr.add(1);
   arr.add(2);
   arr.add(3);
   arr.add(4);
   arr.add(5);
   
   console.log(arr.get(0));  // 1
   console.log(arr.get(1));  // 2
   console.log(arr.get(4));  // 5
   ```

4. Реализовать хеш-таблицу, где все ключи преобразуются в строку (любой алгоритм хэширования). Метод разрешения коллизий - метод цепочек.

   ```js
   const map = HashMap();
   
   map.set('foo', 'bar');
   map.set(10, 'bla');
   
   console.log(map.get('foo')); // 'bar'
   console.log(map.get(10));    // 'bla'
   ```

5. Добавить метод keys, который возвращает итератор с ключами (в любом порядке), которые есть в таблице *

   ```js
   const map = HashMap();
   
   map.set('foo', 'bar');
   map.set(10, 'bla');
   
   console.log([...map.keys()]); // ['foo', '10']
   ```

6. Реализовать бинарный поиск в массиве

   ```js
   binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98]) // 8 - это индекс 
   ```

7. Реализовать статическое бинарное дерево, которое работает как множество (Set) с возможностью поиска

   ```js
   const treeSet = BinaryTreeSet([-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98]);
   
   treeSet.has(53); // false
   treeSet.has(98); // true
   ```

8. Реализовать итераторы для значений в дереве с помощью алгоритмов поиска в глубину (прямой, обратный и симметричный) и в ширину. *

9. Реализовать B-дерево **

   ```js
   const tree = BTree();
   
   tree.set('foo', 'bar');
   tree.set(10, 'bla');
   
   console.log(tree.get('foo')); // 'bar'
   console.log(tree.get(10));    // 'bla'
   ```