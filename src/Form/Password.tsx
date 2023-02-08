import { Input as AntdInput } from 'antd'
import { PasswordProps } from 'antd/es/input'
import React from 'react'
import styled from 'styled-components'

import { inputActiveCss, inputCss } from './css'

const StyledPassword = styled(AntdInput.Password)`
  &.ant-input-affix-wrapper {
    ${inputCss}
  }

  &.ant-input-affix-wrapper-focused,
  &.ant-input-affix-wrapper:hover {
    ${inputActiveCss}
  }
`

export const Password: React.FC<PasswordProps> = (props) => {
  return <StyledPassword {...props} />
}
