function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

// Error cases
//getFirstElement<number>([1, "a", true]); // Error: Argument of type '(string | number | boolean)[]' is not assignable to parameter of type 'number[]'.
