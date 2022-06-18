import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React, { ReactNode } from 'react'
import DefaultLayout from '@/components/layouts/default'
import { NextPageWithLayout } from '@/pages/_app'
import PostDetail from '@/components/Post/Detail'

interface IParams extends ParsedUrlQuery {
  slug: string
}

const PagePostDetail: NextPageWithLayout = ({ metadata, slug, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PostDetail metadata={metadata} content={content} />
    </>
  )
}

export default PagePostDetail

PagePostDetail.getLayout = (page: ReactNode) => {
  const title = React.isValidElement(page) ? page.props.metadata.title : ''

  return <DefaultLayout title={title}>{page}</DefaultLayout>
}

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
