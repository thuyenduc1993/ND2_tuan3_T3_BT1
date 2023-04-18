function countAppear(arr, value) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (value === num) {
            count++;
        }
    }
    return count;
}
var new_arr = [1, 2, 3, 4, 5, 6, 2, 5, 6, 7, 8, 2, 9, 2];
console.log(countAppear((new_arr), 2));
