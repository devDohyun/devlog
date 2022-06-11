import { HeaderRoute } from '@/components/Home/@types'
import HomeContent from '@/components/Home/Content'
import HomeHeader from '@/components/Home/Header'
import { StyledContainer, StyledHeaderWrapper } from '@/components/Home/styles'
import { useMemo } from 'react'

const Home = () => {
  const headerRoutes: HeaderRoute[] = useMemo(() => {
    return [
      {
        text: 'LOGS',
        href: '/devlog',
      },
      {
        text: 'PROFILE',
        href: '/profile',
      },
    ]
  }, [])

  return (
    <StyledContainer>
      <StyledHeaderWrapper>
        <HomeHeader routes={headerRoutes}></HomeHeader>
      </StyledHeaderWrapper>
      <HomeContent></HomeContent>
    </StyledContainer>
  )
}

export default Home
