### Insertion Sort 
- think of its a puzzle piece 
- where one piece gets replaced with other eventually it will  be sorted. 
- in general the first item is assumed to be sorted and compared with other items on the array 
---
### Code by code explanation
```
a= [6,5,3,1,8,7,2,4]
```
---
| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `6` | `5` |`3`|`1`|`8`|`7`|`2`|`4`
- in here item `6` at index `0` is assumed to be sorted 
  - note that item by itself it's considered to be sorted
  -   `6` is at index seem to be sorted here. 
 - the start point will start at index `1` which has the item of `5` 

### Phase 1 
```
a= [6,5,3,1,8,7,2,4]
```
- `5` will be compared with `6`
  
  | Case | True | False |Result
  | ---- | --- |--- |--- |
  |`5`>`6`|     | [X]    | `6` will swap place with `5` index position 

```
a= [5,6,3,1,8,7,2,4]
```
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `5` | `6` |`3`|`1`|`8`|`7`|`2`|`4`
 - [`5`,`6`] is sorted 
 - `[3,1,8,7,2,4]` is not sorted 
-  phase one now has been completed. 

### Phase 2
```
a= [5,6,3,1,8,7,2,4]
```
- `3` will be compared with rest of the sorted array
- in phase 1 the comparison was only done with one value 
- in 2nd phase however `3` will be compared with `6` and `5`
###  2.1 compare and swap `3` with `6`
| Case | True | False |Result
  | ---- | --- |--- |--- |
   `3`>`6`  |  | [X] | `3` will swap value `6` as `3` is not bigger than `3`  
**Array output**

```
a= [5,3,6,1,8,7,2,4]
```
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `5` | `3` |`6`|`1`|`8`|`7`|`2`|`4` 
- `3` is at index 1
- `6` at index 2 
### 2.2 compare and swap `3` and `5`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`3`>`5`  |  | [X] | `3` will swap value `5` as `3` is not bigger than `5`  so positon will be swapped

**Array output**

```
a= [5,3,6,1,8,7,2,4]
```


**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `3` | `5` |`6`|`1`|`8`|`7`|`2`|`4`
- `3` is at index 0
- `5` at index 1

## Phase 3 swap values with `1` with the rest of the index; 
- current sorted array `[3,5,6]`
- current unsorted array `[1,8,7,2,4]`
  
  | Case | True | False |Result
  | ---- | --- |--- |--- |
  `1`>`6`  |  | [X] | `1` will swap value `6` as `1` is not bigger than `6`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `3` | `5` |`1`|`6`|`8`|`7`|`2`|`4`
- `3` is at index 2
- `6` at index 3
  
###  `1` is checked  with`5` 
| Case | True | False |Result
  | ---- | --- |--- |--- |
`1`>`5`  |  | [X] | `1` will swap value `5` as `1` is not bigger than `5`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `3` | `1` |`5`|`6`|`8`|`7`|`2`|`4`
- `1` is at index 1
- `5` at index 2

###  `1` is checked  with`3`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`1`>`3`  |  | [X] | `1` will swap value `3` as `1` is not bigger than `5`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`6`|`8`|`7`|`2`|`4`
- `1` is at index 0
- `3` at index 1
## Phase 4 swap values with `8` with the rest of the index; 
- `[1,3,5,6]`  is sorted
- `[8,7,2,4]` is not sorted

###  `8` is checked  with`6`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`8`>`6`  | [X] |  | `8` and `6` will not be swapped here at all. 

- `8` will not be checked with `5`, `3`, `1` cause array is already sorted so no point comparing with others. 


**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`6`|`8`|`7`|`2`|`4`
 - note than `8` is sorted now

## Phase 5 `7` will be checked with rest of the array. 
- `[1,3,5,6,8]` are sorted 
- `[7,2,4]` not sorted

###  `1` is checked  with`3`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`8`>`7`  |  | [X] | `8` will swap value `7` as `8` is not bigger than `7`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`6`|`7`|`8`|`2`|`4`
- `7` is at index 4
- `8` at index 5

***Important note there is no point  comparing `7` with `1`,`3`,`5`,`6` cause theey are already sorted***
- `7` is bigger than `6` thus no swapping will be done and necesary
- this ends the the phase 5. 

## Phase 6 `2` will be compared with the rest of the array 
- sorted array `[1,3,5,6,7,8]` is sorted now 
- `[2,4]` is not sorted 
- 
### `2` will be compared to `[1,3,5,6,7,8]`

###  `2` is checked  with`8`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`2`>`8`  |  | [X] | `2` will swap value `8` as `2` is not bigger than `8`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`6`|`7`|`2`|`8`|`4`
- `2` is at index 5
- `8` at index 6

###  `2` is checked  with`7`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`2`>`7`  |  | [X] | `2` will swap value `7` as `2` is not bigger than `7`  so positon will be swapped

**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`6`|`2`|`7`|`8`|`4`
- `2` is at index 4
- `7` at index 5

### `2` is compared with `6`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`2`>`6`  |  | [X] | `2` will swap value `6` as `2` is not bigger than `6`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`5`|`2`|`6`|`7`|`8`|`4`
- `2` is at index 3
- `6` at index 4

### `2` is compared with `5`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`2`>`5`  |  | [X] | `2` will swap value `5` as `2` is not bigger than `5`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `3` |`2`|`5`|`6`|`7`|`8`|`4`
- `2` is at index 2
- `5` at index 3

### `2` is compared with `3`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`2`>`3`  |  | [X] | `2` will swap value `5` as `3` is not bigger than `2`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `2` |`3`|`5`|`6`|`7`|`8`|`4`
- `2` is at index 1
- `3` at index 2


 ***important `2` will not be swapped value with `1` cause `2` is bigger than `1`***

## phase 7 `4` is checked with rest of the value
- sorted array `[1,2,3,5,6,8]`
- unsorted array `[4]`

### `4` is compared with `8`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`4`>`8`  |  | [X] | `4` will swap value `8` as `4` is not bigger than `8`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `2` |`3`|`5`|`6`|`7`|`4`|`8`
- `4` is at index 6
- `8` at index 7

### `4` is compared with `7`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`4`>`7`  |  | [X] | `4` will swap value `7` as `4` is not bigger than `7`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `2` |`3`|`5`|`6`|`4`|`7`|`8`
- `4` is at index 5
- `7` at index 7

### `4` is compared with `6`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`4`>`6`  |  | [X] | `4` will swap value `6` as `4` is not bigger than `6`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `2` |`3`|`5`|`4`|`6`|`7`|`8`
- `4` is at index 4
- `6` at index 5 


### `4` is compared with `5`
| Case | True | False |Result
  | ---- | --- |--- |--- |
`4`>`5`  |  | [X] | `4` will swap value `5` as `4` is not bigger than `5`  so positon will be swapped
**Table Standing Index Position**

| 0 | 1 |2|3|4|5|6|7
| --- | --- |--- |--- |--- |--- |--- |--- |
| `1` | `2` |`3`|`4`|`5`|`6`|`7`|`8`
- `4` is at index 3
- `5` at index 4

***Important `4` is not bigger than `3` condition will stop here assumes all the stuffs are sorted***
- `[1,2,3,4,5,6,7,8]` 
  - all the items are sorted



