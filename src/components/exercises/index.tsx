import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import * as React from 'react'
import { Exercise } from '../store'
import { uniq } from 'lodash'

const Styles = { Paper: { padding: 20, marginTop: 10, marginBottom: 10 } }

const getTitles = (exercises: readonly Exercise[], muscles: string[]) => {
  const result: any = {}
  for (const muscle of muscles) {
    result[muscle] = exercises
      .filter(exercise => muscle === exercise.muscles)
      .map(({ title, description }) => ({ title, description }))
  }
  return result
}
interface ExercisesListProps {
  readonly exercises: readonly Exercise[]
  readonly categoryIndex: number
  readonly muscles: string[]
}

export const ExercisesList: React.FC<ExercisesListProps> = ({
  exercises,
  muscles,
  categoryIndex,
}) => {
  const [description, setDescription] = React.useState(
    'please select the desired exercise on the left',
  )

  const handleExClick = (newDesc: string) => {
    setDescription(newDesc)
  }

  const titleDescriptions: any = getTitles(exercises, muscles)
  const muscle = muscles[categoryIndex]

  return (
    <Grid container>
      <Grid item sm>
        <Paper>
          <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
            {muscle}
          </Typography>

          <List component="ul">
            {titleDescriptions[muscle].map(
              ({ title, description }: any, index: number) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleExClick(description)}
                >
                  <ListItemText primary={title} />
                </ListItem>
              ),
            )}
          </List>
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={Styles.Paper}>
          <Typography variant="h3">Welcome!</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

// interface TitlesByMuscles {
//   readonly muscles: string
//   readonly titles: readonly string[]
// }

// const getTitles = (exercises: readonly Exercise[], muscles: string) =>
//   exercises.filter(ex => ex.muscles === muscles).map(ex => ex.title)

// const getTitlesByMuscles = (exercises: readonly Exercise[]) => {
//   const result = []
//   for (const ex of exercises) {
//     result.push(
//       exercises.map(({ muscles }) => ({
//         muscles,
//         titles: getTitles(exercises, muscles),
//       })),
//     )
//   }
//   return result
// }
// // console.log(titlesByMuscles.length)
// // console.log(exercises.length)

// export interface TitlesListProps {
//   readonly titles: readonly string[]
// }

// export const TitlesList: React.FC<TitlesListProps> = ({ titles }) => {
//   return (
//     <List component="ul">
//       {titles.map(title => (
//         <ListItem button>
//           <ListItemText primary={title} />
//         </ListItem>
//       ))}
//     </List>
//   )
// }

// // export const ExercisesList2: React.FC<ExercisesListProps> = ({ exercises }) => {
// //   const titlesByMuscles = getTitlesByMuscles(exercises)
// //   return (
// //     <Grid container>
// //       <Grid item sm>
// //         <Paper>
// //           {titlesByMuscles.map(({ muscles, titles }) => {
// //             return (
// //               <>
// //                 <Typography
// //                   variant="h6"
// //                   style={{ textTransform: 'capitalize' }}
// //                 >
// //                   {muscles}
// //                 </Typography>

// //                 <TitlesList titles={titles} />
// //               </>
// //             )
// //           })}
// //         </Paper>
// //       </Grid>

// //       <Grid item sm>
// //         <Paper style={Styles.Paper}>
// //           <Typography variant="h3">Welcome!</Typography>
// //           <Typography variant="subtitle1">
// //             Please select an exercise from the list on the left
// //           </Typography>
// //         </Paper>
// //       </Grid>
// //     </Grid>
// //   )
// // }
