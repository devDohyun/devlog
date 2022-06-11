import { StyledTextBlockProps } from '@/components/common/TextBlock/@types'
import { StyledTextBlock } from '@/components/common/TextBlock/styles'
import { useMemo } from 'react'

type TextBlockProps = {
  children?: string
  preset?: string
  color?: string
  backgroundColor?: string
}

interface IPresetMapped {
  [key: string]: StyledTextBlockProps
}

const presetMapped: IPresetMapped = {
  javascript: {
    color: '#000000',
    backgroundColor: '#ecdb54',
  },
}

const TextBlock = ({ children, preset, color, backgroundColor }: TextBlockProps) => {
  const textBlockProps = useMemo(() => {
    let result: StyledTextBlockProps = {
      color,
      backgroundColor,
    }

    if (preset && presetMapped[preset]) result = presetMapped[preset]

    return result
  }, [preset, color, backgroundColor])

  return <StyledTextBlock {...textBlockProps}>{children}</StyledTextBlock>
}

export default TextBlock
