import { BrandProvider } from '../src/BrandProvider'

export const decorators = [
  (Story) => (
    <BrandProvider>
      <Story />
    </BrandProvider>
  ),
]
