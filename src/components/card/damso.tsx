'use client'

import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'

export default function Damso() {
  useTheme()

  const tracks = [
    { id: 1, title: 'JCVDEMS', src: '/images/audios/1_2 - JCVDEMS - Damso (320).mp3' },
    { id: 2, title: 'LOVE IS FOREVER BLIND', src: '/images/audios/1_3 - Love is blind - Damso (320).mp3' },
    {
      id: 3,
      title: 'PA PA PAW feat (SARAH SEY)',
      src: '/images/audios/1_4 - Pa Pa Paw - Damso  SARAH SEY (320).mp3'
    },
    { id: 4, title: 'FRERE', src: '/images/audios/1_9 - Frère - Damso (320).mp3' },
    { id: 5, title: 'T\'ES MON DEL', src: '/images/audios/1_11 - T’es mon DEL - Damso (320).mp3' },

  ]

  const [currentTrackId, setCurrentTrackId] = React.useState<number | null>(null)
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const handlePlayPause = (track: (typeof tracks)[0]) => {
    if (!audioRef.current) return

    if (currentTrackId === track.id && !audioRef.current.paused) {
      audioRef.current.pause()
      setCurrentTrackId(null)
    } else {
      audioRef.current.src = track.src
      audioRef.current.play()
      setCurrentTrackId(track.id)
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          mt: 2,
          ml: 2
        }}
      >
        <Card sx={{ display: 'flex', width: 320, height: 'auto', boxShadow: 3 }}>
          <CardMedia
            component='img'
            sx={{ width: 80, height: 80, objectFit: 'cover', m: 1, borderRadius: 2 }}
            image='/Damso.jpg'
            alt='Album cover'
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent sx={{ p: 1 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontSize: 14 }}>
                BĒYĀH
              </Typography>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}
                component='nav'
                subheader={<ListSubheader sx={{ fontSize: 12, lineHeight: 1.5 }}>Damso</ListSubheader>}
              >
                {tracks.map(track => (
                  <ListItemButton key={track.id} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <IconButton size='small' onClick={() => handlePlayPause(track)}>
                        {currentTrackId === track.id ? (
                          <i className='ri-pause-fill' style={{ fontSize: 20 }} />
                        ) : (
                          <i className='ri-play-fill' style={{ fontSize: 20 }} />
                        )}
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={track.title} primaryTypographyProps={{ fontSize: 13 }} />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Box>
        </Card>

        <audio ref={audioRef} />
      </Box>
    </>
  )
}
