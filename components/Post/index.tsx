import PostListItem from '@/components/Post/ListItem'
import { StyledHeader, StyledListContainer, StyledListRow, StyledMainLink } from '@/components/Post/styles'
import { PostItem } from '@/types'
import Link from 'next/link'
import { useMemo } from 'react'

type PostProps = {
  items: PostItem[]
  query?: string
}

const Post = ({ items, query }: PostProps) => {
  const filteredItems = useMemo(() => {
    if (!query) return items

    const keyword = query.toLowerCase()

    return items.filter((item) => [item.metadata.title.toLowerCase(), item.metadata.tag.toLowerCase()].some((boundary) => boundary.includes(keyword)))
  }, [items, query])

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <StyledMainLink>🏠 메인으로 돌아가기</StyledMainLink>
        </Link>
      </StyledHeader>
      <StyledListContainer>
        {filteredItems.map((item) => (
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
