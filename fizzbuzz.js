for (var i = 1; i <= 100; i++) {
    var fizzbuzz = '';
    if (i % 3 === 0) {
        fizzbuzz += 'fizz';
    }
    if (i % 5 === 0) {
        fizzbuzz += 'buzz';
    }
    if (fizzbuzz === '') {
        fizzbuzz = i;
    }
    console.log(fizzbuzz);
}
