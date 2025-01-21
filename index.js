var valueGet = function (e) {
    console.log(e);
    var input = document.getElementById('input');
    input.value += e;
};
var calculateValue = function () {
    var input = document.getElementById('input');
    var checkVal = input.value;
    // console.log(checkVal);
    if (checkVal) {
        var allValuesArr = [];
        for (var i = 0; i < checkVal.length; i++) {
            allValuesArr.push(checkVal[i]);
        }
        var arrFv = allValuesArr[0];
        var arrLv = allValuesArr[allValuesArr.length - 1];
        console.log("FirstValue ==>" + arrFv);
        console.log("lastValue ==>" + arrLv);
        if ( // First Condition Agr user Start ma number ki jga (+ - /) koi be operator use kre ga 
        (arrFv === '+' || arrFv === '-' || arrFv === '/') ||
            (arrLv === '+' || arrLv === '-' || arrLv === '/')) {
            alert('Not Calculate Operation');
            input.value = '';
        }
        else {
            var input_1 = document.getElementById('input');
            var calcu = eval(input_1.value);
            input_1.value = calcu;
        }
    }
    else {
        alert('Insert a value');
    }
    // let cV:number  =  eval(input.value)
    // input.value = cV
};
var clearAll = function () {
    var input = document.getElementById('input');
    input.value = '';
    console.log(input.value);
};
