// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(var i = 0;  i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }



// for(var i = 0; i < arr.length; i++){
//     var matrix = arr[i]
//     for(var j = 0; j < matrix.length; j++){
//         console.log(matrix[i]);
//     }
// }


// arr.forEach(item =>{
//     item.forEach(val =>{
//        val % 2 == 0 ? newArr.push(val) : val % 2 == 1 ? newArr.unshift(val) : 'error'
//     })
// })
// console.log(newArr);



// for(var i = 0; i < arr.length; i++){
//     var v = 0
//     var matrix = arr[v]
//     for(var j = 0; j < matrix.length; j++){
//         console.log(matrix[v]);
//     }
// }



let arr = []
let a = 0
for(var i = 0; i < 3; i++){
    arr[i] = [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
    ]
}
console.log(arr);

// console.log(arr);
// for (var i = 0; i < 3; i++){
//     for (var j = 0; j < arr[i].length; j++){
//         a += arr[i][j]
//     }
// }
// console.log(a);


// let res = 0
// arr.forEach(item =>{
//     res = item.reduce((result, item) =>{
//         return result + item
//     })
//     console.log(res);
// })


// var col = 0;
// var row = 0;

// for(var i = 0; i < arr.length; i++){
//     var res = 0
//     for(var j = 0 ; j < arr.length; j++){
//         res += arr[row][col]
//         row++
//     };

//     console.log(`Сумма ${col + 1} колонны = ${res}`);
//     col++
//     row = 0
// }


// var row = 2;
// var  col = 0 ;
// for(var i = 0; i < arr.length ; i++){
//     var res = 0
//     for(var j = i; j < arr[i].length - i; j++){
//         res += arr[i][row]  
//         row--
//     };
//     console.log(res)
// }


// Решение: сумма по горизонтали

// var col = 0;
// var row = 0;

// for(var i = 0; i < arr.length; i++){
//     var res = 0
//     for(var j = 0 ; j < arr.length; j++){
//         res += arr[i][col]
//         col++
//     };

//     console.log(res);
//     col++
//     col = 0
// }

// Решение по главная диагонали:

// let col = 0;
// let row = 0;
// let sum = 0;

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//         if(i == j){
//             sum += arr[i][j]
//         }
//     }
// }
// console.log(sum);



// Решение по ворой диагонали



// let col = 2;
// let row = 0;
// let sum = 0;
// let sum2 = 0

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//         if(i == j){
//             let n = arr.length - 1;
//             sum += arr[i][j]
//             sum2 += [i][n]
//         }
//         console.log(sum2);
//         n--
//     }
// }

var sum1 = 0;
var sum2 = 0;

var row = 0;
var rowReverse = 2;

for(var i = 0;i < arr.length;i++){
    sum1 +=  arr[i][row]
    sum2 += arr[i][rowReverse]
    row++
    rowReverse--
}

console.log(sum1)
console.log(sum2)



