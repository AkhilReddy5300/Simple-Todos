import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="list">
      <p className="p">{title}</p>
      <button className="button" type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
