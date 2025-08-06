export type OptionalId<T, IdType = string> = Omit<T, 'id'> & { id?: IdType };
export type Updatable<T> = Omit<Partial<T>, 'createdAt' | 'updatedAt' | 'id'> & { updatedAt?: Date };
