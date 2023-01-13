import { CoinType } from "./CoinType.js";
alert(2);

const c : number = CoinType.dollar;

function getAverage():number{
    let arrayStr : string = prompt("please enter an array of numbers: ") ?? "null";
    let arr : Array<string>;
    if(arrayStr != null){
        arr = arrayStr.split(',');
    }
    else
        return -1;    
    let sum : string = arr.reduce((accumulator : string, value: string):string => {
        let intAcc = parseInt(accumulator);
        intAcc += parseInt(value);
        return accumulator=intAcc.toString();
    })
    return parseInt(sum)/arr.length;
}

function getAmountOfPositive() : number{
    let arrayStr : string = prompt("please enter an array of numbers: ") ?? "null";
    let arr : Array<number> = arrayStr.split(',').map((value : string) => {
        return parseInt(value);
    });
    let positiveArr = arr.filter((value:number) => {
        return (value>0);
    })
    return positiveArr.length;    
}

function sortList() : Array<number>{
    let arrayStr : string = prompt("please enter an array of numbers: ") ?? "null";
    let arr : Array<number> = arrayStr.split(',').map((value : string) => {
        return parseInt(value);
    });
    let sorted : Array<number> = arr.sort((a : number,b : number) => a-b);
    return sorted;
}

alert(sortList());
