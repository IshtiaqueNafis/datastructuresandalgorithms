const strings = ["a","b","c","d"];
//  there are 4 items here
// takes up 16 bytes cause has four elements 4*4 is 16
// reuslts are stored in sequenceal way
console.log(strings[0]) // a
console.log(strings[1]) //b
console.log(strings[2]) //c
console.log(strings[3]) //d

// push add at the end
strings.push('e')
console.log(strings)
//[ 'a', 'b', 'c', 'd', 'e' ]
//E showed up at the end

// pop