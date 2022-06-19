import PostListItem from '@/components/Post/ListItem'
import { StyledHeader, StyledListContainer, StyledListRow, StyledMainLink, StyledSearchInput, StyledSearchInputWrapper } from '@/components/Post/styles'
import { PostItem } from '@/types'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type PostProps = {
  items: PostItem[]
  query?: string
}

const Post = ({ items, query }: PostProps) => {
  const [queryValue, setQueryValue] = useState<string>(query || '')

  const filteredItems = useMemo(() => {
    if (!queryValue) return items

    const keyword = queryValue.toLowerCase()

    return items.filter((item) => [item.metadata.title.toLowerCase(), item.metadata.tag.toLowerCase()].some((boundary) => boundary.includes(keyword)))
  }, [items, queryValue])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value)
  }

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <StyledMainLink>🏠 메인으로 돌아가기</StyledMainLink>
        </Link>
        <StyledSearchInputWrapper>
          <StyledSearchInput onChange={onInputChange} value={queryValue} type="text" placeholder="검색어 입력" />
        </StyledSearchInputWrapper>
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
