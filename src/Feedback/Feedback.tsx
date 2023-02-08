import { Alert } from 'antd'
import Color from 'color'
import React from 'react'
import styled from 'styled-components'

const StyledAlert = styled(Alert)`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &.ant-alert-success {
    border-color: ${({ theme }) =>
      new Color(theme.colors.success).alpha(0.5).string()};
    background: ${({ theme }) =>
      new Color(theme.colors.success).alpha(0.1).string()};
  }

  &.ant-alert-info {
    border-color: ${({ theme }) =>
      new Color(theme.colors.primary).alpha(0.5).string()};
    background: ${({ theme }) =>
      new Color(theme.colors.primary).alpha(0.1).string()};
  }

  &.ant-alert-error {
    border-color: ${({ theme }) =>
      new Color(theme.colors.error).alpha(0.5).string()};
    background: ${({ theme }) =>
      new Color(theme.colors.error).alpha(0.1).string()};
  }
`

interface Props {
  type?: 'success' | 'info' | 'error' | 'warning'
  children?: React.ReactNode
}

export const Feedback: React.FC<Props> = (props) => {
  return <StyledAlert type={props.type} message={props.children} />
}
