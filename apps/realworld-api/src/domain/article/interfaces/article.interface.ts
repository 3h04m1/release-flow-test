import { IComment } from '@domain/article';
import { ITag } from '@domain/article/tag';
import { IBaseModel } from '@domain/common';

export interface IArticle extends IBaseModel {
    authorId: string;
    body: string;
    commentList: IComment[];
    createdAt: Date;
    description: string;
    slug: string;
    tagList: ITag[];
    title: string;
    updatedAt: Date;
}
