export type OptionalId<T, IdType = string> = { id?: IdType } & Omit<T, 'id'>;
export type Updatable<T> = { updatedAt?: Date } & Omit<Partial<T>, 'createdAt' | 'id' | 'updatedAt'>;
