import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { TintImage } from './TintImage'

class MockCanvas {
  private ctx = new Mock2dContext()
  public width = 0
  public height = 0

  public getContext(): Mock2dContext {
    return this.ctx
  }

  public toDataURL(): string {
    return JSON.stringify([[this.width, this.height], ...this.ctx.ops])
  }
}

class Mock2dContext {
  public ops: any[] = []

  public globalCompositeOperation = ''

  public fillStyle = ''

  public drawImage(
    img: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void {
    this.ops.push(['drawImage', img.src, x, y, width, height])
  }

  public fillRect(x: number, y: number, width: number, height: number): void {
    this.ops.push([
      'fillRect',
      x,
      y,
      width,
      height,
      this.fillStyle,
      this.globalCompositeOperation,
    ])
  }
}

const originalCreateElement = document.createElement.bind(document)
jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
  switch (tagName) {
    case 'canvas': {
      return new MockCanvas() as any
    }
    default:
      return originalCreateElement(tagName)
  }
})

describe('TintImage', () => {
  it('should render stuff', async () => {
    const wrapper = render(<TintImage tintColor="blue" src={'my-image.png'} />)
    fireEvent.load(wrapper.container)

    const img = await wrapper.findByRole('img', { hidden: true })

    Object.defineProperty(img, 'naturalWidth', { value: 42 })
    Object.defineProperty(img, 'naturalHeight', { value: 52 })

    fireEvent.load(img)
    const tintedImg = (await wrapper.findByRole('img')) as HTMLImageElement

    // Get stringified src sets
    const tintedImgSrcSetStr = decodeURI(tintedImg.srcset)

    // Expected src values are produced by MockCanvas.toDataURL()
    const expected1x = JSON.stringify([
      [42, 52],
      ['drawImage', 'http://localhost/my-image.png', 0, 0, 42, 52],
      ['fillRect', 0, 0, 42, 52, 'blue', 'source-atop'],
    ])
    const expected2x = JSON.stringify([
      [84, 104],
      ['drawImage', 'http://localhost/my-image.png', 0, 0, 84, 104],
      ['fillRect', 0, 0, 84, 104, 'blue', 'source-atop'],
    ])

    expect(tintedImgSrcSetStr).toContain(expected1x)
    expect(tintedImgSrcSetStr).toContain(expected2x)
  })
})
