import { ErrorType } from "./error.types";

export class AppError extends Error {
    public readonly type: ErrorType;
    public readonly code: string;

    constructor(
        message: string,
        type: ErrorType,
        code: string = 'APP_ERROR'
    ) {
        super(message);
        this.name = 'AppError';
        this.type = type;
        this.code = code;
    }
    public static isAppError(error: unknown): error is AppError {
        return error instanceof AppError;
    }
}
