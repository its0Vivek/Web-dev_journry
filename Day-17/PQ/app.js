// let arr = [1,2,3,4,5,6,2,3]
// let num = 2;

// for (i=0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1)
//     }
// }console.log(arr)

//i = 0 == 1
//i = 1 == 2 comdition therefor 2 get splice
//i = 2 == 3

/////////////////////////////////////////////////////////
// Q -2

let num = 23243425;
let count = 0;

let copy = num;

while(copy>0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count)


