export interface Me {
    basics: Basics
    work?: Work[] | null
    education?: Education[] | null
    skills?: Skill[] | null
    interests?: Interest[] | null
    information?: Information[] | null
}

export interface Basics {
    firstName: string | null
    lastName: string | null
    email: string | null
    website: string | null
    summary: string | null
    title: string | null
    picture: string | undefined
    mobile: string | null
    address?: Address | null
    socials: Social[]
}
export interface Work {
    company: string
    position: string | null
    website: string | null
    startDate: string | null
    endDate: string | null
    summary: string | null
    highlights: string[] | null
}

export interface Education {
    institution: string
    area: string | null
    website: string | null
    studyType: string | null
    startDate: string | null
    endDate: string | null
    summary: string | null
    highlights: string[] | null
    gpa: string | null
}

export interface Skill {
    name: string
    level: string | null
    keywords: string[] | null
}

export interface Language {
    language: string | null
    fluency: string | null
}

export interface Interest {
    name: string
    level: string | null
    keywords: string[] | null
}

export interface Information {
    name: string
}

export interface Social {
    network: string | null
    username: string | null
    url: string | null
}

export interface Address {
    streetName: string | null
    houseNumber: string | null
    postalCode: string | null
    city: string | null
    region: string | null
    country: string | null
    countryCode: string | null
}
