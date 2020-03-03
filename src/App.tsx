import {
  AppBar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Fab,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import './store'
import {
  Exercise,
  initialExercises,
  exercisesGroupedByMuscle,
  muscles,
} from './store'
//  import { DataTable } from './components/Table'

// import { ExercisesList } from './components/exercises'
// import { Footer, Header } from './components/layout'
// import { exercises, muscles } from './components/store'

interface MuscleSelectionProps {
  readonly muscles: readonly string[]
  readonly selectedMuscle: string
  onSelectedChange(newMuscle: string): void
}

export const MuscleSelection: React.FC<MuscleSelectionProps> = ({
  muscles,
  selectedMuscle,
  onSelectedChange,
}) => {
  return (
    <Tabs
      value={selectedMuscle === 'all' ? 0 : muscles.indexOf(selectedMuscle) + 1}
      onChange={(_, value: number) =>
        onSelectedChange(value === 0 ? 'all' : muscles[value - 1])
      }
    >
      <Tab label="all" />
      {muscles.map(muscle => (
        <Tab label={muscle} key={muscle} />
      ))}
    </Tabs>
  )
}

interface ExerciseListProps {
  readonly exercises: readonly Exercise[]
  onClick(exercise: Exercise): void
}

export const ExercisesList: React.FC<ExerciseListProps> = ({
  exercises,
  onClick,
}) => {
  return (
    <List>
      {exercises.map(ex => (
        <ListItem button key={ex.title} onClick={() => onClick(ex)}>
          <ListItemText>{ex.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

interface SingleMuscleExercisesProps {
  readonly muscles: string
  readonly exercises: readonly Exercise[]
  onClick(ex: Exercise): void
}

export const SingleMuscleExercises: React.FC<SingleMuscleExercisesProps> = ({
  muscles,
  exercises,
  onClick,
}) => {
  return (
    <Paper>
      <Typography variant="h5">{muscles}</Typography>
      <ExercisesList exercises={exercises} onClick={onClick} />
    </Paper>
  )
}

interface MultipleExerciseProps {
  readonly muscleExercises: any
  onClick(ex: Exercise): void
}

export const MultipleExercise: React.FC<MultipleExerciseProps> = ({
  muscleExercises,
  onClick,
}) => {
  return (
    <>
      {Object.keys(muscleExercises).map(muscle => (
        <SingleMuscleExercises
          key={muscle}
          muscles={muscle}
          exercises={muscleExercises[muscle]}
          onClick={onClick}
        />
      ))}
    </>
  )
}

interface ExerciseDescriptionProps {
  readonly title: string
  readonly description: string
}

export const ExerciseDescription: React.FC<ExerciseDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <Paper>
      <Typography variant="h4">{title}</Typography>
      <Typography>{description}</Typography>
    </Paper>
  )
}

const styles: any = {
  style: {
    width: 500,
  },
}

interface CreateFormProps {
  onCreate(exercise: any): void
}

export const CreateExForm: React.FC<CreateFormProps> = ({ onCreate }) => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(!open)
  }
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [muscle, setMuscle] = React.useState('')

  const handleTitleChange = (evt: any) => {
    setTitle(evt.target.value)
  }

  const handleDescriptionChange = (evt: any) => {
    setDescription(evt.target.value)
  }

  const handleMuscleChange = (evt: React.ChangeEvent<{ value: unknown }>) => {
    setMuscle(evt.target.value as string)
  }

  const handleSubmit = () => {
    onCreate({ title, description, muscles: muscle })
    setTitle('')
    setDescription('')
    setMuscle('')
    handleClose()
  }

  return (
    <>
      <Fab size="small" onClick={handleClose}>
        <Add />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Create exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>please fill below form details</DialogContentText>
        </DialogContent>
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            style={styles.style}
          />
          <br />
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows="4"
            style={styles.style}
          />
          <br />
          <FormControl style={styles.style}>
            <InputLabel>Category</InputLabel>
            <Select value={muscle} onChange={handleMuscleChange}>
              {muscles.map((muscles, index) => (
                <MenuItem key={index} value={muscles}>
                  {muscles}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <DialogActions>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

interface HeaderProps {
  onCreate(exercise: any): void
}

export const Header: React.FC<HeaderProps> = ({ onCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flex: 1 }}>
          Exercise Database
        </Typography>
        <CreateExForm onCreate={onCreate} />
      </Toolbar>
    </AppBar>
  )
}

export const App = () => {
  const [exercises, setExercises] = React.useState(initialExercises)
  const [selectedMuscle, setSelectedMuscle] = React.useState('all')
  const [selectedTitle, setSelectedTitle] = React.useState('Welcome')
  const [selectedDescription, setSelectedDescription] = React.useState(
    'Please click on desired exercise on the left',
  )
  const muscleExercises = exercisesGroupedByMuscle(exercises)
  console.log(exercises, muscleExercises)

  const handleSelectedMuscleChange = (newMuscle: string) => {
    setSelectedMuscle(newMuscle)
  }

  const handleClick = (ex: Exercise) => {
    setSelectedTitle(ex.title)
    setSelectedDescription(ex.description)
  }

  const handleCreate = (ex: any) => {
    console.log(ex)
    setExercises([...exercises, ex])
  }

  return (
    <>
      <Header onCreate={handleCreate} />
      <Grid container style={{ marginTop: 100 }}>
        <Grid item sm={4}>
          {selectedMuscle === 'all' ? (
            <MultipleExercise
              muscleExercises={muscleExercises}
              onClick={handleClick}
            />
          ) : (
            <SingleMuscleExercises
              muscles={selectedMuscle}
              exercises={muscleExercises[selectedMuscle]}
              onClick={handleClick}
            />
          )}
        </Grid>
        <Grid item sm={8}>
          <ExerciseDescription
            title={selectedTitle}
            description={selectedDescription}
          />
        </Grid>
      </Grid>
      <MuscleSelection
        muscles={muscles}
        selectedMuscle={selectedMuscle}
        onSelectedChange={handleSelectedMuscleChange}
      />
    </>
  )
}

// export const App = () => {
//   const [category, setCategory] = React.useState(0)
//   // const [exerciseList, setExercises] = React.useState(exercises)

//   // const getExercisesByMuscles = () => {
//   //   return Object.entries(
//   //     exerciseList.reduce((exercises, exercise) => {
//   //       console.log(exercises)
//   //       const { muscles } = exercise
//   //       console.log(exercises)
//   //       exercises.muscles = exercises[muscles]
//   //         ? [...exercises[muscles], exercise]
//   //         : [exercise]
//   //       return exercises
//   //     }, {} as any),
//   //   )
//   // }

//   const handleTabChange = (category: number) => {
//     setCategory(category)
//   }

//   return (
//     <>
//       <Header />
//       <ExercisesList
//         exercises={exercises}
//         muscles={muscles}
//         categoryIndex={category}
//       />
//       <Footer
//         muscles={muscles}
//         value={category}
//         onTabChange={handleTabChange}
//       />
//     </>
//   )
// }

// export const App = () => {
//   return <h1 />
//   // return <DataTable />
// }
