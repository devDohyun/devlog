import { StyledBlogTitle, StyledContentContainer } from '@/components/Post/SideContent/styles'
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
    </StyledContentContainer>
  )
}

export default PostSideContent
