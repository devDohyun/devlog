import { HeaderRoute } from '@/components/Home/@types'
import HomeContent from '@/components/Home/Content'
import HomeHeader from '@/components/Home/Header'
import { useMemo } from 'react'

const Home = () => {
  const headerRoutes: HeaderRoute[] = useMemo(() => {
    return [
      {
        text: 'Logs',
        href: '/devlog',
      },
      {
        text: 'Profile',
        href: '/profile',
      },
    ]
  }, [])

  return (
    <>
      <HomeHeader routes={headerRoutes}></HomeHeader>
      <HomeContent></HomeContent>
    </>
  )
}

export default Home
