import { BaseModel } from '@domain/common';
import { IProfile } from '@domain/profile/interfaces';
import { IsBoolean, IsString, IsUrl, MaxLength } from 'class-validator';

/**
 * Represents a user profile model in the application.
 * Extends the `BaseModel` and implements the `IProfile` interface.
 * Provides validation for profile properties using class-validator decorators.
 */
export class ProfileModel extends BaseModel implements IProfile {
    /**
     * The biography of the user.
     * Must be a string with a maximum length of 160 characters.
     */
    @IsString({
        message: 'Bio must be a string',
    })
    @MaxLength(160, {
        message: 'Bio must be at most 160 characters long',
    })
    public readonly bio: string;

    /**
     * Indicates whether the current user is following this profile.
     * Must be a boolean value.
     */
    @IsBoolean({
        message: 'Following must be a boolean',
    })
    public readonly following: boolean;

    /**
     * The URL of the user's profile image.
     * Must be a valid URL.
     */
    @IsUrl(undefined, {
        message: 'Image must be a valid URL',
    })
    public readonly image: string;

    /**
     * The username of the profile.
     * Must be a string with a maximum length of 50 characters.
     */
    @IsString({
        message: 'Username must be a string',
    })
    @MaxLength(50, {
        message: 'Username must be at most 50 characters long',
    })
    public readonly username: string;

    /**
     * Creates an instance of `ProfileModel`.
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
     * Factory method to create a new `ProfileModel` instance.
     * @param data - The data required to create a user profile.
     * @returns A new instance of `ProfileModel`.
     */
    public static make(data: IProfile): ProfileModel {
        const profile = new ProfileModel(
            data.id,
            data.username,
            data.bio,
            data.image,
            data.following,
            data.createdAt,
            data.updatedAt,
        );
        profile.validate(data);
        return profile;
    }

    /**
     * Converts the `ProfileModel` instance to a plain JSON object.
     * @returns A JSON representation of the profile.
     */
    public toJSON(): IProfile {
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
