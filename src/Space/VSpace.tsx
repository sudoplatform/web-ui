import cn from 'classnames'
import React, { CSSProperties } from 'react'
import styled, { StyledProps } from 'styled-components'

const defaultAlign: 'flex-start' | 'flex-end' | 'center' = 'flex-start'
const defaultSpacing = 'medium'

function getAlign(props: Props): string {
  switch (props.align) {
    case 'left':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'right':
      return 'flex-end'
    default:
      return defaultAlign
  }
}

function getBottomMargin(props: StyledProps<Props>): string {
  const spacing = props.spacing ?? defaultSpacing
  return props.theme.spacing[spacing]
}

const Container = styled.div`
  width: 100%;
  display: flex;
`

const Stack = styled.div<Props>`
  width: 100%;
  flex-direction: column;

  ${(props) =>
    !!props.align &&
    `
    display: flex;
    align-items: ${getAlign(props)};
  `}

  > * {
    margin: 0;
    margin-bottom: ${getBottomMargin};
  }

  margin-bottom: -${getBottomMargin};
`

interface Props {
  align?: 'left' | 'center' | 'right'
  spacing?: 'small' | 'medium' | 'large'
  className?: string
  style?: CSSProperties
}

/**
 * VSpace is useful for controlling the amount of
 * space "between" elements in a vertical layout.
 *
 * Note: This will override margins of all direct
 * children in order to produce desired spacing.
 */
export const VSpace: React.FC<Props> = ({ className, style, ...props }) => (
  <Container className={cn('anonyome-vspace', className)} style={style}>
    <Stack className="anonyome-stack" {...props} />
  </Container>
)
