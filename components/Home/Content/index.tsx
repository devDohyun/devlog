import TextBlock from '@/components/common/TextBlock'
import { StyledMemojiWrapper, StyledSection, StyledSectionBody, StyledSectionTitle, StyledStackList, StyledTitle } from '@/components/Home/Content/styles'
import Image from 'next/image'
import { useMemo } from 'react'

const HomeContent = () => {
  const stacks = useMemo(
    () => [
      {
        preset: 'javascript',
        text: 'Javascript',
      },
      { text: 'Typescript', backgroundColor: '#3178c6' },
      {
        preset: 'next',
        text: 'Next.js',
      },
      {
        preset: 'nuxt',
        text: 'Nuxt',
      },
      {
        preset: 'react',
        text: 'React',
      },
      {
        preset: 'vue',
        text: 'Vue.js',
      },
      {
        preset: 'git',
        text: 'git',
      },
      {
        preset: 'scss',
        text: 'SCSS',
      },
      {
        preset: 'node',
        text: 'Node.js',
      },
      { text: 'Vuetify', backgroundColor: '#2196f3' },
      { text: 'SQL', color: '#99abee', backgroundColor: '#23305c' },
    ],
    []
  )

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
        <StyledSectionTitle>코드 한 땀 한 땀 정성들여 작성하는, 24세 FrontEnd 개발자.</StyledSectionTitle>
        <StyledSectionBody>
          특성화 고등학교 재학 중 취업 후, 현재까지 개발자로서의 커리어를 이어오고 있습니다.
          <br />
          Best practices와 건설적인 팀 문화를 추구하는데 있어, 그 누구보다 진심임을 자부합니다.
        </StyledSectionBody>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>주로 사용하는 기술스택</StyledSectionTitle>
        <StyledStackList>
          {stacks.map((stack) => (
            <TextBlock key={stack.text} preset={stack.preset} color={stack.color} backgroundColor={stack.backgroundColor}>
              {stack.text}
            </TextBlock>
          ))}
        </StyledStackList>
      </StyledSection>
    </>
  )
}

export default HomeContent
