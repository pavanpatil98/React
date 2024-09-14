 //name export
 export function linearSearch(arr,val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
 }

export function binarySearch(arr,val){
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === val){
            return mid;
        }
        
        if(arr[mid] < val){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    } 
 }

 function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
 }

 export default print;