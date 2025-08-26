import type { FC } from 'react'

import Image from 'next/image'


import type { ImageProps } from 'next/image'

const Logo: FC<Partial<ImageProps>> = (props) => {
  return (
    <Image
           src="/plan monark logo.png"
           alt="Logo"
           width={40}
           height={40}
           fill={false}
           {...props}
    />
  )
}

// @ts-ignore
export default Logo
