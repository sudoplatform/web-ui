import { AutoComplete as AntdAutoComplete } from 'antd'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import React from 'react'
import styled from 'styled-components'

import { inputActiveCss, inputCss } from './css'

const StyledAutoComplete = styled(AntdAutoComplete)`
  ${inputCss}

  &:focus,
  &:hover {
    ${inputActiveCss}
  }
`

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  return <StyledAutoComplete {...props} />
}
