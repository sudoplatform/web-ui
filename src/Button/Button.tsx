import { Button as AntdButton } from 'antd'
import Color from 'color'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(AntdButton)`
  &.ant-btn-primary {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border-width: ${({ theme }) => theme.borderWidth.light};
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;

    :active,
    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0px 0px 5px 2px
        ${({ theme }) => Color(theme.colors.primary).alpha(0.4).rgb().string()};
      color: #fff;
    }
  }

  &.ant-btn-default {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border-width: ${({ theme }) => theme.borderWidth.light};
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    :active,
    :hover,
    :focus {
      background-color: #fff;
      border-color: ${({ theme }) =>
        Color(theme.colors.primary).darken(0.5).hex()};
      box-shadow: 0px 0px 5px 2px
        ${({ theme }) => Color(theme.colors.primary).alpha(0.4).rgb().string()};
      color: ${({ theme }) => Color(theme.colors.primary).darken(0.25).hex()};
    }
  }

  &.ant-btn-link {
    color: ${({ theme }) => theme.colors.primary};

    :active,
    :not([disabled]):hover,
    :focus {
      color: ${({ theme }) => Color(theme.colors.primary).darken(0.25).hex()};

      > span {
        text-decoration: underline;
      }
    }
  }

  &.ant-btn-default.ant-btn-dangerous {
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};

    :active,
    :hover,
    :focus {
      background-color: #fff;
      border-color: ${({ theme }) =>
        Color(theme.colors.error).darken(0.5).hex()};
      box-shadow: 0px 0px 5px 2px
        ${({ theme }) => Color(theme.colors.error).alpha(0.4).rgb().string()};
      color: ${({ theme }) => Color(theme.colors.error).darken(0.25).hex()};
    }
  }

  &.ant-btn-primary.ant-btn-dangerous {
    background-color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.error};
    color: #fff;

    :active,
    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.error};
      border-color: ${({ theme }) => theme.colors.error};
      box-shadow: 0px 0px 5px 2px
        ${({ theme }) => Color(theme.colors.error).alpha(0.4).rgb().string()};
      color: #fff;
    }
  }

  &.ant-btn-link.ant-btn-dangerous {
    color: ${({ theme }) => theme.colors.error};

    :active,
    :not([disabled]):hover,
    :focus {
      color: ${({ theme }) => Color(theme.colors.error).darken(0.25).hex()};

      > span {
        text-decoration: underline;
      }
    }
  }

  [ant-click-animating-without-extra-node]:after {
    animation: none !important;
  }

  &.ant-btn-loading-icon {
    margin-right: 8px;
  }
`

interface Props {
  className?: string
  kind?: 'primary' | 'default' | 'link' | 'ghost'
  danger?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button: React.FC<Props> = (props) => {
  const { kind, type, disabled, ...rest } = props

  return (
    <StyledButton
      htmlType={type}
      type={disabled ? 'ghost' : kind ?? 'default'}
      disabled={disabled}
      {...rest}
    />
  )
}
