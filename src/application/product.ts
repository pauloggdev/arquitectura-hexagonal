export interface ProductInterface {
    isvalid(): boolean | Error;
    enable(): boolean | Error;
    disable(): boolean | Error;
    getID(): string;
    getName(): string;
    getStatus(): string;
    getPrice(): number;
}

export enum Status {
    DISABLED = "disabled",
    ENABLED = "enabled",
}

export class Product implements ProductInterface {

    constructor(readonly id: string, readonly name: string, readonly price: number, public status: string) { }
    isvalid(): boolean | Error {
        if (!this.disable() && !this.enable()) {
            return true;
        }
        return false;
    }
    enable(): boolean | Error {
        if (this.price > 0) {
            this.status = Status.ENABLED;
            return true;
        }
        return new Error("Preço do produto não pode ser zero.");
    }
    disable(): boolean | Error {
        if (!this.enable()) {
            this.status = Status.DISABLED;
            return true;
        }
        throw new Error("Produto está disabilitado");
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