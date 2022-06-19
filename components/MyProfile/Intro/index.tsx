import { StyledIntroTitle, StyledTableOfContent, StyledTableOfContentItem } from '@/components/MyProfile/Intro/styles'
import { getKoreanAge, getMonthsBetweenNowAndDate } from '@/core/common'

const MyProfileIntro = () => {
  return (
    <>
      <StyledIntroTitle>
        FrontEnd 개발자,
        <br />
        경력 {getMonthsBetweenNowAndDate('2017-11-01')}개월,
        <br />
        {getKoreanAge(1999)}세.
      </StyledIntroTitle>
      <StyledTableOfContent>
        <StyledTableOfContentItem>경력사항</StyledTableOfContentItem>
        <StyledTableOfContentItem>프로젝트</StyledTableOfContentItem>
        <StyledTableOfContentItem>주요기술</StyledTableOfContentItem>
        <StyledTableOfContentItem>학력</StyledTableOfContentItem>
        <StyledTableOfContentItem>자격증</StyledTableOfContentItem>
        <StyledTableOfContentItem>연락처</StyledTableOfContentItem>
      </StyledTableOfContent>
    </>
  )
}

export default MyProfileIntro
