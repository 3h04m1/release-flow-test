import { randomUUID } from 'crypto';

import { OptionalId, RequiredData } from '@core/types';
import { BaseModel, DomainError } from '@domain/common';
import { IUser } from '@domain/user/interfaces';
import { UserProfileModel } from '@domain/user/user-profile.model';

/**
 * Represents a user model in the application.
 * Extends the `BaseModel` and implements the `IUser` interface.
 * Provides properties and methods for user data, validation, and profile conversion.
 */
export class UserModel extends BaseModel implements IUser {
    /**
     * The biography of the user.
     */
    public readonly bio: string;

    /**
     * The email address of the user.
     */
    public readonly email: string;

    /**
     * The URL of the user's profile image.
     */
    public readonly image: string;

    /**
     * The name of the user.
     */
    public readonly name: string;

    /**
     * Creates an instance of `UserModel`.
     * @param id - The unique identifier of the user.
     * @param email - The email address of the user.
     * @param name - The name of the user.
     * @param bio - The biography of the user.
     * @param image - The URL of the user's profile image.
     * @param createdAt - The timestamp when the user was created (optional).
     * @param updatedAt - The timestamp when the user was last updated (optional).
     */
    private constructor(
        id: string,
        email: string,
        name: string,
        bio: string,
        image: string,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        super(id, createdAt, updatedAt);
        this.email = email;
        this.name = name;
        this.bio = bio;
        this.image = image;
    }

    /**
     * Factory method to create a new `UserModel` instance.
     * @param data - The data required to create a user, including optional ID.
     * @returns A new instance of `UserModel`.
     */
    public static make(data: RequiredData<IUser>): UserModel {
        const user = new UserModel(
            data.id ?? randomUUID(),
            data.email,
            data.name,
            data.bio,
            data.image,
            data.createdAt,
            data.updatedAt,
        );
        user.validate(user);
        return user;
    }

    /**
     * Converts the `UserModel` instance to a plain JSON object.
     * @returns A JSON representation of the user.
     */
    public toJSON(): IUser {
        return {
            bio: this.bio,
            createdAt: this.createdAt,
            email: this.email,
            id: this.id,
            image: this.image,
            name: this.name,
            updatedAt: this.updatedAt,
        };
    }

    /**
     * Converts the user model to a user profile model.
     * @param following - Indicates if the current user is following this user (default: false).
     * @returns An instance of `IUserProfile`.
     */
    public toProfile(following = false): UserProfileModel {
        return UserProfileModel.make({
            bio: this.bio,
            createdAt: this.createdAt,
            following,
            id: this.id,
            image: this.image,
            updatedAt: this.updatedAt,
            username: this.name,
        });
    }

    /**
     * Validates the user data to ensure it meets required constraints.
     * @param data - The data to validate.
     * @throws Will throw an error if validation fails for email, name, bio, or image.
     */
    protected validate(data: OptionalId<IUser>) {
        if (!data.email || !data.email.includes('@')) {
            throw new DomainError('Email is required and must be a valid email address', 'email');
        }
        if (data.name.length > 50) {
            throw new DomainError('Name must be at most 50 characters long', 'name');
        }
        if (data.bio.length > 160) {
            throw new DomainError('Bio must be at most 160 characters long', 'bio');
        }
        if (data.image && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(data.image)) {
            throw new DomainError('Image must be a valid URL to an image file', 'image');
        }
        super.validate(data);
    }
}
