import { IBaseModel } from '@domain/common';

export interface IProfile extends IBaseModel {
    bio: string;
    following: boolean;
    id: string;
    image: string;
    username: string;
}
