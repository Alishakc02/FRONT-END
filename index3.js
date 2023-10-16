// var array = [1, 7, 8,8,8, 9, 45]
// console.log(array);
// console.log(array.length);
// for (let index = 0; index < array.length; index++){
//     const element = array[index];
//     console.log(element);
//}
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// for (let i = array.length - 1; i >= 0; i--){
//     console.log(array[i]);
// }
//var index = 0;
// while (index < array.length) {
//     console.log(array[index]);
//     index++;
//}
// var index = array.length-1;
// while (index >= 0) {
//     console.log(array[index]);
//     index--;
// }

// array.map((x,i) => {
//     console.log(x,i);
// });

// const arfun = (params) => {
    
// }
// let x = array.map((x) => {
//     if (x === 8) {
//         return null;
//     }
//     else {
//         return x;
//     }
// });
//let y = array.filter((x) => x === 8);
//console.log(x);
//console.log(y);


let arr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
    { id: 7, name: "g" },

];
let obj1 = arr.map((x) => x);
//if we put x.id then it will return id value only
let obj2 = arr.map((x) => x.name);
let obj3 = arr.filter((x) => x.id > 4).map((x) => x.id);
let obj4 = arr.find((x) => (x.name = "e")).id;
console.log(obj4);
let str="lorem ip.sum d.ot"
let obj5 = str.split(".");//If we dont put space then each character will split
console.log(obj5);

console.log(obj1);
console.log(obj2);
console.log(obj3);
let strn = ["l", "o", "r", "e", "m"];
let obj6 = strn.join("");
let obj7 = arr.some((x) => x.id === 5);// It search for the id,if true return true else false
console.log(obj7);