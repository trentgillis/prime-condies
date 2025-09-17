export function findIndex(arr: unknown[], predicate: (item: unknown) => boolean) {
  for (const [i, item] of arr.entries()) {
    if (predicate(item)) return i;
  }

  return -1;
}
