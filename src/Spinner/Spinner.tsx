import React, { CSSProperties } from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: 16px;

  animation: loadingCircle 1s infinite linear;

  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
`

interface Props {
  className?: string
  style?: CSSProperties
}

export const Spinner: React.FC<Props> = ({ className, style }) => {
  return (
    <StyledSvg
      style={style}
      className={className}
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="loading"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
    </StyledSvg>
  )
}
