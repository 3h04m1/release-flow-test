import { randomUUID } from 'crypto';

import { SLUG_REGEX } from '@core/constants';
import { OptionalId, Updatable } from '@core/types';
import { ITag } from '@domain/article';
import { BaseModel, DomainError } from '@domain/common';

/**
 * Represents a tag model in the application.
 * Extends the `BaseModel` and implements the `ITag` interface.
 */
export class TagModel extends BaseModel implements ITag {
    /**
     * The name of the tag.
     */
    public name: string;

    /**
     * The slug (URL-friendly identifier) of the tag.
     */
    public slug: string;

    /**
     * Creates an instance of `TagModel`.
     * @param id - The unique identifier of the tag.
     * @param slug - The slug of the tag.
     * @param name - The name of the tag.
     * @param createdAt - The timestamp when the tag was created (optional).
     * @param updatedAt - The timestamp when the tag was last updated (optional).
     */
    private constructor(id: string, slug: string, name: string, createdAt?: Date, updatedAt?: Date) {
        super(id, createdAt, updatedAt);
        this.slug = slug;
        this.name = name;
    }

    /**
     * Factory method to create a new `TagModel` instance.
     * @param data - The data required to create a tag, including optional ID.
     * @returns A new instance of `TagModel`.
     */
    public static make(data: OptionalId<ITag>): TagModel {
        const tag = new TagModel(data.id ?? randomUUID(), data.slug, data.name, data.createdAt, data.updatedAt);
        tag.validate(data);
        return tag;
    }

    /**
     * Converts the `TagModel` instance to a plain JSON object.
     * @returns A JSON representation of the tag.
     */
    public toJSON(): ITag {
        return {
            createdAt: this.createdAt,
            id: this.id,
            name: this.name,
            slug: this.slug,
            updatedAt: this.updatedAt,
        };
    }

    /**
     * Updates the tag with new data and returns a new `TagModel` instance.
     * @param data - The data to update the tag with.
     * @returns A new instance of `TagModel` with updated data.
     */
    public update(data: Updatable<ITag>): TagModel {
        const updatedData: ITag = {
            ...this.toJSON(),
            ...data,
        };
        return TagModel.make({
            ...updatedData,
            updatedAt: new Date(),
        });
    }

    /**
     * Validates the tag data to ensure it meets the required constraints.
     * @param data - The data to validate.
     * @throws Will throw a `DomainError` if validation fails.
     */
    protected validate(data: OptionalId<ITag>): void {
        super.validate(data);

        if (!SLUG_REGEX.test(data.slug)) {
            throw new DomainError('Slug must be a valid slug format (lowercase letters, numbers, and hyphens)');
        }
        if (data.name.length > 50) {
            throw new DomainError('Name must be at most 50 characters long');
        }
        if (data.slug.length > 70) {
            throw new DomainError('Slug must be at most 70 characters long');
        }
        if (data.name.trim() === '' || data.slug.trim() === '') {
            throw new DomainError('Name and Slug cannot be empty');
        }
    }
}
