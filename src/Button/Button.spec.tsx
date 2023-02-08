import React from 'react'
import { create } from 'react-test-renderer'

import { BrandProvider } from '../BrandProvider'
import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    const wrapper = create(
      <BrandProvider>
        <Button>TEST</Button>
      </BrandProvider>,
    )
    const serialized = wrapper.toJSON()
    expect(serialized).toMatchSnapshot()
  })
})
