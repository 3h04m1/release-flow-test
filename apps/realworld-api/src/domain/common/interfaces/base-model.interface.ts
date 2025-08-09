export interface IBaseModel<IdType = string> {
    createdAt: Date;
    id: IdType;
    updatedAt: Date;
}
