import styled from '@emotion/styled'

export const StyledContentContainer = styled.div`
  position: sticky;
  top: 50px;

  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 200px;
  height: calc(100vh - 100px);

  margin-right: 50px;
`

export const StyledBlogTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export const StyledViewStackItem = styled.div`
  margin-bottom: 5px;

  font-size: 24px;
  font-weight: bold;
`
export const StyledStackItem = styled.div`
  display: inline-block;
  margin: 2.5px;
`
