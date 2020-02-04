import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" gutterBottom>
        Exercises Database
      </Typography>
    </Toolbar>
  </AppBar>
)
