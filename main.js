// TASK 1
// let a = 10,
//   b = 8;

// while (a >= b) {
//   a -= b;
//   console.log(a);
// }

// TASK 2
// let a = 5,
//   b = 1,
//   c = 0;
// while (a >= b) {
//   a -= b;
//   c += 1;
//   console.log(c, a);
// }

// TASK 3
// let k = 21,
//   n = 14;
// c = 0;
// while (k > n) {
//   k -= n;
//   c += 1;
//   console.log(c, k);
//   n++;
// }

// TASK 4
// let n = 81;
// c = 4;
// while (n > 0) {
//   console.log(n == 3 ** c);                         ??????
//   c += 1;
//   break;
// }

// TASK 5
// let n = 8,
//   k = 3;
// n = 2 ** k;
// console.log(Math.log2(n));

// TASK 17 == TASK 3

// TASK 18
// let n = 9;
// k = n % 3;
// m = Math.trunc(n / 3);
// console.log(`${k} ${m}`);

// TASK 19
// let n = 15;
// k = n % 4;
// m = Math.trunc(n / 4);
// left = Math.trunc(n / 10);
// right = n % 10;
// console.log(left + right, m, k);

// TASK20
// let n = 15;
// k = n % 4;
// m = Math.trunc(n / 4);
// left = Math.trunc(n / 10);
// right = n % 10;
// console.log(left <= 2 <= right);

// TASK 21
// let n = 10;
// let odd = 0;
// k = n % 4;
// m = Math.trunc(n / 4);
// left = Math.trunc(n / 10);
// right = n % 10;
// while (odd % 2 == 0) {
//   console.log(left < odd < right);
//   odd += 1;
// }

// TASK 22
// function ordinary(n) {
//   let i = 1;
//   while (n / i == n) {
//     n % 2 == 0;              ?????
//     console.log(n);
//     i++;
//   }
// }
// ordinary(51);
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// FROM THE PREVIOUS H/W
// EXERCISE 1
num = 10;
str = num.toString();
console.log(str * 4);
