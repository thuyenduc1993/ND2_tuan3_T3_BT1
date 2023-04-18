function countAppear(arr,value){
    let count = 0;
    for (let num of arr){
        if(value === num){
            count++;
        }
    }
    return count;
}
let new_arr = [1,2,3,4,5,6,2,5,6,7,8,2,9,2];
console.log(countAppear((new_arr),2));