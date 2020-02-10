import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { CreateExerciseForm } from '../exercises/dialogs/Create'
import { Exercise, exercises } from '../store'

export const Header: React.FC = () => {
  const [exercisesList, setExercises] = React.useState(exercises)
  const handleCreate = (exercise: Exercise) => {
    setExercises([...exercisesList, exercise])
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" gutterBottom style={{ flex: 1 }}>
          Exercises Database
        </Typography>
        <CreateExerciseForm onCreate={() => handleCreate} />
      </Toolbar>
    </AppBar>
  )
}
