import { IBaseModel } from '@domain/common';

export interface IUser extends IBaseModel {
    bio: string;
    email: string;
    id: string;
    image: string;
    name: string;
}
