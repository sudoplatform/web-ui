import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
  padding: ${({ theme }) => theme.padding.large};
  background: white;
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
`

interface Props {
  title?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export const Card: React.FC<Props> = (props) => (
  <Container className={props.className}>
    {props.title && <Title>{props.title}</Title>}
    {props.children}
  </Container>
)
