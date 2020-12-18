import { Switch as AntdSwitch } from 'antd'
import { SwitchProps } from 'antd/lib/switch'
import React from 'react'
import styled from 'styled-components'

const StyledSwitch = styled(AntdSwitch)`
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-click-animating-node {
    visibility: hidden;
  }
`

export const Switch: React.FC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />
}
