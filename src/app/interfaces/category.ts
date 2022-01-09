
export interface CategoryI {
    id: Number;
    name: String;
    ubication: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}

export type NewCategoryI = Pick<CategoryI, 'name' | 'ubication'>;

export interface DataCategoryI extends CategoryI {
    statusText: String;
}
