import { Select as AntdSelect } from 'antd'
import { SelectProps, SelectValue } from 'antd/lib/select'
import Color from 'color'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { inputActiveCss, inputCss } from './css'

/** Wasn't able to get styledcomponents working for AntdSelect.Option */
const OptionsStyle = createGlobalStyle`
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${({ theme }) =>
      Color(theme.colors.primary).alpha(0.1).string()};
  }
`

const StyledSelect = styled(AntdSelect)`
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
`

export const Select: React.FC<SelectProps<SelectValue>> = (props) => {
  return (
    <>
      <OptionsStyle />
      <StyledSelect {...props} />
    </>
  )
}

export const Option = AntdSelect.Option
