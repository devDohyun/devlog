import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { NextPage } from 'next'

type PagePostsProps = {
  posts?: any[]
}

const PagePosts: NextPage = ({ posts }: PagePostsProps) => {
  return <>{JSON.stringify(posts)}</>
}

export default PagePosts

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
