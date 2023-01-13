import { CoinType } from "./CoinType.js";
alert(2);
const c = CoinType.dollar;
function getAverage() {
    var _a;
    let arrayStr = (_a = prompt("please enter an array of numbers: ")) !== null && _a !== void 0 ? _a : "null";
    let arr;
    if (arrayStr != null) {
        arr = arrayStr.split(',');
    }
    else
        return -1;
    let sum = arr.reduce((accumulator, value) => {
        let intAcc = parseInt(accumulator);
        intAcc += parseInt(value);
        return accumulator = intAcc.toString();
    });
    return parseInt(sum) / arr.length;
}
function getAmountOfPositive() {
    var _a;
    let arrayStr = (_a = prompt("please enter an array of numbers: ")) !== null && _a !== void 0 ? _a : "null";
    let arr = arrayStr.split(',').map((value) => {
        return parseInt(value);
    });
    let positiveArr = arr.filter((value) => {
        return (value > 0);
    });
    return positiveArr.length;
}
function sortList() {
    var _a;
    let arrayStr = (_a = prompt("please enter an array of numbers: ")) !== null && _a !== void 0 ? _a : "null";
    let arr = arrayStr.split(',').map((value) => {
        return parseInt(value);
    });
    let sorted = arr.sort((a, b) => a - b);
    return sorted;
}
alert(sortList());
