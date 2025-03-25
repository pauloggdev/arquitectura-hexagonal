import { ProductInterface } from "./product";

export interface ProductServiceInterface{
    getById(id: string):Promise<ProductInterface |Error>;
    create(name: string, price:number):Promise<ProductInterface |Error>;
    enable(product:ProductInterface):Promise<ProductInterface |Error>;
    disable(product:ProductInterface):Promise<ProductInterface |Error>;
}