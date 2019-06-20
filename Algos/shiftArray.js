function shiftArrayValues(arr) {
    // [2,4,6,8]
    // loop the array
    var first = arr[0]; // 2
    var lastIndex = arr.length - 1;
    for(var i = 0; i<lastIndex; i++){
        // [4,6,8,8] ??
        arr[i] = arr[i+1];
    }
    arr[lastIndex] = first;
   
    // [4,6,8,2]
}