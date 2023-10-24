//1. Map two 1-dimensional arrays with same length into one 2-dimensional array following the index order

function mapTwoArr (arr1,arr2){
    const twoDimensionalArr =[];
    for(let i =0; i <arr1.length; i++){
        twoDimensionalArr.push([arr1[i], arr2[i]]);
    }
    return twoDimensionalArr;
}

console.log(mapTwoArr([1, 2, 3], [4, 5, 6])); //Output: [[1,4], [2,5], [3,6]]
console.log(mapTwoArr([8, 9, 10], [11, 14, 19])); //Output: [[8,11], [9,14], [10,19]] 
console.log(mapTwoArr([42, 28, 38], [44, 65, 86])); //Output: [[42,44], [28,65], [38,86]]