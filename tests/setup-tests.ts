import 'jest-styled-components'

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new EnzymeAdapter() })

expect.addSnapshotSerializer(createSerializer() as any)
