export interface IBaseModel<IdType = string> {
    id: IdType;
    createdAt: Date;
    updatedAt: Date;
}