import { storiesOf } from '@storybook/react'
import React from 'react'

import { Card } from './Card'

storiesOf('Card', module).add('Card', () => <Card title="Title">Content</Card>)
