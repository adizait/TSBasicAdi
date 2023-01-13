"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Charger {
    constructor() {
        let coinType = this.inputCoin();
        let coinWorth = this.test(coinType);
        this.coin = { type: coinType, worth: coinWorth };
    }
    setCoin() {
        this.coin.type = this.inputCoin();
        this.coin.worth = this.test(this.coin.type);
    }
    convert() {
        let convertTo = {};
        convertTo.type = this.inputCoin();
        convertTo.worth = this.test(convertTo.type);
        let amount = Number(prompt("enter the amount of money: "));
        return ((amount / this.coin.worth) * convertTo.worth);
    }
    convertSome() {
        var _a;
        let amount = Number(prompt("enter the amount of money: "));
        let returnedStr = "";
        let convertTo = {};
        const arrayStr = (_a = prompt("Enter coin types: ")) !== null && _a !== void 0 ? _a : "null";
        let arrType = arrayStr.split(',').map((value) => {
            return parseInt(value);
        });
        convertTo.length = arrType.length;
        for (let i = 0; i < arrType.length; i++) {
            let coinType = arrType[i];
            let coinWorth = this.test(arrType[i]);
            convertTo[i] = { type: coinType, worth: coinWorth };
        }
        for (let j = 0; j < convertTo.length; j++) {
            returnedStr += `type: ${convertTo[j].type}, worth: ${(amount / this.coin.worth) * convertTo[j].worth} `;
        }
        return returnedStr;
    }
    test(coin) {
        return Number(this.getCoinValue(coin));
    }
    getCoinValue(coin) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = [];
            let response = yield fetch('Rates.txt')
                .then(response => response.text())
                .then(text => {
                list = text.split('\n');
                return this.checkValue(list, coin);
            });
            return response;
        });
    }
    checkValue(list, coin) {
        let splittedArray = list.map((value) => {
            return (value.split(':'));
        });
        return (Number(splittedArray[coin - 1][1]));
    }
    previewFile() {
        let s = "";
        const reader = new FileReader();
        let data = new Blob(["Rates.txt"], { type: "text/plain" });
        let arrayOfBlob = new Array();
        arrayOfBlob.push(data);
        let file = new File(arrayOfBlob, "Rates.txt", { type: "text/plain" });
        console.log(String(reader.result));
        s = String(reader.result);
        if (file) {
            reader.readAsText(file);
            s = String(reader.result);
        }
        return s;
    }
    inputCoin() {
        var _a;
        return Number((_a = prompt("Enter coin type: ")) !== null && _a !== void 0 ? _a : "null");
    }
}
const charger = new Charger();
alert(charger.convertSome());
