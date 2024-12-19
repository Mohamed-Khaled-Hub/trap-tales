import { AnyObject, Model } from 'mongoose'

// Objects Types
export type PrimaryArtistType = {
    name: string
    id: number
}

export type SongType = {
    title: string
    url: string
    id: number
}

export type HitType = {
    result: {
        primary_artist: PrimaryArtistType
        title: string
        id: string
    }
}

export type FrontendTrackType = {
    track: string
    artists: string[]
}

export type TrackIdAndUrlType = {
    id: string
    url: string
}

export type FavoritesType = {
    type: 'artist' | 'album' | 'track'
    spotifyId: string
    geniusId?: number
}

export type UserType = {
    email: string
    phone: string
    password: string
    name: string
    dob: Date
    bio: string
    favorites: FavoritesType[]
}

export type UserModelType = Model<UserType> & {
    login(email: string, password: string): Promise<AnyObject>
    signup(
        email: string,
        phone: string,
        password: string,
        name: string,
        dob: Date,
        bio: string
    ): Promise<AnyObject>
}
