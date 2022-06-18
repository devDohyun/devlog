import TextBlock from '@/components/common/TextBlock'
import { StyledPostDetailContainer, StyledPostExcerpt, StyledPostListItem, StyledPostMetaContainer, StyledPostTitle } from '@/components/Post/ListItem/styles'
import { PostItem } from '@/types'

type PostListItemProps = {
  item: PostItem
}

const PostListItem = ({ item }: PostListItemProps) => {
  return (
    <StyledPostListItem>
      <StyledPostDetailContainer>
        <StyledPostTitle>{item.metadata.title}</StyledPostTitle>
        <StyledPostExcerpt>{item.metadata.excerpt}</StyledPostExcerpt>
      </StyledPostDetailContainer>
      <StyledPostMetaContainer>
        {item.metadata.date}
        <TextBlock backgroundColor="#3178c6">Typescript</TextBlock>
      </StyledPostMetaContainer>
    </StyledPostListItem>
  )
}

export default PostListItem
