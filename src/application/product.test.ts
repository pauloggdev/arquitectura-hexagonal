import { Product, Status } from "./product";

test("Should test product enable", () => {
    const product = new Product("123", "Test", 10, Status.ENABLED);
    const enable = product.enable();
    expect(enable).toBe(true);
});

test("should return error if price is zero", () => {
    const product = new Product("123", "Test", 0, Status.DISABLED);
    const enable = product.enable();
    expect(enable).toBeInstanceOf(Error);
});