Array Methods
map()

Purpose: Creates a new array by applying a function to each element of the array.
Common Use: Used to render lists of components.
Example:
javascript
Copy code
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// In React
const listItems = numbers.map(num => <li key={num}>{num}</li>);
filter()

Purpose: Creates a new array with only the elements that pass a test.
Common Use: Filter out elements from state (e.g., removing an item from a list).
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
find()

Purpose: Returns the first element in the array that satisfies a condition.
Common Use: Find a specific object in an array of objects (like finding an item by ID).
Example:
javascript
Copy code
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
const user = users.find(user => user.id === 2); // { id: 2, name: 'Jane' }
some()

Purpose: Tests whether at least one element in the array passes the provided function.
Common Use: Check if any element meets a condition.
Example:
javascript
Copy code
const numbers = [1, 2, 3];
const hasEven = numbers.some(num => num % 2 === 0); // true
every()

Purpose: Tests whether all elements in the array pass the provided function.
Example:
javascript
Copy code
const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0); // true
reduce()

Purpose: Applies a function to accumulate values into a single output.
Common Use: Summing an array of numbers or transforming an array into an object.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0); // 10
push()

Purpose: Adds one or more elements to the end of the array.
Note: This mutates the array, which is not ideal for React state.
Better Alternative: Use setState with a spread operator to avoid mutation.
javascript
Copy code
const newArray = [...array, newItem]; // Instead of array.push(newItem)
concat()

Purpose: Merges two or more arrays without mutating the original array.
Example:
javascript
Copy code
const array1 = [1, 2];
const array2 = [3, 4];
const merged = array1.concat(array2); // [1, 2, 3, 4]
slice()

Get-ChildItem -Path "C:\Users\pavpatil\Downloads" -Recurse -File | Sort-Object Length -Descending | Select-Object FullName, Length -First 50


Purpose: Returns a shallow copy of a portion of an array without modifying the original array.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
const part = numbers.slice(1, 3); // [2, 3]
splice()

Purpose: Adds/removes elements from an array.
Note: Mutates the original array, so use caution in React.
Example:
javascript
Copy code
const numbers = [1, 2, 3];
numbers.splice(1, 1); // Removes one element at index 1, resulting in [1, 3]
Object Methods
Object.keys()

Purpose: Returns an array of a given object’s keys.
Example:
javascript
Copy code
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ['a', 'b', 'c']
Object.values()

Purpose: Returns an array of a given object’s values.
Example:
javascript
Copy code
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj); // [1, 2, 3]
Object.entries()

Purpose: Returns an array of a given object’s key-value pairs as [key, value] arrays.
Example:
javascript
Copy code
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
Object.assign()

Purpose: Copies properties from one or more source objects to a target object.
Example:
javascript
Copy code
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const newObj = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }
Spread Operator (...)

Purpose: Creates a shallow copy of an object or array.
Common Use: Used to update React state without mutating the original array or object.
Example:
javascript
Copy code
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }

// Updating arrays in React state
const newArray = [...oldArray, newItem];
delete Operator

Purpose: Removes a property from an object.
Note: Mutates the object, so avoid using this directly on state.
Example:
javascript
Copy code
const obj = { a: 1, b: 2 };
delete obj.b; // { a: 1 }
Common Patterns in React
Updating State Arrays:

Add an Item:
javascript
Copy code
setItems(prevItems => [...prevItems, newItem]);
Remove an Item:
javascript
Copy code
setItems(prevItems => prevItems.filter(item => item.id !== idToRemove));
Updating State Objects:

Update Object Properties:
javascript
Copy code
setState(prevState => ({ ...prevState, updatedProperty: newValue }));
Mapping Over Arrays for Rendering:

Rendering List Items:
javascript
Copy code
const list = items.map(item => <li key={item.id}>{item.name}</li>);
Using Object Spread for Immutable Updates:

Merge Multiple Objects:
javascript
Copy code
const mergedObject = { ...obj1, ...obj2 };
These array and object methods, combined with React's useState and useEffect hooks, will help you effectively manage state and reactivity in your applications.












ChatGPT can make mistakes. Check important info.