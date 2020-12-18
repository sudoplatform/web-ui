import cn from 'classnames'
import React from 'react'
import styled, { CSSProperties, StyledProps } from 'styled-components'

const defaultAlign: 'flex-start' | 'center' | 'flex-end' = 'flex-start'
const defaultSpacing = 'medium'

interface Props {
  className?: string
  style?: CSSProperties
  horizontalAlign?: 'left' | 'center' | 'right'
  verticalAlign?: 'top' | 'center' | 'bottom'
  spacing?: 'small' | 'medium' | 'large'
  stretch?: 'all' | 'first' | 'last' | number
}

function getHorizontalAlign(props: Props): string {
  switch (props.horizontalAlign) {
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

function getVerticalAlign(props: Props): string {
  switch (props.verticalAlign) {
    case 'top':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'bottom':
      return 'flex-end'
    default:
      return defaultAlign
  }
}

function getSpacing(props: StyledProps<Props>): string {
  const spacing = props.spacing ?? defaultSpacing
  return props.theme.spacing[spacing]
}

const Container = styled.div`
  width: 100%;
  display: flex;
`

/**
 * To get proper vertical spacing that is supported when
 * children are wrapped across multiple lines, all children
 * are given a margin-bottom and then the HStack itself will
 * use a negative bottom margin to compensate for the undesired
 * space after the last row.
 */
const Stack = styled.div<Props>`
  width: calc(100% + ${getSpacing});
  display: flex;
  flex-direction: row;
  align-items: ${getVerticalAlign};
  justify-content: ${getHorizontalAlign};
  flex-wrap: wrap;

  > * {
    margin-top: 0;
    margin-left: 0;
    margin-right: ${getSpacing};
    margin-bottom: ${getSpacing};
  }

  margin-right: -${getSpacing};
  margin-bottom: -${getSpacing};

  ${({ stretch }) =>
    stretch === 'all'
      ? `> *  { flex: 1 }`
      : stretch === 'first'
      ? `> :first-child { flex: 1 }`
      : stretch === 'last'
      ? `> :last-child { flex: 1 }`
      : typeof stretch === 'number'
      ? `> :nth-child(${stretch + 1}) { flex: 1 }`
      : null}
`

/**
 * A component that can stack children horizontally
 * and wrap them as needed.
 *
 * Note: This will override margins of all direct
 * children in order to produce desired spacing.
 */
export const HSpace: React.FC<Props> = ({ className, style, ...props }) => (
  <Container className={cn('anonyome-hspace', className)} style={style}>
    <Stack className="anonyome-stack" {...props} />
  </Container>
)
