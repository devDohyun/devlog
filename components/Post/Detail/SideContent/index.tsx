import TextBlock from '@/components/common/TextBlock'
import { StyledBlogTitle, StyledContentContainer, StyledStackItem, StyledViewStackItem } from '@/components/Post/Detail/SideContent/styles'
import { myStacks } from '@/core/constant'
import Image from 'next/image'
import Link from 'next/link'

const PostSideContent = () => {
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
        {myStacks.map((stack) => (
          <Link key={stack.text} href={{ pathname: `/posts`, query: { q: stack.text } }}>
            <a>
              <StyledStackItem>
                <TextBlock preset={stack.id}>{stack.text}</TextBlock>
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
