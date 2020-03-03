import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Container,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import { muscles } from '../../store'

const styles: any = {
  style: {
    width: 500,
  },
}

interface FormProps {
  readonly title: string
  readonly description: string
  readonly muscle: string
}

interface CreateExerciseFormProps {
  onCreate(values: FormProps): void
}

export const CreateExerciseForm: React.FC<CreateExerciseFormProps> = ({
  onCreate,
}) => {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [muscle, setMuscle] = React.useState('')

  const handleToggle = () => {
    setOpen(!open)
  }

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
    onCreate({ title, description, muscle })
  }

  return (
    <>
      <Fab size="small" onClick={handleToggle}>
        <Add />
      </Fab>
      <Dialog
        open={open}
        onClose={handleToggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
        </DialogContent>
        <Container>
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
              <InputLabel id="muscles">Muscles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={muscle}
                onChange={handleMuscleChange}
              >
                {muscles.map((muscles, index) => (
                  <MenuItem key={index} value={muscles}>
                    {muscles}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </Container>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
