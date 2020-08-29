import { UnsplashImage, ImageUrlInput } from '@/_types/image'

export const imageUrl = ({ width, height }: ImageUrlInput): UnsplashImage => ({
    img: `https://source.unsplash.com/random/${width}x${height}`,
})

export default { imageUrl }
