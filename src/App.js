import Tasks from './components/Tasks';
import Header from './components/Header';
import { useState } from 'react';
import AddTask from './components/AddTask';
function App() {
  const [show,setshow] = useState(false)
  
  const [tasks,setTasks] =useState([{
    id:1,
    text:'study react',
    reminder:true,
    day:'today'
},
{
    id:2,
    text:"watch one piece",
    reminder : false,
    day:'before midnight'

}])


const deleteTask = (id) =>{
 setTasks(tasks.filter((task)=> task.id !== id))

}

const toggleRemainder = (id) =>{
  setTasks(tasks.map((task)=> task.id === id ?{...task,reminder: !task.reminder}:task))
 
}
function addTask(task){
 const tasksLength = tasks.length
 const id = tasksLength + 1
 const newTask = {id,...task}
 setTasks([...tasks,newTask])
}


  return (
    <div className="container">
      <Header onAdd={()=> setshow(!show)} showBtn={show}/>
      {show&&<AddTask onAdd={addTask}/>}
      {tasks.length ===0 ? <h3 style={{textAlign:'center'}}>No tasks to show</h3> :
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleRemainder} />
        }
    </div>
  );
}

export default App;
