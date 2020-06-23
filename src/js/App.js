import React, { useEffect } from 'react'
import TodoList from './../components/Todo/TodoList'
import Context from './../components/context'

import './../components/Todo/todo.css'

import Loader from '../components/Loader/Loader'
import './../components/Loader/loader.css'


const AddTodo = React.lazy(() => import('../components/Todo/addTodo'))


const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

function App() {

  let [todos, setTodos] = React.useState([])
  let [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
        setLoading(false)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    )
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([{
        title,
        id: Date.now(),
        completed: false
      }])
    )
  }

  return (
    <Context.Provider value={{ deleteTodo }}>
      <div className="container todo">
        <h1 className="todo__title">Todo list</h1>

        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {(todos.length) ? (<TodoList todos={todos} onToggle={toggleTodo} />) : loading ? null : (
          <p className="todo__no">No todos</p>
        )}

      </div>
    </Context.Provider>
  )
}

export default App