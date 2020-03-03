import { uniq, groupBy, merge, mergeWith } from 'lodash'

type Muscles = 'shoulders' | 'arms' | 'legs' | 'back' | 'chest'

export interface Exercise {
  // readonly id: string
  readonly title: string
  readonly description: string
  readonly muscles: Muscles
}

export const initialExercises: readonly Exercise[] = [
  {
    // id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders',
  },
  {
    // id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms',
  },
  {
    // id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms',
  },
  {
    // id: 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest',
  },
  {
    // id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back',
  },
  {
    // id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back',
  },
  {
    // id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs',
  },
]

export const muscles: readonly Muscles[] = [
  'shoulders',
  'arms',
  'legs',
  'back',
  'chest',
]

// export const exercisesGroupedByMuscle2 = (exercises: readonly Exercise[]) => {
//   const arr = exercises.map(ex => ({ [ex.muscles]: [ex.title] }))

//   const combine = (titles: string[], titles2: string[]) =>
//     (titles || []).concat(titles2)

//   return mergeWith({}, ...arr, combine)
// }

export const exercisesGroupedByMuscle = (exercises: readonly Exercise[]) => {
  return groupBy(exercises, 'muscles')
}

// const getTitlesByMuscles = (
//   exercises: readonly Exercise[],
// ): readonly TitlesByMuscles[] => {
//   const result = []
//   for (const exercise of exercises) {
//     const { muscles } = exercise
//     const titles = exercises
//       .filter(ex => ex.muscles === muscles)
//       .map(ex => ex.title)
//     result.push({ muscles, titles })
//   }
//   return result
// }
