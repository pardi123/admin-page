/* eslint-disable @typescript-eslint/no-explicit-any */
export function groupingBy<T>(
  list: T[],
  keyGetter: (props: T) => any
): Map<string, T[]> {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
