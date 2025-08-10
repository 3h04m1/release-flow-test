import { randomUUID } from 'crypto';

import { SLUG_REGEX } from '@core/constants';
import { OptionalId } from '@core/types';
import { CommentModel } from '@domain/article/comment';
import { IArticle } from '@domain/article/interfaces';
import { TagModel } from '@domain/article/tag';
import { BaseModel } from '@domain/common';

/**
 * Represents an article aggregate in the application.
 * Extends the `BaseModel` and implements the `IArticle` interface.
 */
export class ArticleAggregate extends BaseModel implements IArticle {
    /**
     * The ID of the author who created the article.
     */
    public authorId: string;

    /**
     * The body content of the article.
     */
    public body: string;

    /**
     * The list of comments associated with the article.
     */
    public commentList: CommentModel[];

    /**
     * The description of the article.
     */
    public description: string;

    /**
     * The slug (URL-friendly identifier) of the article.
     */
    public slug: string;

    /**
     * The list of tags associated with the article.
     */
    public tagList: TagModel[];

    /**
     * The title of the article.
     */
    public title: string;

    /**
     * Creates an instance of `ArticleAggregate`.
     * @param id - The unique identifier of the article.
     * @param slug - The slug of the article.
     * @param title - The title of the article.
     * @param description - The description of the article.
     * @param body - The body content of the article.
     * @param tagList - The list of tags associated with the article.
     * @param commentList - The list of comments associated with the article.
     * @param authorId - The ID of the author who created the article.
     * @param createdAt - The timestamp when the article was created (optional).
     * @param updatedAt - The timestamp when the article was last updated (optional).
     */
    private constructor(
        id: string,
        slug: string,
        title: string,
        description: string,
        body: string,
        tagList: TagModel[],
        commentList: CommentModel[],
        authorId: string,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        super(id, createdAt, updatedAt);
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.body = body;
        this.tagList = tagList;
        this.authorId = authorId;
        this.commentList = commentList;
    }

    /**
     * Factory method to create a new `ArticleAggregate` instance.
     * @param data - The data required to create an article, including optional ID.
     * @returns A new instance of `ArticleAggregate`.
     */
    public static make(data: OptionalId<IArticle>): ArticleAggregate {
        const article = new ArticleAggregate(
            data.id ?? randomUUID(),
            data.slug,
            data.title,
            data.description,
            data.body,
            data.tagList.map((tag) => TagModel.make(tag)),
            data.commentList.map((comment) => CommentModel.make(comment)),
            data.authorId,
            data.createdAt,
            data.updatedAt,
        );
        article.validate(data);
        return article;
    }

    /**
     * Adds a comment to the article.
     * @param comment - The comment to add.
     * @returns The added comment.
     */
    public addComment(comment: CommentModel): CommentModel {
        this.commentList.push(comment);
        this.updatedAt = new Date();
        return comment;
    }

    /**
     * Converts the `ArticleAggregate` instance to a plain JSON object.
     * @returns A JSON representation of the article.
     */
    public toJSON(): IArticle {
        return {
            authorId: this.authorId,
            body: this.body,
            commentList: this.commentList.map((comment) => comment.toJSON()),
            createdAt: this.createdAt,
            description: this.description,
            id: this.id,
            slug: this.slug,
            tagList: this.tagList.map((tag) => tag.toJSON()),
            title: this.title,
            updatedAt: this.updatedAt,
        };
    }

    /**
     * Validates the article data to ensure it meets the required constraints.
     * @param data - The data to validate.
     * @throws Will throw an error if validation fails.
     */
    protected validate(data: OptionalId<IArticle>) {
        super.validate(data);
        if (!data.slug || !SLUG_REGEX.test(data.slug)) {
            throw new Error('Slug must be a valid slug format (lowercase letters, numbers, and hyphens)');
        }
        if (data.title.length > 100) {
            throw new Error('Title must be at most 100 characters long');
        }
        if (data.description.length > 200) {
            throw new Error('Description must be at most 200 characters long');
        }
        if (data.body.length > 5000) {
            throw new Error('Body must be at most 5000 characters long');
        }
    }
}
