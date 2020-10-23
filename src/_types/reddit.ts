export interface RedditListing {
    before: string
    after: string
    modhash: string
    children: RedditListing[]
}
export interface RedditLink {
    author: string
    author_flair_css_class: string
    author_flair_text: string
    clicked: boolean
    domain: string
    hidden: boolean
    is_self: boolean
    likes: boolean
    link_flair_css_class: string
    link_flair_text: string
    locked: boolean
    media: unknown
    media_embed: unknown
    num_comments: number
    over_18: boolean
    permalink: string
    saved: boolean
    score: number
    selftext: string
    selftext_html: string
    subreddit: string
    subreddit_id: string
    thumbnail: string
    title: string
    url: string
    edited: string
    distinguished: string
    stickied: boolean
}

export interface RedditThing {
    id: string
    name: string
    kind: string
    data: RedditListing | RedditLink
}
