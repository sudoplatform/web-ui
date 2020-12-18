import { Form as AntdForm } from 'antd'
import { FormProps } from 'antd/lib/form'
import { useForm as AntdUseForm } from 'antd/lib/form/Form'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled(AntdForm)`
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

export const Form: React.FC<FormProps> = (props) => {
  return <StyledForm layout={props.layout ?? 'vertical'} {...props} />
}

export const useForm = AntdUseForm
