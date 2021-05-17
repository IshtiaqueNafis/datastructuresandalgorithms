# Binary Search 
- Binary search used for searching specific items in the array. 
- however, there are few requirements 
   - array must be sorted
   - will not work if the data is not sorted. 
 - uses divide and conquer method where you divide the array based on search 
- returns the index of the array where the match was found 
else return -1 when match was not found 

## example explained. 
```
a = [5,9,17,23,25,45,59,63,71,89]

```
 - the following array has 10 elements 
 - they are all sorted 
 ### index position of the array elements. 
| Element        | Position
| ------------- |:-------------:|
| <span style="color:blue">5</span>.| <span style="color:red">0</span>.
| <span style="color:blue">9</span>.| <span style="color:red">1</span>.
| <span style="color:blue">17</span>.| <span style="color:red">2</span>.
| <span style="color:blue">23</span>.| <span style="color:red">3</span>.
| <span style="color:blue">25</span>.| <span style="color:red">4</span>.
| <span style="color:blue">45</span>.| <span style="color:red">5</span>.
| <span style="color:blue">59</span>.| <span style="color:red">6</span>.
| <span style="color:blue">63</span>.| <span style="color:red">7</span>.
| <span style="color:blue">71</span>.| <span style="color:red">8</span>.
| <span style="color:blue">89</span>.| <span style="color:red">9</span>.
- notice that <span style="color:blue">5</span> starts at index <span style="color:red">0</span>
- cause array always start at 0 

### Binary Search result
- Has 2 result criteria 
  1. match found
  2. match was not found   
# Match found
- first look for data that needs to be find. 
- in the example here it will be <span style="color:red">59</span>
## step one divide the array based on first and last index. 
- first array starts at 0 - which is <span style="color:red">5</span>.
- last array starts at 9 - but in  general we do not know how big the array will be 
  - so use array. Length property to get the array property
  - so in this case the result will be length-1
  - since the length is 10-1 it will be 9;
    
`l=5` and `r=89` `mid=(l+r)/2`
- `l=5` cause l is the start point thus `l is always left`
- `r=89` cause r starts at    the end hence it will start from the right.
- `mid=l+r/2` `l=0` here not 5 cause search is based on index not based on actual element. 
- `r=9` not 89 cause once again getting the index number cause mid wont be equal to index number then. 
- the mid point will always be a  integer number cause 4.5 does not exist on arrays. 

| left      | right           | mid  |
| ------------- |:-------------:| -----:|
| <span style="color:purple">0</span> | <span style="color:yellow">9</span> | <span style="color:white">0+9/2 =4</span> |
| <span style="color:purple">0=5</span> | <span style="color:yellow">9=89</span> | <span style="color:white">4=25</span> |
### there are 3 possible Result  for the search. 
- data to find === mid
- Let's say data was not found on middle 
    -  then it will be based on two case 
    -  is the data to find bigger than mid 
    - is the data to find less than mid. 
    
## the current case to find the data `59` 
  - the mid is `25`>`59`
  - thus the left will be changed to `middle+=1` postion 
  - right will stay the same 
  - mid will change also.

| left      | right           | mid  |
| ------------- |:-------------:| -----:|
| `l=5`      | `r=9`          | `m=7`  |
| `5=45`    | `9=89` | `7=63`

### current mid is `63` data target is `59` does not work  here. 
- In this case `63` is greater than `59`
- `l=5` which is the value of `45` will stay the the same 
- But right side will change now 
- thus right will becomes mid-1 `mid=7-1` and `right=6` is the result 

| left      | right           | mid  |
| ------------- |:-------------:| -----:|
| `l=5`      | `r=6`          | `m=5`  |
| `5=45`    | `6=59` | `5=45`
- in here `l==m` which means both left and right have the same values 
  - `l is at index 5 `  `m is at index 5 `
  -  left=`[5]=45`  right=`[5]=45`
  
### current case to data to find   `59`
- `mid` is 45
- this case qualifies for `mid<59
- thus `right` will be mid+1;
- left will stay same 
- right will change `mid+1` `5+1=6`
  | left      | right           | mid  |
  | ------------- |:-------------:| -----:|
  | `l=6`      | `r=6`          | `m=6`  |
  | `5=59`    | `6=59` | `6=59`
- in here `l==m` which means both left and right have the same values
  - `l is at index 6 `  `m is at index 6 `
  -  left=`[6]=59`  right=`[6]=59`
  - mid `[6]=59`
  - in here left right and mid is 59
  - all points are at equal point
  -  left right and mid are both same
  - thus mid point either has to be equal or its not equal 
  - mid is `59` data target is 59 and data is found at index 6. 
  
# Cheat Sheet for Binary Search 
- First divide the array based on start this can be known as either right or start at 0 
- End part starts at the end of the array-1 this is always -1 cause array start at 0 index
- then get the midpoint by adding two points (left+right)/2 
   - there will be 3 ways  to find the data. 
   1. lets say the result mid==dataTarget
      - the data is found and search will be done
   2. let's say mid is bigger than target data ***mid>target***
      - `left` will stay at same index 
      - `right` will change with being moved to mid plus add 1 with it.  
      - `mid` will change. 
   
   3. let's say mid is bigger than target data ***mid<target***
    - `left` will change to `mid-1`
    - right will not change 
    - midpoint will change  since left 
  4 - in one point there will be case where left right and mid all will share same point. 
      - in that case either mid will be equal to result. or it will return -1; 
      - cause start cant be greater than end thus `left can not be greather than right`
  
### incase of midbeing>dataTarget

| variable      | Change           
| ------------- |:-------------:|
| `right or start`      | `mid+1`          
| `mid`    | will change |
| `right`    | right will not change | 

### incase of midbeing<dataTarget

| variable      | Change
| ------------- |:-------------:|
| `left or end`      | `mid-1`
| `mid`    | will change |
| `right`    | right will not change | 
