import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmit=(e) =>{
        e.preventDefault()
        if (!text){ 
            alert('Add a Task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label  className="task">Task</label>
            <input value={text} type="text" placeholder="Add Task" onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label  className="task">Day and Time</label>
            <input value={day} type="text" placeholder="When" onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label  className="task">Set Remainder</label>
            <input checked={reminder} type="checkbox" placeholder="About" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input className="btn btn-block" type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask