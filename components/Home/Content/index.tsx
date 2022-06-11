import { StyledMemojiWrapper, StyledSection, StyledSectionTitle, StyledTitle } from '@/components/Home/Content/styles'
import Image from 'next/image'

const HomeContent = () => {
  return (
    <>
      <StyledMemojiWrapper>
        <Image src="/images/memoji.png" width={150} height={150} alt="my memoji"></Image>
      </StyledMemojiWrapper>
      <StyledTitle>
        안녕하세요 👋🏼,
        <br />
        안도현입니다.
      </StyledTitle>

      <StyledSection>
        <StyledSectionTitle>코드 한 땀 한 땀 정성들여 작성하는, 24세 FrontEnd 개발자입니다.</StyledSectionTitle>
      </StyledSection>
    </>
  )
}

export default HomeContent
