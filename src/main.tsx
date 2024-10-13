import { createRoot } from 'react-dom/client'
import { TodosProvider } from './context/todosProvider.tsx'
import { FilteredTodosProvider } from './context/filterProvider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <TodosProvider>
    <FilteredTodosProvider>
      <App />
    </FilteredTodosProvider>
  </TodosProvider>
)
