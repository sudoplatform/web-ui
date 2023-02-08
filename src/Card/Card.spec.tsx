import React from 'react'
import { create } from 'react-test-renderer'

import { BrandProvider } from '../BrandProvider'
import { Card } from './Card'

describe('Card', () => {
  it('should render', () => {
    const wrapper = create(
      <BrandProvider>
        <Card>TEST</Card>
      </BrandProvider>,
    )
    const serialized = wrapper.toJSON()
    expect(serialized).toMatchSnapshot()
  })
})
