import { Input as AntdInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'
import styled from 'styled-components'

import { inputActiveCss, inputCss } from './css'

const StyledInput = styled(AntdInput)`
  ${inputCss}

  &:focus,
  &:hover {
    ${inputActiveCss}
  }
`

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />
}
