module.exports = function mse(original, noisy) {
    var error
    var offset;
    var sum = 0;
    var i = 0;

    for (i = 0; i < original.length; i += 1) {
        error = original[i] - noisy[i];
        sum += error * error;
    }
    return sum / original.length;
};