import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { HSpace } from './HSpace'
import { VSpace } from './VSpace'

const Item = styled.div`
  width: 100px;
  height: 60px;
  background: #888;
`

storiesOf('Space', module)
  .add('Horizontal small', () => (
    <HSpace spacing="small">
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal medium', () => (
    <HSpace spacing="medium">
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal default', () => (
    <HSpace>
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal large', () => (
    <HSpace spacing="large">
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal vertical align', () => (
    <HSpace verticalAlign="center">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <Item />
    </HSpace>
  ))
  .add('Horizontal wrap', () => (
    <HSpace style={{ width: '300px', background: '#aaa' }}>
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal wrap center', () => (
    <HSpace
      horizontalAlign="center"
      style={{ width: '300px', background: '#aaa' }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal wrap right', () => (
    <HSpace
      horizontalAlign="right"
      style={{ width: '300px', background: '#aaa' }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal stretch all', () => (
    <HSpace stretch="all" style={{ width: '500px', background: '#aaa' }}>
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal stretch first', () => (
    <HSpace stretch="first" style={{ width: '500px', background: '#aaa' }}>
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal stretch last', () => (
    <HSpace stretch="last" style={{ width: '500px', background: '#aaa' }}>
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal stretch nth', () => (
    <HSpace stretch={1} style={{ width: '500px', background: '#aaa' }}>
      <Item />
      <Item />
      <Item />
    </HSpace>
  ))
  .add('Horizontal single column fixed', () => (
    <HSpace
      horizontalAlign="center"
      style={{ width: '500px', background: '#aaa' }}
    >
      <Item style={{ width: '400px' }} />
    </HSpace>
  ))
  .add('Vertical small', () => (
    <VSpace spacing="small">
      <Item />
      <Item />
      <Item />
      <Item />
    </VSpace>
  ))
  .add('Vertical default', () => (
    <VSpace>
      <Item />
      <Item />
      <Item />
      <Item />
    </VSpace>
  ))
  .add('Vertical medium', () => (
    <VSpace spacing="medium">
      <Item />
      <Item />
      <Item />
      <Item />
    </VSpace>
  ))
  .add('Vertical large', () => (
    <VSpace spacing="large">
      <Item />
      <Item />
      <Item />
      <Item />
    </VSpace>
  ))
