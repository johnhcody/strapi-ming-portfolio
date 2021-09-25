type BaseEntity = {
    _id?: string
    createdAt?: Date
    updatedAt?: Date
  }

export type Article = {
    title: string
    intro: string
    description: string
    body: string[]
    mainPhoto: string
    linkUrl: string
    linkDescription: string
} & BaseEntity