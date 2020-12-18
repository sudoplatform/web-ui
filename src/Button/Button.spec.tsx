import { shallow } from 'enzyme'
import React from 'react'

import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button>TEST</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
