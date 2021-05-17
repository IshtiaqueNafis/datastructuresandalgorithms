# What are Arrays
- called list 
- order items sequence
- item are one after another 
- **one of the most widely used**
- go for one item at the time it is the best choice
- array uses constant time one. 
- some of the array methods are lookup,push,insert and delete 
- [Code Section](../Arrays/simpleArray.js)
---
### BIG O result for array methods
| Tables        | Are           | 
| ------------- |:-------------:| 
| lookup     | O(1) | 
| Push      | O(1)   |   
| Insert | O(N)      |    
| Delete | O(N)      |    
---
# There are two types of arrays 
1. Dynamic Arrays - size will increase with content,allow copy and rebuild without any issues. 
 ```
 const strings = ["a","b","c","d"];
 ```
- this is a dynamic array in JavaScript it will grow with the size thus anything can be added at any location without having to copy it 
2. Static Arrays - fixed with limited content 
  ```
  int [] mylist = new int[5];
   ```
- this is a fixed list in java where array size limit is 5 
---
| Section | JS Link | Java Link  | Code notes
| ----------- | ----------- | ----------- |----------- |
| Array Crud Operation | [JavaScript](../Arrays/ArrayCRUD/MyArray.js) | [Java](https://github.com/IshtiaqueNafis/DataStructureJAVACode/blob/master/src/ArrayClass/MyArray.java)|[link](../Arrays/ArrayCRUD/readme.md)
 Binary Search | NA |[Java](https://github.com/IshtiaqueNafis/DataStructureJAVACode/blob/master/src/ArrayClass/MyArray.java) | [link](../Arrays/Searching Algorithims/BinarySearch/readme.md)