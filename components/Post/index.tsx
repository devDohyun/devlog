import PostListItem from '@/components/Post/ListItem'
import { StyledListRow } from '@/components/Post/styles'
import { PostItem } from '@/types'

type PostProps = {
  items: PostItem[]
}

const Post = ({ items }: PostProps) => {
  return (
    <>
      {items.map((item) => (
        <StyledListRow key={item.slug}>
          <PostListItem item={item}></PostListItem>
        </StyledListRow>
      ))}
    </>
  )
}

export default Post
