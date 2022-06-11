import { HeaderRoute } from '@/components/Home/@types'
import { StyledContainer, StyledRouteItem } from '@/components/Home/Header/styles'
import Link from 'next/link'

type HomeHeaderProps = {
  routes: HeaderRoute[]
}

const HomeHeader = ({ routes }: HomeHeaderProps) => {
  return (
    <StyledContainer>
      {routes.map((route) => (
        <Link key={route.href} href={route.href} target={route.target}>
          <a>
            <StyledRouteItem>{route.text}</StyledRouteItem>
          </a>
        </Link>
      ))}
      <a href="https://github.com/devDohyun" target="_blank" rel="noreferrer">
        <StyledRouteItem>github</StyledRouteItem>
      </a>
      <StyledRouteItem>es7@kakao.com</StyledRouteItem>
    </StyledContainer>
  )
}

export default HomeHeader
