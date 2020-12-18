import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch } from './Switch'

storiesOf('Switch', module).add('default', () => (
  <Switch defaultChecked={true} onChange={(value) => alert(value)} />
))
