import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import * as React from 'react'
import { Exercises, exercises } from '../store'
import { uniq } from 'lodash'

const Styles = { Paper: { padding: 20, marginTop: 10, marginBottom: 10 } }

export const ExercisesList: React.FC<Exercises> = ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper>
          {exercises.map(exercise => {
            const { title } = exercise
            return (
              <>
                <Typography
                  key={exercise.id}
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {exercise.muscles}
                </Typography>

                {/* <List component="ul">
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </List> */}
              </>
            )
          })}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={Styles.Paper}>Right Pane</Paper>
      </Grid>
    </Grid>
  )
}

const allMuscles = uniq(exercises.map(e => e.muscles))

const result: any = {}

for (const muscle of allMuscles) {
  result[muscle] = exercises.filter(e => e.muscles === muscle).map(e => e.title)
}

console.log(result)
