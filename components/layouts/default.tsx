import Head from 'next/head'
import React from 'react'
import { StyledLayout } from './styles'

type LayoutProps = {
  title?: string
  children: React.ReactNode
}

const DefaultLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || `Dohyun's dev log`}</title>
      </Head>
      <StyledLayout>{children}</StyledLayout>
    </>
  )
}

export default DefaultLayout
