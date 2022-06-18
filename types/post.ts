export type PostItemBody = {
  title: string
  date: string
  excerpt: string
  tag: string
}

export type PostItem = {
  slug: string
  body: PostItemBody
}
