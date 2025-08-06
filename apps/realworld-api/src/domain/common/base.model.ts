import { isUUID } from 'class-validator';
import { DomainError } from './errors';
import { IBaseModel } from './interfaces';
import { OptionalId } from '../../core';

export abstract class BaseModel<IdType = string> implements IBaseModel<IdType> {
    public readonly id: IdType;
    public readonly createdAt: Date = new Date();
    public updatedAt: Date = new Date();

    protected constructor(id: IdType, createdAt?: Date, updatedAt?: Date) {
        this.id = id
        if (createdAt) {
            this.createdAt = createdAt;
        }
        if (updatedAt) {
            this.updatedAt = updatedAt;
        }
    }

    protected validate(data: OptionalId<IBaseModel>): void {
        if (data.id && !isUUID(data.id, '4')) {
            throw new DomainError('ID must be a valid UUID');
        }
        if (!(data.createdAt instanceof Date) || isNaN(data.createdAt.getTime())) {
            throw new DomainError('CreatedAt must be a valid Date');
        }
        if (!(data.updatedAt instanceof Date) || isNaN(data.updatedAt.getTime())) {
            throw new DomainError('UpdatedAt must be a valid Date');
        }
    }

    public abstract toJSON(): IBaseModel;
}
