import { IBaseModel } from '@domain/common';

export interface ITag extends IBaseModel {
    id: string;
    name: string;
    slug: string;
}
