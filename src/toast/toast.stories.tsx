import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { toast } from './toast'

storiesOf('Toast', module).add('default', () => (
  <div>
    <Button onClick={() => toast.info('Info')}>Info</Button>
    <Button onClick={() => toast.warn('Warn')}>Warn</Button>
    <Button onClick={() => toast.success('Success')}>Success</Button>
    <Button onClick={() => toast.error('Success')}>Error</Button>
  </div>
))
