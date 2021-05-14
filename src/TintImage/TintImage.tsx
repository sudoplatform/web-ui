import React, { useCallback, useEffect, useState } from 'react'
import * as uuid from 'uuid'

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  tintColor?: string
}

function tintImage(img: HTMLImageElement, tintColor: string, ddpx = 1): string {
  // Create a canvas with the same dimensions as the (optionally scaled) intrinsic image size
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth * ddpx
  canvas.height = img.naturalHeight * ddpx

  // Draw the original image onto the canvas
  const ctx = canvas.getContext('2d')! // eslint-disable-line @typescript-eslint/no-non-null-assertion
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  // Using `source-atop`, replace the original image with the tint color
  ctx.globalCompositeOperation = 'source-atop'
  ctx.fillStyle = tintColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  return canvas.toDataURL()
}

/**
 * Tinted Image - useful for coloring in icons
 * Creates a tinted image icon by replacing non-transparent image content with solid color.
 * Tinting does not affect the alpha channel so that anti-aliasing is preserved.
 */
export const TintImage: React.FC<Props> = (props) => {
  const { tintColor, ...imgProps } = props
  const [key, setKey] = useState(uuid.v4())
  const [ready, setReady] = useState(false)
  const [src, setSrc] = useState(props.src)
  const [srcSet, setSrcSet] = useState(props.srcSet)

  /**
   * Callback: Updates the original image with tinted versions
   */
  const handleImgLoad = useCallback(
    (ev: React.SyntheticEvent<HTMLImageElement>) => {
      const img = ev.currentTarget

      if (tintColor) {
        // Update image src with data uris of tinted images
        const x1 = tintImage(img, tintColor)
        const x2 = tintImage(img, tintColor, 2)
        setSrc(x1)
        setSrcSet(`${x1}, ${x2} 2x`)
      }

      // Indicate that the image is ready to display
      setReady(true)
    },
    [tintColor],
  )

  /**
   * Effect: Resets the component whenever image src or tint color changes
   */
  useEffect(() => {
    setSrc(props.src)
    setSrcSet(props.srcSet)
    setKey(uuid.v4())
    setReady(false)
  }, [props.src, props.srcSet, props.tintColor])

  return (
    <img
      {...imgProps}
      key={key}
      src={src}
      srcSet={srcSet}
      style={{
        visibility: !ready ? 'hidden' : undefined,
        objectFit: 'contain',
        objectPosition: '50% 50%',
      }}
      onLoad={!ready ? handleImgLoad : undefined}
    />
  )
}
