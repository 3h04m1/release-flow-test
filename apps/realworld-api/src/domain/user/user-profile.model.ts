import { BaseModel } from '@domain/common';
import { IUserProfile } from '@domain/user/interfaces/user-profile.interface';

/**
 * Represents a user profile model in the application.
 * Extends the `BaseModel` and implements the `IUserProfile` interface.
 * Provides properties and methods for user profile data and serialization.
 */
export class UserProfileModel extends BaseModel implements IUserProfile {
    /**
     * The biography of the user.
     */
    public bio: string;

    /**
     * Indicates whether the current user is following this profile.
     */
    public following: boolean;

    /**
     * The URL of the user's profile image.
     */
    public image: string;

    /**
     * The username of the profile.
     */
    public username: string;

    /**
     * Creates an instance of `UserProfileModel`.
     * @param id - The unique identifier of the profile.
     * @param username - The username of the profile.
     * @param bio - The biography of the user.
     * @param image - The URL of the user's profile image.
     * @param following - Indicates if the current user is following this profile.
     * @param createdAt - The timestamp when the profile was created (optional).
     * @param updatedAt - The timestamp when the profile was last updated (optional).
     */
    private constructor(
        id: string,
        username: string,
        bio: string,
        image: string,
        following: boolean,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        super(id, createdAt, updatedAt);
        this.username = username;
        this.bio = bio;
        this.image = image;
        this.following = following;
    }

    /**
     * Factory method to create a new `UserProfileModel` instance.
     * @param data - The data required to create a user profile.
     * @returns A new instance of `UserProfileModel`.
     */
    public static make(data: IUserProfile): UserProfileModel {
        const profile = new UserProfileModel(
            data.id,
            data.username,
            data.bio ?? '',
            data.image ?? '',
            data.following,
            data.createdAt,
            data.updatedAt,
        );
        profile.validate(data);
        return profile;
    }

    /**
     * Converts the `UserProfileModel` instance to a plain JSON object.
     * @returns A JSON representation of the user profile.
     */
    public toJSON(): IUserProfile {
        return {
            bio: this.bio,
            createdAt: this.createdAt,
            following: this.following,
            id: this.id,
            image: this.image,
            updatedAt: this.updatedAt,
            username: this.username,
        };
    }
}
