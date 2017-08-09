function* range(from, to) {
    // your code goes here
    var index = from;
    while (index <= to) {
        yield index++;
    }
}

for (var r of range(5, 10)) {
    console.log(r);
}
