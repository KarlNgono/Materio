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

export default function Odumodublvck() {
  useTheme()

  const tracks = [
    { id: 1, title: 'ADAMMA BEKE', src: '/images/audios/Odumodublvck%20-%20ADAMMA%20BEKE.mp3' },
    { id: 2, title: 'COMMEND', src: '/images/audios/Odumodublvck%20-%20COMMEND.mp3' },
    {
      id: 3,
      title: 'BLOOD ON THE DANCEFLOOR',
      src: '/images/audios/Odumodublvck%20-%20BLOOD%20ON%20THE%20DANCE%20FLOOR.mp3'
    },
    { id: 4, title: 'DOG EAT DOG', src: '/images/audios/Odumodublvck%20-%20DOG%20EAT%20DOG%20II.mp3' },
    { id: 5, title: 'SHOOT AND GO HOME', src: '/images/audios/Odumodublvck%20-%20SHOOT%20AND%20GO%20HOME.mp3' }
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
            image='/Odomodublvck.jpg'
            alt='Album cover'
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent sx={{ p: 1 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontSize: 14 }}>
                EZIOKWU
              </Typography>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}
                component='nav'
                subheader={<ListSubheader sx={{ fontSize: 12, lineHeight: 1.5 }}>Odomodublvck</ListSubheader>}
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
