import { IArticle } from '@domain/article/interfaces/article.interface';

export interface IArticleRepo {
    create(article: IArticle): Promise<IArticle>;
    delete(id: string): Promise<void>;
    findByAuthor(authorId: string): Promise<IArticle[]>;
    findById(id: string): Promise<IArticle | null>;
    findBySlug(slug: string): Promise<IArticle | null>;
    findByTags(...tags: string[]): Promise<IArticle[]>;
    update(article: IArticle): Promise<IArticle>;
}

export const IArticleRepo = Symbol('IArticleRepo');
