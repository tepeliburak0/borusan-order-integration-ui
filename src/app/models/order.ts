export interface Order{
    customerOrderId:string;
    outputAdress:string;
    inputAdress:string;
    quantity:number;
    quantityUnit:string;
    weight:number;
    weightUnit:string;
    stockId:string;
    stockName:string;
    note:string;
    status:string;
}