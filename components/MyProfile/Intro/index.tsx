import { StyledContainer, StyledHeader, StyledIntroTitle, StyledMainLinkText, StyledTableOfContents, StyledTableOfContentsItem } from '@/components/MyProfile/Intro/styles'
import { getKoreanAge, getMonthsBetweenNowAndDate } from '@/core/common'
import Link from 'next/link'

const MyProfileIntro = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Link href="/">
          <a>
            <StyledMainLinkText>메인으로 돌아가기</StyledMainLinkText>
          </a>
        </Link>
      </StyledHeader>
      <StyledIntroTitle>
        FrontEnd 개발자,
        <br />
        경력 {getMonthsBetweenNowAndDate('2017-11-01')}개월,
        <br />
        {getKoreanAge(1999)}세.
      </StyledIntroTitle>
      <StyledTableOfContents>
        <StyledTableOfContentsItem>경력사항</StyledTableOfContentsItem>
        <StyledTableOfContentsItem>프로젝트</StyledTableOfContentsItem>
        <StyledTableOfContentsItem>주요기술</StyledTableOfContentsItem>
        <StyledTableOfContentsItem>학력</StyledTableOfContentsItem>
        <StyledTableOfContentsItem>자격증</StyledTableOfContentsItem>
        <StyledTableOfContentsItem>연락처</StyledTableOfContentsItem>
      </StyledTableOfContents>
    </StyledContainer>
  )
}

export default MyProfileIntro
