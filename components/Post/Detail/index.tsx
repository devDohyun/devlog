import { marked } from 'marked'
import { StyledPostContentContainer, StyledPostContentTitle, StyledPostDetailContainer } from '@/components/Post/Detail/styles'
import { PostItemMetadata } from '@/types'
import PostSideContent from '@/components/Post/SideContent'

type PostDetailProps = {
  metadata: PostItemMetadata
  content: string
}

const PostDetail = ({ metadata, content }: PostDetailProps) => {
  return (
    <>
      <StyledPostDetailContainer>
        <PostSideContent />
        <StyledPostContentContainer>
          <StyledPostContentTitle>{metadata.title}</StyledPostContentTitle>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </StyledPostContentContainer>
      </StyledPostDetailContainer>
    </>
  )
}

export default PostDetail
