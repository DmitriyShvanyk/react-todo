import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../../components/context'


function TodoItem({ todo, index, onChange }) {

  const { deleteTodo } = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('todo__item--done')
  }

  return (
    <li className={['todo__item', classes].join(' ')}>
      <label className="todo__check">
        <input
          className="todo__check-control"
          type="checkbox"
          name="check"
          checked={todo.completed}
          onChange={() => onChange(todo.id)} />
      </label>
      <span className="todo__index">{index + 1}</span>
      <span className="todo__title">{todo.title}</span>
      <button className="todo__del" title="Delete" onClick={deleteTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  //onChange: PropTypes.func.isRequired
}

export default TodoItem;