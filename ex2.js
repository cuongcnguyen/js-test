//Map two 1-dimensional arrays with different length into one 2-dimensional array following the index order and return min value from array 

function mapTwoArr(arr1, arr2){
    const twoDimensionalArr=[];
    //run the loop, the arr with lower length determines how many times the loop runs
    if (arr1.length < arr2.length) {
        for(let i=0; i<arr1.length;i++){
            twoDimensionalArr.push([arr1[i], arr2[i]]);
        }
    } else if (arr1.length > arr2.length){
        for (let i=0;i<arr2.length;i++){
            twoDimensionalArr.push( [arr1[i],arr2[i]] );
        }
    }
    return twoDimensionalArr;
}

console.log(mapTwoArr([1, 2], [5, 6, 7])); //Output: [[1,5], [2,6]]
console.log(mapTwoArr([1, 2,5,8], [5, 6, 7])); //Output: [[1,5], [2,6], [5,7]]
console.log(mapTwoArr([1, 2], [5, 6, 7,9,10])); //output: [[1,5], [2,6]]