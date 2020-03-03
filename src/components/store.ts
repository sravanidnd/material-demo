export const muscles = ['shoulders', 'chest', 'arms', 'back', 'legs']

export interface Exercise {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly muscles: string
}

export const exercises: readonly Exercise[] = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders',
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms',
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms',
  },
  {
    id: 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest',
  },
  {
    id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back',
  },
  {
    id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back',
  },
  {
    id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs',
  },
]

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
