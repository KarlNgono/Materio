'use client'

import * as React from 'react'

import Box from '@mui/material/Box'

import Odomodublvck from '@/components/card/odomodublvck'
import Himra from '@components/card/himra'
import Damso from '@components/card/damso'

export default function Page() {
  return (
    <>
      <h3>Nigeria top album</h3>
      <Box sx={{ display: 'flex', gap: 2, mt: 2, ml: 2 }}>
        <Odomodublvck />
        <Himra />
        <Damso />
      </Box>
    </>
  )
}
