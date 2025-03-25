export interface ProductInterface{
    isvalid():boolean|Error;
    enable():boolean | Error;
    disable():boolean | Error;
    getID():string;
    getName():string;
    getStatus():string;
    getPrice():number;
}

export enum Status {
    DISABLED = "disabled",
    ENABLED = "enabled",
}

export class Product implements ProductInterface{

    constructor(readonly id:string, readonly name:string, readonly price:number, public status:string){}
    isvalid(): boolean | Error {
        throw new Error("Method not implemented.");
    }
    enable(): boolean | Error {
        if(this.price > 0){
            this.status = Status.ENABLED;
            return true;
        }
        return new Error("Preço do produto não pode ser zero.");
    }
    disable(): boolean | Error {
        throw new Error("Method not implemented.");
    }
    getID(): string {
        return this.id;
    }
    getName(): string {
       return this.name;
    }
    getStatus(): string {
        return this.status;
    }
    getPrice(): number {
       return this.price;
    }

}