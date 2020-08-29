import { Post } from '@/_types/post'
import * as faker from 'faker'

export const randomPost = (): Post => {
    return {
        title: faker.lorem.sentence(),
        summary: faker.lorem.sentence(),
        header: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        footer: faker.lorem.paragraph(),
    }
}
export default { randomPost }
