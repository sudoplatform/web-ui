import 'antd/dist/antd.min.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BrandColors, defaultTheme } from './theme'

interface Props {
  colors?: BrandColors
}

export const BrandProvider: React.FC<Props> = (props) => {
  const theme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      ...props.colors,
    },
  }

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
