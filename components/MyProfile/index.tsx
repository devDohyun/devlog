import MyProfileIntro from '@/components/MyProfile/Intro'
import { StyledContainer, StyledHeader, StyledMainLinkText } from '@/components/MyProfile/styles'
import Link from 'next/link'

const MyProfile = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Link href="/">
          <a>
            <StyledMainLinkText>메인으로 돌아가기</StyledMainLinkText>
          </a>
        </Link>
      </StyledHeader>
      <MyProfileIntro />
    </StyledContainer>
  )
}

export default MyProfile
