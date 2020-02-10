import React from 'react'
import { ExercisesList } from './components/exercises'
import { Footer, Header } from './components/layout'
import { exercises, muscles } from './components/store'

export const App = () => {
  const [category, setCategory] = React.useState(0)
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

  const handleTabChange = (category: number) => {
    setCategory(category)
  }

  return (
    <>
      <Header />
      <ExercisesList
        exercises={exercises}
        muscles={muscles}
        categoryIndex={category}
      />
      <Footer
        muscles={muscles}
        value={category}
        onTabChange={handleTabChange}
      />
    </>
  )
}
