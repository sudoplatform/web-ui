import { Input as AntdInput, InputProps } from 'antd'
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
