import { DefaultTheme } from 'styled-components'

const defaultColors = {
  primary: '#3770f6',
  success: '#1ccd82',
  error: '#ff403d',
  interactive: '#3770f6',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultColors
    grays: {
      gray5: string
      gray10: string
      gray20: string
      gray40: string
      gray90: string
    }
    spacing: {
      small: string
      medium: string
      large: string
    }
    padding: {
      small: string
      medium: string
      large: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
    }
    borderWidth: {
      light: string
      medium: string
      heavy: string
    }
    fontSize: {
      body: string
      h1: string
      h2: string
      h3: string
    }
  }
}

export type BrandColors = typeof defaultColors

export const defaultTheme: DefaultTheme = {
  colors: defaultColors,
  grays: {
    gray5: '#f5f5f7',
    gray10: '#dde1e6',
    gray20: '#c0c9d4',
    gray40: '#656d7f',
    gray90: '#0f1111',
  },
  spacing: {
    small: '6px',
    medium: '10px',
    large: '20px',
  },
  padding: {
    small: '6px',
    medium: '10px',
    large: '20px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  borderWidth: {
    light: '0.5px',
    medium: '1px',
    heavy: '2px',
  },
  fontSize: {
    body: '12px',
    h1: '24px',
    h2: '18px',
    h3: '15px',
  },
}
