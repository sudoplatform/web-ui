import 'antd/dist/antd.min.css'

import React from 'react'

import { BrandProvider } from '../src/BrandProvider'

export const decorators = [
  (Story) => (
    <BrandProvider>
      <Story />
    </BrandProvider>
  ),
]
