import { Form as AntdForm, FormProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled(AntdForm)<FormProps>`
  width: 100%;

  // Prevent hspace from messing with margins
  .anonyome-hspace > .anonyome-stack {
    margin-bottom: inherit;

    > * {
      margin-bottom: ${({ theme }) => theme.spacing.large}; // FormItem default

      &.ant-form-item-with-help {
        margin-bottom: 0;
      }
    }
  }

  // When using FormItems that are arranged inside
  // of VSpace, configure validation messages to be
  // absolutely positioned so that they don't adust the page flow.
  // This requires that the enough space already available to
  // show the message.
  .anonyome-vspace,
  .anonyome-vspace .anonyome-hspace {
    .ant-form-item .ant-form-item-explain {
      position: relative;
      min-height: 0;

      [role='alert'] {
        position: absolute;
      }
    }

    .anonyome-hspace > .anonyome-stack {
      margin-bottom: 0;

      > * {
        margin-bottom: 0;
      }
    }
  }
`

StyledForm.defaultProps = {
  layout: 'vertical',
}

// Export type-casted function reference instead of defining React.FC with
// child `StyledForm` to evade `no overload matches call` error.
export const Form = StyledForm as React.FC<FormProps>
export { useForm } from 'antd/lib/form/Form'
