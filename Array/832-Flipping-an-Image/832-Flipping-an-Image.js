/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(arr => {
        arr = flip(arr);
        for(let i = 0;i<arr.length;i++) {
            arr[i] ^= 1;
        }

        return arr;
    })
};

const flip = (arr) => {
    let start = 0, end = arr.length - 1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
