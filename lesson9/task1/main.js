var sh = "#";
var sp = " ";
var index = 8;
var result;
while (index > 0) {
    if (index % 2 != 0)
        result = sp;
    else
        result = sh;
    for (var i = 0; i < 7; ++i) {
        if (result[result.length - 1] === sp)
            result += sh;
        else
            result += sp;
    }
    console.log(result);
    --index;
}
