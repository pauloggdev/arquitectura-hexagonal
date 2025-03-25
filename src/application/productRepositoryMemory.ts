import { ProductInterface } from "./product";
import { ProductServiceInterface } from "./product.service.interface";
export default class ProductRepositoryMemory implements ProductServiceInterface{
    getById(id: string): Promise<ProductInterface | Error> {
        throw new Error("Method not implemented.");
    }
    create(name: string, price: number): Promise<ProductInterface | Error> {
        throw new Error("Method not implemented.");
    }
    enable(product: ProductInterface): Promise<ProductInterface | Error> {
        throw new Error("Method not implemented.");
    }
    disable(product: ProductInterface): Promise<ProductInterface | Error> {
        throw new Error("Method not implemented.");
    }

}