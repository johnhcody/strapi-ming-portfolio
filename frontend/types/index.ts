type ImageFormat = {
  url: string
  name: string
  height: number
  width: number
  size: number
}

export type StrapiImageData = {
  _id: string
  height: number
  width: number
  size: number
  url: string
  name: string
  formats: {
    large: ImageFormat
    medium: ImageFormat
    small: ImageFormat
    thumbnail: ImageFormat
  }
}

export type ArticleData = {
  title: string
  body: string
  createdAt: string
  id: string
  image: StrapiImageData[]
}
