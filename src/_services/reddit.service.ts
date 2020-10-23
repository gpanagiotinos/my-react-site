import { get } from './fetch'

export const redditService = {
    getSubredditList,
}

type GetSubRedditListInput = {
    subreddit: string
    limit: number
    sort: string
}

async function getSubredditList<T>({
    subreddit = 'programming',
    limit = 20,
    sort = 'best',
}: GetSubRedditListInput): Promise<T> {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }

    return await get(`http://www.reddit.com/r/${subreddit}/new.json?sort=${sort}&limit=${limit}`, requestOptions)
}
