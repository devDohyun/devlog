import { StyledTextBlockProps } from '@/components/common/TextBlock/@types'
import styled from '@emotion/styled'

export const StyledTextBlock = styled.div`
  display: inline-block;

  padding: 10px 15px;

  font-size: 24px;
  font-weight: bold;

  color: ${(props: StyledTextBlockProps) => props.color || '#ffffff'};
  background-color: ${(props: StyledTextBlockProps) => props.backgroundColor || '#000000'};

  border-radius: 4px;
`
