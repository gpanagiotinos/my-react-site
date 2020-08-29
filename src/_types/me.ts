export interface Me {
    basics: {
        firstName: string | null
        lastName: string | null
        email: string | null
        website: string | null
        summary: string | null
        title: string | null
        picture: string | undefined
        socials: Social[]
    }
}

export interface Social {
    network: string | null
    username: string | null
    url: string | null
}
