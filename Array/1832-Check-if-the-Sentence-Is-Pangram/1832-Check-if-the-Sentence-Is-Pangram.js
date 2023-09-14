/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let ans = {};

    for(let i=0;i<sentence.length;i++) {
        ans[sentence[i]] = 1;
    }

    return (Object.keys(ans).length == 26) ? true : false;
};
