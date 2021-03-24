import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Eat food',
      day: 'Oct 6th at 4:00pm',
      reminder: false
    },
    {
      id: 2,
      text: 'Go to gym',
      day: 'Dec 12th at 7:00pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Learn',
      day: 'Feb 9th at 9:00am',
      reminder: true
    },
  ]);

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No task available"}
    </div>
  );
}

export default App;
