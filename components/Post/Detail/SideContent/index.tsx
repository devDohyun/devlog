import TextBlock from '@/components/common/TextBlock'
import { StyledBlogTitle, StyledContentContainer, StyledStackItem, StyledViewStackItem } from '@/components/Post/Detail/SideContent/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

const PostSideContent = () => {
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
    <StyledContentContainer>
      <Link href="/">
        <a>
          <Image src="/images/memoji.png" width={100} height={100} alt="my memoji"></Image>
          <StyledBlogTitle>{`Dohyun's dev log`}</StyledBlogTitle>
        </a>
      </Link>
      <div>
        <StyledViewStackItem>관련 글 더보기</StyledViewStackItem>
        {stacks.map((stack) => (
          <Link key={stack.text} href={{ pathname: `/posts`, query: { q: stack.text } }}>
            <a>
              <StyledStackItem>
                <TextBlock preset={stack.preset} color={stack.color} backgroundColor={stack.backgroundColor}>
                  {stack.text}
                </TextBlock>
              </StyledStackItem>
            </a>
          </Link>
        ))}
      </div>
      <Link href="/posts">
        <a>글 목록으로 돌아가기</a>
      </Link>
    </StyledContentContainer>
  )
}

export default PostSideContent
