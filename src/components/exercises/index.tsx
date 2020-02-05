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
  const allMuscles = uniq(exercises.map(exercise => exercise.muscles))
  const getTitles = (arr: string[]) => {
    const result: any = {}
    for (const muscle of arr) {
      result[muscle] = exercises
        .filter(exercise => muscle === exercise.muscles)
        .map(exercise => exercise.title)
    }
    return result
  }
  const titles: any = getTitles(allMuscles)
  return (
    <Grid container>
      <Grid item sm>
        <Paper>
          {allMuscles.map(muscle => {
            console.log(muscle, titles[muscle])
            return (
              <>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {muscle}
                </Typography>

                <List component="ul">
                  {titles[muscle].map((title: string) => (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
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

// const allMuscles = uniq(exercises.map(e => e.muscles))

// const result: any = {}

// for (const muscle of allMuscles) {
//   result[muscle] = exercises.filter(e => e.muscles === muscle).map(e => e.title)
// }

// console.log(result)
