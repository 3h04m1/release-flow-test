import { IBaseModel } from '@domain/common';

export interface IComment extends IBaseModel {
    articleId: string;
    authorId: string;
    body: string;
}
