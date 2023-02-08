import React from 'react'
import { create } from 'react-test-renderer'

import { BrandProvider } from '../BrandProvider'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('should render', () => {
    const wrapper = create(
      <BrandProvider>
        <Spinner />
      </BrandProvider>,
    )
    const serialized = wrapper.toJSON()
    expect(serialized).toMatchSnapshot()
  })
})
