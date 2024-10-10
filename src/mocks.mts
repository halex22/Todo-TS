type todoElement = {
  id: number,
  title: string,
  complete: boolean
}

const mockTodo: Array<todoElement> = [
  {
    id: 1,
    title: 'First Todo',
    complete: false
  },
  {
    id: 2,
    title: 'Second Todo',
    complete: true
  },
  {
    id: 3,
    title: 'Third Todo',
    complete: false
  }
]

export default mockTodo