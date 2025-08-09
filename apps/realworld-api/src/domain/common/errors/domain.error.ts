import { AppError } from '@core/errors';

/**
 * Represents a domain-specific error in the application.
 * Extends the `AppError` class to provide additional context for errors that occur within the domain layer.
 */
export class DomainError extends AppError {
    public readonly field?: string;

    /**
     * Creates an instance of `DomainError`.
     * @param message - The error message describing the domain error.
     * @param field - An optional field name associated with the error, providing additional context.
     * @param code - A string representing the specific error code.
     * @param cause - An optional underlying error that caused this domain error.
     */
    constructor(message: string, field?: string, code: string = 'Domain', cause?: Error) {
        super(message, 'DOMAIN', code, cause);
        this.name = 'DomainError';
        this.field = field;
    }
}
