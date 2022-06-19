import TextBlock from '@/components/common/TextBlock'
import { StyledPostDetailContainer, StyledPostExcerpt, StyledPostListItem, StyledPostMetaContainer, StyledPostTitle } from '@/components/Post/ListItem/styles'
import { myStacks } from '@/core/constant'
import { PostItem } from '@/types'

type PostListItemProps = {
  item: PostItem
}

const PostListItem = ({ item }: PostListItemProps) => {
  const stack = myStacks.find((stack) => stack.id === item.metadata.tag)

  return (
    <StyledPostListItem>
      <StyledPostDetailContainer>
        <StyledPostTitle>{item.metadata.title}</StyledPostTitle>
        <StyledPostExcerpt>{item.metadata.excerpt}</StyledPostExcerpt>
      </StyledPostDetailContainer>
      <StyledPostMetaContainer>
        {item.metadata.date}
        {(stack && <TextBlock preset={stack.id}>{stack && stack.text}</TextBlock>) || (
          <TextBlock backgroundColor="#ffffff" color="#000000">
            {item.metadata.tag}
          </TextBlock>
        )}
      </StyledPostMetaContainer>
    </StyledPostListItem>
  )
}

export default PostListItem
