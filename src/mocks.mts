type todoElement = {
  id: number,
  title: string,
  complete: boolean
}

const mockTodo: Array<todoElement> = [
  {
    id: 1,
    title: 'This is the first Todo',
    complete: false
  },
  {
    id: 2,
    title: ' <-- click on this button to mark as completed',
    complete: true
  },
  {
    id: 3,
    title: 'click on the "x" to delete the Todo --->',
    complete: false
  }
]

export default mockTodo