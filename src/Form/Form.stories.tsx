import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { HSpace, VSpace } from '../Space'
import { Form } from './Form'
import { FormItem } from './FormItem'
import { Input } from './Input'
import { Password } from './Password'
import { Option, Select } from './Select'

const StyledForm = styled(Form)`
  border: 1px dashed #ddd;
`

storiesOf('Form', module)
  .add('default', () => (
    <StyledForm
      initialValues={{ foo: 'bar', select: '1' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <FormItem
        name="foo"
        label="Input label"
        required={true}
        rules={[{ required: true }]}
      >
        <Input placeholder="Text" />
      </FormItem>

      <FormItem name="ish" label="Password label" required={true}>
        <Password placeholder="Password" />
      </FormItem>

      <FormItem name="select" label="Select label">
        <Select>
          <Option className="OHOHOHOHO" value="1">
            Option 1
          </Option>
          <Option value="2">Option 2</Option>
          <Option value="3" disabled>
            Option 3
          </Option>
        </Select>
      </FormItem>

      <FormItem
        name="foo2"
        label="Input label"
        required={true}
        rules={[{ required: true }]}
      >
        <Input placeholder="Text" />
      </FormItem>

      <Button type="submit">Submit</Button>
    </StyledForm>
  ))
  .add('Default FormItems spacing', () => (
    <>
      <p>
        By default, FormItems should allocate a bit of space below in case there
        is an error message to show
      </p>
      <StyledForm>
        <FormItem
          name="foo1"
          label="Input 1"
          required={true}
          rules={[{ required: true }]}
        >
          <Input placeholder="Text" />
        </FormItem>
        <FormItem
          name="foo2"
          label="Input 2"
          required={true}
          rules={[{ required: true }]}
        >
          <Input placeholder="Text" />
        </FormItem>
      </StyledForm>
    </>
  ))
  .add('VSpace FormItems', () => (
    <>
      <p>
        When wrapping FormItems in VSpace, then validation messages should be
        positioned absolutely, on top of space allocated by VSpace.
      </p>
      <StyledForm
        initialValues={{ foo: 'bar', select: '1' }}
        onFinish={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <VSpace spacing="large">
          <FormItem
            name="foo1"
            label="Input 1"
            required={true}
            rules={[{ required: true }]}
          >
            <Input placeholder="Text" />
          </FormItem>

          <FormItem
            name="foo2"
            label="Input 2"
            required={true}
            rules={[{ required: true }]}
          >
            <Input placeholder="Text" />
          </FormItem>
        </VSpace>
      </StyledForm>
    </>
  ))
  .add('HSpace FormItems', () => (
    <>
      <p>
        When wrapping FormItems in HSpace, then validation messages should
        preserve some space below for error messages.
      </p>
      <StyledForm
        initialValues={{ foo: 'bar', select: '1' }}
        onFinish={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <FormItem
          name="foo1"
          label="Input 1"
          required={true}
          rules={[{ required: true }]}
        >
          <Input placeholder="Text" />
        </FormItem>

        <HSpace stretch="all">
          <FormItem
            name="foo2"
            label="Input 2"
            required={true}
            rules={[{ required: true }]}
          >
            <Input placeholder="Text" />
          </FormItem>

          <FormItem
            name="foo3"
            label="Input 3"
            required={true}
            rules={[{ required: true }]}
          >
            <Input placeholder="Text" />
          </FormItem>
        </HSpace>
      </StyledForm>
    </>
  ))
  .add('HSpace in VSpace FormItems', () => (
    <>
      <p>
        When wrapping FormItems in both VSpace and HSpace, then validation
        messages should be positioned absolutely, on top of space allocated by
        VSpace.
      </p>
      <StyledForm
        initialValues={{ foo: 'bar', select: '1' }}
        onFinish={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <VSpace>
          <FormItem
            name="foo1"
            label="Input 1"
            required={true}
            rules={[{ required: true }]}
          >
            <Input placeholder="Text" />
          </FormItem>

          <HSpace stretch="all">
            <FormItem
              name="foo2"
              label="Input 2"
              required={true}
              rules={[{ required: true }]}
            >
              <Input placeholder="Text" />
            </FormItem>

            <FormItem
              name="foo3"
              label="Input 3"
              required={true}
              rules={[{ required: true }]}
            >
              <Input placeholder="Text" />
            </FormItem>
          </HSpace>
        </VSpace>
      </StyledForm>
    </>
  ))
