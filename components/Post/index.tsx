import PostListItem from '@/components/Post/ListItem'
import { StyledHeader, StyledListContainer, StyledListRow, StyledMainLink } from '@/components/Post/styles'
import { PostItem } from '@/types'
import Link from 'next/link'

type PostProps = {
  items: PostItem[]
}

const Post = ({ items }: PostProps) => {
  return (
    <>
      <StyledHeader>
        <Link href="/">
          <StyledMainLink>🏠 메인으로 돌아가기</StyledMainLink>
        </Link>
      </StyledHeader>
      <StyledListContainer>
        {items.map((item) => (
          <Link key={item.slug} href={`/posts/${item.slug}`}>
            <StyledListRow>
              <PostListItem item={item}></PostListItem>
            </StyledListRow>
          </Link>
        ))}
      </StyledListContainer>
    </>
  )
}

export default Post
