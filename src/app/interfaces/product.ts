export interface ProductI {
    id: Number;
    code: Number;
    name: String;
    description: String;
    stock: Number;
    presentationId: Number; //
    purchasePrice: Number;
    salePrice: Number;
    wholesalePrice: Number; //
    discount: Number; //
    expiration: Number; //
    expirationDate: Number; //
    warranty: String; //
    duration: String; //
    supplierId: Number;
    categoryId: Number;
    markId: Number; //
    modelId: Number; //
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}
