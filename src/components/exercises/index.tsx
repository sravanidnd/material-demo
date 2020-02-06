import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import * as React from 'react'
import { exercises, Exercise } from '../store'
import { uniq } from 'lodash'

const Styles = { Paper: { padding: 20, marginTop: 10, marginBottom: 10 } }

interface ExercisesListProps {
  readonly exercises: readonly Exercise[]
}

export const ExercisesList: React.FC<ExercisesListProps> = ({ exercises }) => {
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
        <Paper style={Styles.Paper}>
          <Typography variant="h3">Welcome!</Typography>
          <Typography variant="subtitle1">
            Please select an exercise from the list on the left
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

interface TitlesByMuscles {
  readonly muscles: string
  readonly titles: readonly string[]
}

const getTitles = (exercises: readonly Exercise[], muscles: string) =>
  exercises.filter(ex => ex.muscles === muscles).map(ex => ex.title)

const getTitlesByMuscles = (exercises: readonly Exercise[]) => {
  const result = []
  for (const ex of exercises) {
    result.push(
      exercises.map(({ muscles }) => ({
        muscles,
        titles: getTitles(exercises, muscles),
      })),
    )
  }
  return result
}
// console.log(titlesByMuscles.length)
// console.log(exercises.length)

export interface TitlesListProps {
  readonly titles: readonly string[]
}

export const TitlesList: React.FC<TitlesListProps> = ({ titles }) => {
  return (
    <List component="ul">
      {titles.map(title => (
        <ListItem button>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  )
}

// export const ExercisesList2: React.FC<ExercisesListProps> = ({ exercises }) => {
//   const titlesByMuscles = getTitlesByMuscles(exercises)
//   return (
//     <Grid container>
//       <Grid item sm>
//         <Paper>
//           {titlesByMuscles.map(({ muscles, titles }) => {
//             return (
//               <>
//                 <Typography
//                   variant="h6"
//                   style={{ textTransform: 'capitalize' }}
//                 >
//                   {muscles}
//                 </Typography>

//                 <TitlesList titles={titles} />
//               </>
//             )
//           })}
//         </Paper>
//       </Grid>

//       <Grid item sm>
//         <Paper style={Styles.Paper}>
//           <Typography variant="h3">Welcome!</Typography>
//           <Typography variant="subtitle1">
//             Please select an exercise from the list on the left
//           </Typography>
//         </Paper>
//       </Grid>
//     </Grid>
//   )
// }
