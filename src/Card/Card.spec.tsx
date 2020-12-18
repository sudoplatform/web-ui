import { shallow } from 'enzyme'
import React from 'react'

import { Card } from './Card'

describe('Card', () => {
  it('should render', () => {
    const wrapper = shallow(<Card>TEST</Card>)
    expect(wrapper).toMatchSnapshot()
  })
})
