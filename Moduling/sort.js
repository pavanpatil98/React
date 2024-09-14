 function swap(arr,a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
 }
 function bubbleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j+1]){
              swap(arr, j, j+1);
            }
        }
    }
    return arr;
 }

 export default bubbleSort;