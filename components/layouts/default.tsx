import Head from 'next/head'
import React from 'react'
import { StyledLayout } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Dohyun&apos;s dev log</title>
      </Head>
      <StyledLayout>{children}</StyledLayout>
    </>
  )
}

export default DefaultLayout
