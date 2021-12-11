
export interface CategoryI {
    id: Number;
    name: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export interface PresentationI {
    id: Number;
    name: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export interface MarkI {
    id: Number;
    name: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export interface ModelI {
    id: Number;
    name: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export interface SupplierI {
    id: Number;
    documentType: String;
    numberDoc: String;
    businessName: String;
    address: String;
    sellerName: String;
    surname: String;
    phone?: String;
    gmail?: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export interface ProductI {
    id: Number;
    code: Number;
    name: String;
    description: String;
    stock: Number;
    presentationId?: Number;
    purchasePrice: Number;
    salePrice: Number;
    wholesalePrice?: Number;
    discount?: Number;
    expiration?: Number;
    expirationDate?: Number;
    warranty?: String;
    duration?: String;
    supplierId: Number;
    categoryId: Number;
    markId?: Number;
    modelId?: Number;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}