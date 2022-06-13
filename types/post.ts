export type PostItemBody = {
  title: string
  date: string
  excerpt: string
  cover_image: string
}

export type PostItem = {
  slug: string
  body: PostItemBody
}
