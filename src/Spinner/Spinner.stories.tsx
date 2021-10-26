import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { HSpace, VSpace } from '../Space'
import { Spinner } from './Spinner'

const StyledSpinner = styled(Spinner)`
  color: palevioletred;
  font-size: 44px;
`

const StyledHSpace = styled(HSpace)`
  display: inline-block;
  border: 1px dotted black;
  width: auto;
`

const StyledVSpace = styled(VSpace)`
  display: inline-block;
  border: 1px dotted black;
  width: auto;
`

storiesOf('Spinner', module)
  .add('default', () => <Spinner />)
  .add('styled', () => <StyledSpinner />)
  .add('hspace', () => (
    <div>
      <div>
        <StyledHSpace verticalAlign="center">
          <Spinner />
          <span>Things</span>
        </StyledHSpace>
      </div>
      <div>
        <StyledHSpace verticalAlign="center">
          <StyledSpinner />
          <span>Things</span>
        </StyledHSpace>
      </div>
    </div>
  ))
  .add('vspace', () => (
    <StyledVSpace align="center">
      <Spinner />
      <div>Things</div>
    </StyledVSpace>
  ))
