import { OptionalId } from '@core/types';
import { isUUID } from 'class-validator';

import { DomainError } from './errors';
import { IBaseModel } from './interfaces';

/**
 * Abstract base model class providing common properties and validation logic for domain models.
 * Implements the `IBaseModel` interface and enforces UUID and date validation for model instances.
 * @template IdType - The type of the model's unique identifier (defaults to `string`).
 */
export abstract class BaseModel<IdType = string> implements IBaseModel<IdType> {
    /**
     * The timestamp when the model was created.
     */
    public readonly createdAt: Date = new Date();

    /**
     * The unique identifier of the model.
     */
    public readonly id: IdType;

    /**
     * The timestamp when the model was last updated.
     */
    public updatedAt: Date = new Date();

    /**
     * Constructs a new instance of the base model.
     * @param id - The unique identifier of the model.
     * @param createdAt - The creation timestamp (optional).
     * @param updatedAt - The last updated timestamp (optional).
     */
    protected constructor(id: IdType, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        if (createdAt) {
            this.createdAt = createdAt;
        }
        if (updatedAt) {
            this.updatedAt = updatedAt;
        }
    }

    /**
     * Converts the model instance to a plain JSON object.
     * @returns A JSON representation of the model.
     */
    public abstract toJSON(): IBaseModel;

    /**
     * Validates the model data to ensure it meets required constraints.
     * @param data - The data to validate.
     * @throws {DomainError} If validation fails for ID, createdAt, or updatedAt.
     */
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
}
