import { StyledTextBlockProps } from '@/components/common/TextBlock/@types'
import { StyledTextBlock } from '@/components/common/TextBlock/styles'
import { useMemo } from 'react'

type TextBlockProps = {
  children?: string
  preset?: string
  color?: string
  backgroundColor?: string
  fontSize?: string
}

interface IPresetMapped {
  [key: string]: StyledTextBlockProps
}

const presetMapped: IPresetMapped = {
  javascript: {
    color: '#000000',
    backgroundColor: '#ecdb54',
  },
  next: {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  nuxt: {
    color: '#ffffff',
    backgroundColor: '#00dc82',
  },
  react: {
    color: '#61dafb',
    backgroundColor: '#282c34',
  },
  vue: {
    color: '#64b688',
    backgroundColor: '#39485c',
  },
  git: {
    color: '#ffffff',
    backgroundColor: '#dd4132',
  },
  scss: {
    color: '#ffffff',
    backgroundColor: '#bb6a94',
  },
  node: {
    color: '#ffffff',
    backgroundColor: '#025e00',
  },
}

const TextBlock = ({ children, preset, color, backgroundColor, fontSize }: TextBlockProps) => {
  const textBlockProps = useMemo(() => {
    let result: StyledTextBlockProps = {
      color,
      backgroundColor,
      fontSize,
    }

    if (preset && presetMapped[preset]) result = presetMapped[preset]

    return result
  }, [preset, color, backgroundColor, fontSize])

  return <StyledTextBlock {...textBlockProps}>{children}</StyledTextBlock>
}

export default TextBlock
