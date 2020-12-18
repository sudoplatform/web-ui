import { shallow } from 'enzyme'
import React from 'react'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('should render', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper).toMatchSnapshot()
  })
})
