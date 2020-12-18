import { css } from 'styled-components'

export const inputCss = css`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border-color: ${({ theme }) => theme.grays.gray10};
`

export const inputActiveCss = css`
  border-color: ${({ theme }) => theme.colors.primary};
  box-shadow: none;
  outline: none;
`

export const inputErrorCss = css`
  border-color: ${({ theme }) => theme.colors.error};
  box-shadow: none;
  outline: none;
`
