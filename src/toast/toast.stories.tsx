import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { toast } from './toast'

storiesOf('Toast', module).add('default', () => (
  <div>
    <Button onClick={() => void toast.info('Info')}>Info</Button>
    <Button onClick={() => void toast.warn('Warn')}>Warn</Button>
    <Button onClick={() => void toast.success('Success')}>Success</Button>
    <Button onClick={() => void toast.error('Success')}>Error</Button>
  </div>
))
