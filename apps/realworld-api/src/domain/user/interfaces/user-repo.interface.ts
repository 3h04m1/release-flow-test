import { UserModel } from '@domain/user/user.model';

export interface IUserRepo {
    create(user: UserModel): Promise<UserModel>;
    delete(id: string): Promise<boolean>;
    findByEmail(email: string): Promise<null | UserModel>;
    findById(id: string): Promise<null | UserModel>;
    update(id: string, user: UserModel): Promise<null | UserModel>;
}

export const IUserRepo = Symbol('IUserRepo');
