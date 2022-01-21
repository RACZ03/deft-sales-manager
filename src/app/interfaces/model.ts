export interface ModelI {
    id: Number;
    name: String;
    status: boolean;
    createdAt: Number;
    updatedAt: Number;
}
export type NewModelI = Pick<ModelI, 'name'>;

export interface DataModelI extends ModelI {
    statusText: String;
}
