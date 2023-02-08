import React from 'react'
import { create } from 'react-test-renderer'

import { BrandProvider } from '../BrandProvider'
import { Switch } from './Switch'

describe('Switch', () => {
  it('should render', () => {
    const wrapper = create(
      <BrandProvider>
        <Switch />
      </BrandProvider>,
    )
    const serialized = wrapper.toJSON()
    expect(serialized).toMatchSnapshot()
  })
})
