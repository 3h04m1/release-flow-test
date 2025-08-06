export class DomainError extends Error {
    public readonly field?: string;
    public readonly code: string = 'DOMAIN_ERROR';

    constructor(message: string, field?: string) {
        super(message);
        this.name = 'DomainError';
        this.field = field;
        Object.setPrototypeOf(this, DomainError.prototype);
    }
}