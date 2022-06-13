import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Post from '@/components/Post'
import { PostItem } from '@/types'

const PagePosts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Post items={posts} />
    </>
  )
}

export default PagePosts

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: body } = matter(markdownWithMeta)

    return {
      slug,
      body,
    }
  }) as PostItem[]

  return {
    props: {
      posts,
    },
  }
}
