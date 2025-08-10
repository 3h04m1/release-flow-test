import { IBaseModel } from '@domain/common';

export interface IUserProfile extends IBaseModel {
    bio?: string;
    following: boolean;
    image?: string;
    username: string;
}
