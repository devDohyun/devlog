import { StyledPostListItem, StyledPostTitle } from '@/components/Post/ListItem/styles'
import { PostItem } from '@/types'

type PostListItemProps = {
  item: PostItem
}

const PostListItem = ({ item }: PostListItemProps) => {
  return (
    <StyledPostListItem>
      <StyledPostTitle>{item.body.title}</StyledPostTitle>
    </StyledPostListItem>
  )
}

export default PostListItem
