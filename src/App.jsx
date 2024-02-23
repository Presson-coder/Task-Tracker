import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
// import './index.css'

function App(){
  const [tasks, setTasks] = useState( [

    {   id :1,
        text : 'Doctors appointment',
        day : 'Feb 5th at 12:30pm',
        remender : true,
    },
    {
        id:2,
        text : 'Meeting at school',
        day : 'Feb 6th at 1:30pm',
        reminder : true,
    },
    {
        id:3,
        text : 'Food shopping',
        day : 'Feb 5th at 12:30pm',
        reminder : false,
    }

])
//toggleReminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? 
  {...task, reminder: !task.reminder } : task))
}

//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !==id))
}

  return (
    <div className='container'>
      <Header/>
      <AddTasks/>
      {tasks.length > 0 ?
       (<Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder}
       />)
       : 'No Tasks to show!'
      }
    </div>
  )
}

export default App


