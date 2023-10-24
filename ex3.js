// Map multiple 1-dimensional arrays into a multi-dimensional array following the index order and return min value from array (Map n mảng 1 chiều khác độ dài thành 1 mảng đa chiều có cùng thứ tự index với số phần tử nhỏ nhất)

function mapAmountOfArr(...arrays){

    //find the lowest length of all the arrays given
    let shortestLength=0;
    shortestLength = arrays[0].length;
    for (const arr of arrays){
        if (shortestLength > arr.length) {
            shortestLength = arr.length;
        }
    }

    //Iterate to push member to finalArr
    let finalArr = [];
    for (let i =0;i<shortestLength;i++){
        finalArr.push(arrays.map((arr) => arr[i]));
    }
    return finalArr;
}

console.log( mapAmountOfArr([1, 2], [3, 4, 5], [6, 7, 8, 9]) ); //Output: [ [1,3,6], [2,4,7] ]
console.log( mapAmountOfArr([1, 2,3,7], [3, 4, 5], [6]) ); //Output: [ [1,3,6] ]
console.log( mapAmountOfArr([112314, 2], [3], [6, 7]) ); //Output: [ [112314,3,6] ]