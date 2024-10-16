import { ChangeEvent, FC, useState } from 'react';
import { ITask } from './Interfaces';
import ToDoList from './Components/ToDoList';

const App: FC = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    const newTask = { taskName: task }
    setTodoList([...todoList, newTask])
    setTask("")
  }

  const deleteTask = (taskNameToDelete: string) => {
    setTodoList(todoList.filter((todo) => todo.taskName !== taskNameToDelete))
  }

  return (
    <div className="App">
      <h3>ToDo List - Typescript React App</h3>
      <input type="text" placeholder='Enter Task...' onChange={handleInputChange} value={task} />
      <button onClick={addTask}>Add Task</button>
      {todoList.map((todo: ITask, index) => {
        return <ToDoList key={index} todo={todo} deleteTask={deleteTask} />
      })}
    </div>
  );
}

export default App;
