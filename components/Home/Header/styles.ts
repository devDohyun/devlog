import styled from '@emotion/styled'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledRouteItem = styled.div`
  padding: 5px 50px;

  font-size: 18px;
  font-weight: bold;

  background-color: #ffffff;
  color: #000000;

  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    color: #ffffff;

    border-color: #ffffff;
  }
`
