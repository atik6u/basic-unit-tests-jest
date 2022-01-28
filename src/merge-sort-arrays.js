function mergeSortedArrays (t1, t2) {


    var cursor1 = 0;
    var cursor2 = 0;
    var result = [];
    
    while ((cursor1 < t1.length) || (cursor2 < t2.length)) {

        //finding the next element in t1 if there exists, otherwise Infinity
        if (cursor1 < t1.length) {
            if (elem1 > t1[cursor1]) {
                throw "Assertion failed: Not Sorted";
            }
            var elem1 = t1[cursor1];
        } else {
            var elem1 = Infinity;
        }

        //finding the next element in t2 if there exists, otherwise Infinity
        if (cursor2 < t2.length) {
            if (elem2 > t2[cursor2]) {
                throw "Assertion failed: Not Sorted";
            }
            var elem2 = t2[cursor2];
        } else {
            var elem2 = Infinity;
        }

        if (!(elem1 == Infinity && elem2 == Infinity)) {
            if (elem1 < elem2) {
                result.push(elem1);
                cursor1++;
            } else {
                result.push(elem2);
                cursor2++;
            }
        }
    }
    
    return result;
}

module.exports = mergeSortedArrays