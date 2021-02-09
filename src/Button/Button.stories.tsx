import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

storiesOf('Button', module)
  .add('kind=default', () => <Button kind="default">Default</Button>)
  .add('kind=primary', () => <Button kind="primary">Primary</Button>)
  .add('kind=default-danger', () => (
    <Button kind="default" danger={true}>
      Danger Default
    </Button>
  ))
  .add('kind=primary-danger', () => (
    <Button kind="primary" danger={true}>
      Danger Primary
    </Button>
  ))
  .add('kind=link', () => <Button kind="link">Link</Button>)
  .add('kind=link-danger', () => (
    <Button kind="link" danger={true}>
      Danger Link
    </Button>
  ))
  .add('clickable', () => (
    <Button onClick={() => alert('Clicked')}>Click Me</Button>
  ))
  .add('loading', () => <Button loading={true}>Loading</Button>)
  .add('disabled', () => <Button disabled={true}>Disabled</Button>)
