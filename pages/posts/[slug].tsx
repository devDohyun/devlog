import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  slug: string
}

const PagePostDetail: NextPage = ({ metadata, slug, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <>{JSON.stringify({ metadata, slug, content })}</>
}

export default PagePostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')

  const { data: metadata, content } = matter(markdownWithMeta)

  return {
    props: {
      metadata,
      slug,
      content,
    },
  }
}
