import { Select as AntdSelect } from 'antd'
import { SelectProps, SelectValue } from 'antd/es/select'
import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import { inputActiveCss, inputCss } from './css'

const StyledSelect = styled(AntdSelect)<SelectProps<SelectValue>>`
  &.ant-select:not(.ant-select-customize-input) {
    .ant-select-selector {
      ${inputCss}
    }

    .ant-select-selector:hover {
      ${inputActiveCss}
    }
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) {
    .ant-select-selector {
      ${inputActiveCss}
    }
  }

  // 'Option' styling
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${({ theme }) =>
      Color(theme.colors.primary).alpha(0.1).string()};
  }
`

// Export type-casted function reference instead of defining React.FC with
// child `StyledSelect` to evade `no overload matches call` error.
export const Select = StyledSelect as React.FC<SelectProps<SelectValue>>
export const Option = AntdSelect.Option
