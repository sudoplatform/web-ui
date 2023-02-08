import { Form as AntdForm, FormItemProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

import { inputErrorCss } from './css'

const StyledFormItem = styled(AntdForm.Item)`
  color: ${({ theme }) => theme.grays.gray40};
  font-size: ${({ theme }) => theme.fontSize.body};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  .ant-form-item-label {
    padding: 0 0 ${({ theme }) => theme.spacing.small};
  }

  &.ant-form-item-has-error .ant-input,
  &.ant-form-item-has-error .ant-input-affix-wrapper,
  &.ant-form-item-has-error .ant-input-affix-wrapper:hover,
  &.ant-form-item-has-error .ant-input:hover {
    ${inputErrorCss}
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
    color: ${({ theme }) => theme.colors.error};
  }

  .ant-form-item-explain [role='alert'] {
    color: ${({ theme }) => theme.colors.error};
  }
`

export const FormItem: React.FC<FormItemProps> = (props) => {
  return <StyledFormItem label={props.label ?? <>&nbsp;</>} {...props} />
}
