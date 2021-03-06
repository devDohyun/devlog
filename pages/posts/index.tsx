import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Post from '@/components/Post'
import { PostItem } from '@/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PagePosts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])

  const router = useRouter()
  const query = router.query.q as string

  if (!mounted) return null

  return (
    <>
      <Post items={posts} query={query} />
    </>
  )
}

export default PagePosts

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: metadata } = matter(markdownWithMeta)

    return {
      slug,
      metadata,
    }
  }) as PostItem[]

  return {
    props: {
      posts,
    },
  }
}
