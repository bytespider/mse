# mse

Mean squared error function  
http://en.wikipedia.org/wiki/Mean_square_error 

# example

```
var mse = require('mse');
var data_1 = [
    188, 100, 114, 171, 171, 173, 230, 149,
    191,  81,  61,  62, 127, 217,  62,  81, 
    178, 159, 245,  18,   9,  86, 201, 166,
    122, 210,   4, 182,  15,  18, 135, 203,
    222, 134, 154,  21,  71, 217,  48, 153,
    113, 234, 207, 119,  51,  61, 149, 222, 
    186,  38, 158,  79, 185,   1, 118, 222,
     22, 137, 110, 206,  94, 120, 163, 241
]; 

var data_2 = [
    188, 100, 114, 171, 171, 173, 230, 149,
    191,  81,  61,  62, 123, 217,  62,  81, 
    178, 159, 245,  18,   9,  86, 201, 166,
    122, 210,   4, 200,  15,  18, 135, 203,
    222, 134, 154,  21,  71, 217,  48, 153,
    113, 234, 207, 119,  51,  61, 149, 222, 
    186,  38, 158,  79, 185,   1, 118, 222,
     22, 137, 110, 206,  94, 120, 163, 241
]; 

var result = mse(data_1, data_2); /* results in a calcuation of 5.3125 */
if (result <> 0) {
    console.log('data sets are different by ' + result);
}

```

# license

MIT
