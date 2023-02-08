import React from 'react'
import { create } from 'react-test-renderer'

import { BrandProvider } from '../BrandProvider'
import { Feedback } from './Feedback'

describe('Feedback', () => {
  it('should render', () => {
    const wrapper = create(
      <BrandProvider>
        <Feedback>TEST</Feedback>
      </BrandProvider>,
    )
    const serialized = wrapper.toJSON()
    expect(serialized).toMatchSnapshot()
  })
})
