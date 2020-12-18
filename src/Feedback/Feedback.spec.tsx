import { shallow } from 'enzyme'
import React from 'react'

import { Feedback } from './Feedback'

describe('Feedback', () => {
  it('should render', () => {
    const wrapper = shallow(<Feedback>TEST</Feedback>)
    expect(wrapper).toMatchSnapshot()
  })
})
