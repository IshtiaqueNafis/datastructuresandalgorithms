# Code Explanation JAVA

[Code location](https://github.com/IshtiaqueNafis/DataStructureJAVACode/blob/master/src/ArrayClass/MyArray.java)

| `MyArray<T>`  | 
| ------------- |
| -arrayData:**T[]**| 
| -length:**int** | 
| -maxItems:**int** | 
| ------------- |
|+MyArray(int maxItems|
|+T getIndex(int index) |
|+Push(T item) |
|+printItems() |
|+Delete(int index) |
|+ Pop()(T item) |


## Properties explanation 
```
public class MyArray<T> {
    private T[] arrayData; // its set to generic array data this way anything can be stored
    private int length; // what is length of the array.
    private int maxItems; // how many max items will be allowed here
```
-  `MyArray<T>` This is a generic class, so it will be easy to use with string float or int or even char
- `private T[] arrayData;` this property is private it is a generic array for now but based on property it will change
-  `private int length;` it will be worked as index position as well has how many items on the array. 
- `private int maxItems` this sets how big the array will be. 
## Constructor explanation 
```
  public MyArray(int maxItems) {
        this.maxItems = maxItems;
        this.length = 0;
        arrayData = (T[]) new Object[maxItems];
    }
```
- `public MyArray(int maxItems)`  the constructor takes int as parameter here 
- `this.maxItems = maxItems;` the max of value items is being set to max items which will be the size
- `this.length` is set to 0 since in the beginning array will be completely empty
- ` arrayData = (T[]) new Object[maxItems];` intalizing the array here
    1. `(T[]) new Object[maxItems];` looks a bit confusing, but it is quite easy  to understand. 
        - `T()` is going to be used to downcast the object
        - `new Object[maxItems]` since its a generic it get cast to object with `[maxitems]` which sets the size. 
        - ` int[] anArray = anArray = new int[10] ` is same as  `arrayData = (T[]) new Object[maxItems];` but downCasting is involved. 



## Methods Explanation
### T getIndex(int index)
 ```
 public T getIndex(int index){
        return arrayData[index];
    }  
  ```
- this is a simple getter method to get the specific item of the object based on index 
- ` public T getIndex(int index)` Return is T also cause its a generic class
- `return arrayData[index];` This results the actual item returning
---
***Example explanation*** 
```
var test = new MyArray<String>(10);
 System.out.println(test.getIndex(0));
``` 
- `var test = new MyArray<String>(10);` is string array with 10 length limit
- `System.out.println(test.getIndex(0));` result is `null` cause at 0 there is nothing there 
###  Push(T item)
```
public void Push(T item){
        arrayData[length]=item;
        this.length++;
        System.out.println("Length is "+ length);
    }
```
- `(T item)` takes the generic as a parameter thus this way anything can be passed which was set on the consturctor when creating an object
- `arrayData[length]=item;` 
   - `arrayData[length]` length will be based on what the length is length will be 0 in begining                    
   - `item` will be whatver the generic will be 
- `this.length++;` This increases the index of the array.
  ***Example explanation*** 
  ```
   var test = new MyArray<String>(3);
        test.Push("HI");
        test.Push("Hello");
        test.Push("Hero");
  ```
  - the function is called 3 times 

| FunctionCall | Result | 
| ----------- | ----------- |
| `test.Push("HI")` | `Length is 1` | 
| `test.Push("Hello")` | `Length is 2` |
| `test.Push("Hero")` | `Length is 3` |
## printItems() 
```
      public void printItems(){
        System.out.println("Items in the array");
        for (int i = 0; i <length ; i++) {
            System.out.println(arrayData[i]);
        }
        System.out.println("");
    }

```
- `  for (int i = 0; i <length ; i++) `
    - `i <maxItems ` only things to watch here is max items 
    - normally loops in general includes `i<maxitems.length` this is a ***Bad Practice***
       - bad Practice because it will loop through the whole thing even though the the whole loop has not been filled
```
public void printItems(){
        System.out.println("Items in the array");
        for (int i = 0; i < arrayData.length ; i++) {
            System.out.println(arrayData[i]);
        }
        System.out.println("");
    }

```    
- `for (int i = 0; i < arrayData.length ; i++) ` in here I modified array `i < arrayData.length `  now lets run the function
 
    ```
    var test = new MyArray<String>(3);
        test.Push("HI");
       test.printItems();
  ```
```
HI --> index 0
null -->index 1
null -->index 2
```
- this is a poor practice as unnecessary item is being printed and taking up resources eventhough it suppose to have one item.
---
***Updated Code with fix***
```
     public void printItems(){
        System.out.println("Items in the array");
        for (int i = 0; i <length ; i++) {
            System.out.println(arrayData[i]);
        }
        System.out.println("");
    }

var test = new MyArray<String>(3);
        test.Push("HI");
       test.printItems();
```
- `HI`is only printed here null is ignored and saved memory resources :)

## void Delete(int index)
- Deletes item based on an index 
```
    public void Delete(int index){
         index-=1;
        for (int i = index; i <this.length-1 ; i++) {

            this.arrayData[i] = this.arrayData[i+1]; // shift it
        }

        this.length--;
    }
```
- ` public void Delete(int index)` - index is the postion i want to get item at 
- ` index-=1;` index is always start at 0 so it has to be minused
- `for (int i = index; i <this.length-1 ; i++)`
   - `int i = index` will start at position item wants to be moved
    - `i <this.length-1 ` -- ask prof or think about it 
    - `i++` pretty explanatory `i` will go up
- `this.arrayData[i] = this.arrayData[i+1];`
   - `this.arrayData[i]` will start with current index, and it will change. 
    - `this.arrayData[i+1];` - index of 1 will become 2 value will change.
 ### CODE Explanation with example
**Step one Lets add data first** 
```
  var test = new MyArray<String>(3);
        test.Push("HI");
        test.Push("Hello");
        test.Push("nafis");
```
- here I am adding 3 items. 
  - "HI" is being added at index 0
  - "Hello" is being added at index 1
  - "nafis" is being added at index 2
  - total length is 3
    
**Removing items** 
```
 test.Delete(1);
 test.printItems();
```
-`test.Delete(1)` going to remove item at index 1
- however, I will be deleting at index 0 cause cause int index 1 position 1 gets deleted. 
```
Items in the array
Hello
nafis
```
- this is the output
- `test.Push("HI")` is gone now. 

```
 test.Delete(1);
 test.printItems();
```
-`test.Delete(2)` going to remove item at index 1
- however, I will be deleting at index 1 cause cause int index 1 position 1 gets deleted.
```
Items in the array
Hello
```
- this is the output
- `test.Push("nafis")` is gone now. 
```
 test.Delete(1);
 test.printItems();
```
-`test.Delete(1)` going to remove item at index 1
- however, I will be deleting at index 0  cause int index 1 position 1 gets deleted.
```
Items in the array
```
## Pop() 
- Remove last Items 

```
  public void Pop(){
        var lastItem = this.arrayData[this.length-1]; // this will hold the value for the item
        this.arrayData[this.length-1]= (T)new Object(); // this way object will be cased to
        this.length --;
        System.out.println("Element in the array is "+ Arrays.toString(arrayData));

    }
```
- `var lastItem = this.arrayData[this.length-1];` this removes the last item it is minus 1 cause index always start at 0
- `this.arrayData[this.length-1]= (T)new Object(); // object is kept as a place holder to a defult value`
- `this.length --;` index goes down by one. 
```
 var test = new MyArray<String>(3);
        test.Push("HI");
        test.Push("Hello");
        test.Push("nafis");

      test.Pop();
      test.printItems();
```
- `test.Pop();` will remove the last item which is  test.Push("nafis");
  ```
  Element in the array is [HI, Hello, java.lang.Object@6d03e736]
  ```
  - `java.lang.Object@6d03e736` is equal no "nafis" replaced with default value
- `test.printItems();`
```
Items in the array
HI
Hello

```   
- it shows only two items because I decreased the limit it went down for items. 

