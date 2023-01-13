interface Coin {
    type : number;
    worth : number;
}

class Charger{
    coin : Coin;
    constructor(){
        let coinType : number = this.inputCoin();
        let coinWorth : number = this.test(coinType);
        this.coin = {type :  coinType, worth : coinWorth};
    }

    setCoin() : void{
        this.coin.type = this.inputCoin();
        this.coin.worth = this.test(this.coin.type);
    }

    convert() : Number{
        let convertTo = {} as Coin;
        convertTo.type = this.inputCoin();
        convertTo.worth = this.test(convertTo.type)
        let amount = Number(prompt("enter the amount of money: "));

        return ((amount/this.coin.worth)*convertTo.worth);
    }

    convertSome() : string{
        let amount = Number(prompt("enter the amount of money: "));
        let returnedStr : string = "";
        let convertTo : Array<Coin> = {} as Array<Coin>;
        const arrayStr = prompt("Enter coin types: ") ?? "null";
        let arrType : Array<number> = arrayStr.split(',').map((value : string) => {
            return parseInt(value);
        });
        convertTo.length = arrType.length;
        for (let i = 0; i < arrType.length; i++) {
            let coinType : number = arrType[i];
            let coinWorth : number = this.test(arrType[i]);
            convertTo[i] = {type :  coinType, worth : coinWorth}; 
        }  
        for (let j = 0; j < convertTo.length; j++) {
            returnedStr+=`type: ${convertTo[j].type}, worth: ${(amount/this.coin.worth)*convertTo[j].worth} `       
        }    
        return returnedStr;
    }

    test(coin) : number
    {
        return Number(this.getCoinValue(coin));        
    }
    async getCoinValue(coin : number) : Promise<number>
    {      
        let list : string[] = [];
        let response =  await fetch('Rates.txt')
        .then(response => response.text())
        .then(text => {
            list = text.split('\n');
            return this.checkValue(list, coin)});     
        return response;
    }
    
    checkValue(list: string[], coin : number) : number
    {
        let splittedArray :  string[][] = list.map((value) => {
            return(value.split(':'));
        });
        return (Number(splittedArray[coin-1][1]));
    }

    
    previewFile() : string 
    {
        let s :string = "";
        const reader = new FileReader();     
        let data : Blob = new Blob(["Rates.txt"], { type: "text/plain" }); 

        let arrayOfBlob : Array<Blob> = new Array<Blob>();
        arrayOfBlob.push(data);
        let file : File = new File(arrayOfBlob ,"Rates.txt" ,{ type: "text/plain" });      
        
        console.log(String(reader.result));
        s = String(reader.result);
        if (file) {
          reader.readAsText(file);
          s = String(reader.result);
        }

        return s;
    }

    inputCoin() : number
    {
        return Number(prompt("Enter coin type: ") ?? "null");
    }
}
const charger = new Charger();
alert(charger.convertSome());
