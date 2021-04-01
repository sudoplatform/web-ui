import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Spinner } from './Spinner'

const StyledSpinner = styled(Spinner)`
  color: palevioletred;
  font-size: 44px;
`

storiesOf('Spinner', module)
  .add('default', () => <Spinner />)
  .add('styled', () => <StyledSpinner />)
