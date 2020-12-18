import { storiesOf } from '@storybook/react'
import React from 'react'

import { Feedback } from './Feedback'

storiesOf('Feedback', module)
  .add('default', () => <Feedback>Default (Info)</Feedback>)
  .add('success', () => <Feedback type="success">Success</Feedback>)
  .add('warning', () => <Feedback type="warning">Warning</Feedback>)
  .add('info', () => <Feedback type="info">Info</Feedback>)
  .add('error', () => <Feedback type="error">Error</Feedback>)
