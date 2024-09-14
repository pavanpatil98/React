import { binarySearch, linearSearch } from "./searching.js";
import bubbleSort from "./sort.js";
let arr = [3,4,1,2,45];
bubbleSort(arr);
console.log(arr);

let ans = binarySearch(arr,2);
console.log(ans);

let ans1 = linearSearch(arr,1);
console.log(ans1);
