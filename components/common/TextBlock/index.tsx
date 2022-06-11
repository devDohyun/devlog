import { StyledTextBlock } from '@/components/common/TextBlock/styles'

type TextBlockProps = {
  children?: string
  color?: string
  backgroundColor?: string
}

const TextBlock = ({ children, color, backgroundColor }: TextBlockProps) => {
  return (
    <StyledTextBlock color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledTextBlock>
  )
}

export default TextBlock
