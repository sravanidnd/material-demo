import React from 'react'

import { Hello } from './Hello'
import { Header, Footer } from './components/layout'
import { ExercisesList } from './components/exercises'
import { exercises, muscles } from './components/store'

export const App = () => {
  // const [exerciseList, setExercises] = React.useState(exercises)

  // const getExercisesByMuscles = () => {
  //   return Object.entries(
  //     exerciseList.reduce((exercises, exercise) => {
  //       console.log(exercises)
  //       const { muscles } = exercise
  //       console.log(exercises)
  //       exercises.muscles = exercises[muscles]
  //         ? [...exercises[muscles], exercise]
  //         : [exercise]
  //       return exercises
  //     }, {} as any),
  //   )
  // }

  return (
    <>
      <Header />
      <ExercisesList exercises={exercises} />
      <Footer muscles={muscles} />
    </>
  )
}
