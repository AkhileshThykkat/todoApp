import {FaTrash} from 'react-icons/fa'
const Task = ({task,onDelete,onToggle}) => {
  return (
   <div className={`task ${task.reminder ? 'reminder' : ''}`}>
    <h3 onDoubleClick={(id)=>onToggle(task.id)} key={task.id}>{task.text} <FaTrash onClick={(id)=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
    <p>{task.day}</p>
   </div>
  )
}

export default Task