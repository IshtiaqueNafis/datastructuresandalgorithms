#Bubble Sort 
- Main objective is to sort data on the array based on ascending(lowest to highest) or descending(highest to lowest) order. 
```
a= [15,16,6,8,5]

```
- number of elements in the array is `5` 
- in here will compare two array at a time untill its completly organized
- thus it would mean a[i] is going to be compared to a[i+1]
   - note that i is being refered to index postion of the element in the loop
   - if elements are on wrong order they will be swappend  
### this is the starting postion for the array 
| 0        | 1           | 2  |3|4|
| :-----: |:-----:| :-----:| :-----:|:-----:|
| `15`     | `16` | `6` | `8`|`5`
- `15` is not bigger than `16` will not be swapped with 16
-  `16` will be compared with `6` wil swap variables now with `16`
### **results are swap**
| 0        | 1           | 2  |3|4|
| :-----: |:-----:| :-----:| :-----:|:-----:|
| `15`     | `6` | `16` | `8`|`5`
-  `16` will be compared with `8` wil swap variables now with `16` 
### **results are swap**  
   | 0        | 1           | 2  |3|4|
   | :-----: |:-----:| :-----:| :-----:|:-----:|
   | `15`     | `6` | `8` | `16`|`5`
-  `16` will be compared with `5` wil swap variables now with `16`
### **results are swap**  
   | 0        | 1           | 2  |3|4|
   | :-----: |:-----:| :-----:| :-----:|:-----:|
   | `15`     | `6` | `8` | `5`|`16`

 - `16` is sorted now as it is at the end of array 
- end of the array means array has been for that element. 


### swapping continued 
- current table results.
  
  | 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
  | `15`     | `6` | `8` | `5`|`16`

- `15` will be compared with `6` wil swap variables now with `15`
### **results are swap**
| 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
| `6`     | `8` | `15` | `5`|`16`

- `15` will be compared with `8` wil swap variables now with `15
### **results are swap**
  
  | 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
  | `6`     | `8` | `5` | `15`|`16`
  
- now `15` is before `16` but 16 is already swamped so no swapping is needed.

### swapping continued 
### **Current standing of the array**
| 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
| `6`     | `8` | `5` | `15`|`16`
- `6` is not bigger than `8` no swapping will be done 
- `8` is bigger than `5` swapping will be done  
### **results are swap**
| 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
| `6`     | `5` | `8` | `15`|`16`
- `8` joins the club for swapped memeers as `15` and `16` swapped
   - since `15` and `16` already swapped no swapping will be needed. with thesse two 

### swapping continued 
### **Current standing of the array**
| 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
| `6`     | `5` | `8` | `15`|`16`
- `6` is bigger than `5` so it will be swapped
### **results are swap**
  
  | 0        | 1           | 2  |3|4|
  | :-----: |:-----:| :-----:| :-----:|:-----:|
  | `5`     | `6` | `8` | `15`|`16`
- now the array is completly ordered
- no more swapping will be necessary 