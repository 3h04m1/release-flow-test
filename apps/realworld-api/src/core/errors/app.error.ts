import { ErrorType } from "./error.types";

/**
 * Represents a custom application error.
 * Extends the built-in `Error` class and adds additional properties for error type and code.
 */
export class AppError extends Error {
  /**
   * The error code associated with this error.
   */
  public readonly code: string;

  /**
   * The type of error, as defined in `ErrorType`.
   */
  public readonly type: ErrorType;

  /**
   * Creates an instance of `AppError`.
   * @param message - The error message.
   * @param type - The type of error.
   * @param code - The error code (defaults to `"APP_ERROR"`).
   * @param cause - The original error that caused this error, if any.
   */
  constructor(message: string, type: ErrorType, code: string = "APP_ERROR", cause?: Error) {
    super(message);
    this.name = "AppError";
    this.type = type;
    this.code = code;
    this.cause = cause;
  }

  /**
   * Type guard to check if an error is an instance of `AppError`.
   * @param error - The error to check.
   * @returns `true` if the error is an `AppError`, otherwise `false`.
   */
  public static isAppError(error: unknown): error is AppError {
    return error instanceof AppError;
  }
}
