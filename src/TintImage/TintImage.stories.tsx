import { storiesOf } from '@storybook/react'
import React from 'react'

import png from './__test__/grey-platform-logo.png'
import svg from './__test__/icon-password-generator.svg'
import { TintImage } from './TintImage'

storiesOf('TintImage', module)
  .add('svg', () => (
    <div>
      <img src={svg} />
      <TintImage src={svg} />
      <TintImage src={svg} tintColor="orange" />
    </div>
  ))
  .add('png', () => (
    <div>
      <img src={png} />
      <TintImage src={png} />
      <TintImage src={png} tintColor="purple" />
    </div>
  ))
