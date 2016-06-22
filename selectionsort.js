//  I created this code based on a Khan Lesson then changed the println from khan at the end to console.log(array);
// CW Coleman  160622
// save this file as selectionsort.js and run with node selectionsort.js 

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
var minValue = array[startIndex];
    var minIndex = startIndex;
    var nextIndex;

    for(nextIndex = minIndex + 1; nextIndex <array.length ; nextIndex++){
                if (array[nextIndex] < minValue) {
                        minValue = array[nextIndex];
                        minIndex = nextIndex;
                }
        }
    return minIndex;

};

var selectionSort = function(array) {
    var i;
    var min = 0;
    var minVal= array[0];
    for (i = 0; i < array.length; i++) {
        min = indexOfMinimum(array, i);
        swap(array, i, min);
    }
};
// change the elements in the array.  keep them out of order
var array = [22, 11, 99, 88, 9, 7, 42,44,11,99,88,22,3,1,0,-3,-5];
selectionSort(array);

console.log(array);
