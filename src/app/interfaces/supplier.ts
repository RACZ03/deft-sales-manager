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