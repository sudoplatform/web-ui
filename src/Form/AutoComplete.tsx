import { AutoComplete as AntdAutoComplete, AutoCompleteProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

import { inputActiveCss, inputCss } from './css'

const StyledAutoComplete = styled(AntdAutoComplete)<AutoCompleteProps>`
  ${inputCss}

  &:focus,
  &:hover {
    ${inputActiveCss}
  }
`

// Export type-casted function reference instead of defining React.FC with
// child `StyledAutoComplete` to evade `no overload matches call` error.
export const AutoComplete = StyledAutoComplete as React.FC<AutoCompleteProps>
