import { randomUUID } from 'crypto';

import { OptionalId, Updatable } from '@core/types';
import { BaseModel } from '@domain/common';

import { IComment } from './interfaces';

/**
 * Represents a comment model in the application.
 * Extends the `BaseModel` and implements the `IComment` interface.
 */
export class CommentModel extends BaseModel implements IComment {
    /**
     * The ID of the article associated with the comment.
     */
    public readonly articleId: string;

    /**
     * The ID of the author who created the comment.
     */
    public readonly authorId: string;

    /**
     * The body content of the comment.
     */
    public readonly body: string;

    /**
     * Creates an instance of `CommentModel`.
     * @param id - The unique identifier of the comment.
     * @param body - The content of the comment.
     * @param authorId - The ID of the author who created the comment.
     * @param articleId - The ID of the article associated with the comment.
     * @param createdAt - The timestamp when the comment was created (optional).
     * @param updatedAt - The timestamp when the comment was last updated (optional).
     */
    private constructor(
        id: string,
        body: string,
        authorId: string,
        articleId: string,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        super(id, createdAt, updatedAt);
        this.body = body;
        this.authorId = authorId;
        this.articleId = articleId;
    }

    /**
     * Factory method to create a new `CommentModel` instance.
     * @param data - The data required to create a comment, including optional ID.
     * @returns A new instance of `CommentModel`.
     */
    public static make(data: OptionalId<IComment>): CommentModel {
        const comment = new CommentModel(
            data.id ?? randomUUID(),
            data.body,
            data.authorId,
            data.articleId,
            data.createdAt,
            data.updatedAt,
        );
        comment.validate(data);
        return comment;
    }

    /**
     * Converts the `CommentModel` instance to a plain JSON object.
     * @returns A JSON representation of the comment.
     */
    public toJSON(): IComment {
        return {
            articleId: this.articleId,
            authorId: this.authorId,
            body: this.body,
            createdAt: this.createdAt,
            id: this.id,
            updatedAt: this.updatedAt,
        };
    }

    /**
     * Updates the comment with new data and returns a new `CommentModel` instance.
     * @param data - The data to update the comment with.
     * @returns A new instance of `CommentModel` with updated data.
     */
    public update(data: Updatable<IComment>) {
        const updatedData: IComment = {
            ...this.toJSON(),
            ...data,
        };
        return CommentModel.make({
            ...updatedData,
            updatedAt: new Date(),
        });
    }

    /**
     * Validates the comment data to ensure it meets the required constraints.
     * @param data - The data to validate.
     * @throws Will throw an error if validation fails.
     */
    protected validate(data: OptionalId<IComment>) {
        super.validate(data);
        if (!data.body || data.body.trim() === '') {
            throw new Error('Body cannot be empty');
        }
        if (data.body.length > 500) {
            throw new Error('Body must be at most 500 characters long');
        }
        if (!data.authorId || !data.articleId) {
            throw new Error('Author ID and Article ID cannot be empty');
        }
    }
}
