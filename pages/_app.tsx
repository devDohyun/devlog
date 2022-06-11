import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import React from 'react'
import DefaultLayout from '@/components/layouts/default'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default MyApp
