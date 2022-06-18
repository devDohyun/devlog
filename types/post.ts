export type PostItemMetadata = {
  title: string
  date: string
  excerpt: string
  tag: string
}

export type PostItem = {
  slug: string
  metadata: PostItemMetadata
  content?: string
}
