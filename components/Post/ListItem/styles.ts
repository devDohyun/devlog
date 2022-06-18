import styled from '@emotion/styled'

export const StyledPostListItem = styled.div`
  display: flex;
  align-items: stretch;

  width: 100%;
  padding: 20px 12px;
`

export const StyledPostDetailContainer = styled.div`
  flex-grow: 1;

  min-width: 0;
`

export const StyledPostTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`

export const StyledPostExcerpt = styled.div`
  width: 100%;
  margin-top: 25px;
  font-size: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledPostMetaContainer = styled.div`
  flex-basis: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  margin-left: 20px;
`
