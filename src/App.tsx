import { ChangeEvent, FC, useState } from 'react';
import { ITask } from './Interfaces';
import ToDoList from './Components/ToDoList';

const App: FC = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>(false); // Track if updating
  const [updateIndex, setUpdateIndex] = useState<number | null>(null); // Index of task to update

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    if (isUpdating && updateIndex !== null) {
      // If we are updating an existing task
      const updatedList = todoList.map((todo, index) =>
        index === updateIndex ? { ...todo, taskName: task } : todo
      );
      setTodoList(updatedList);
      setIsUpdating(false); // Reset update mode
      setUpdateIndex(null);  // Reset index
    } else {
      // Add new task
      const newTask = { taskName: task };
      setTodoList([...todoList, newTask]);
    }
    setTask(""); // Clear input field
  };

  const deleteTask = (taskNameToDelete: string) => {
    setTodoList(todoList.filter((todo) => todo.taskName !== taskNameToDelete))
  }

  const updateTask = (index: number) => {
    const taskToUpdate = todoList[index].taskName;
    setTask(taskToUpdate); 
    setIsUpdating(true);   
    setUpdateIndex(index); 
  };

  return (
    <div className="App">
      <h3>ToDo List - Typescript React App</h3>
      <input type="text" placeholder='Enter Task...' onChange={handleInputChange} value={task} />
      <button onClick={addTask}>Add Task</button>
      {todoList.map((todo: ITask, index) => {
        return <ToDoList key={index} todo={todo} deleteTask={deleteTask} updateTask={() => updateTask(index)}/>
      })}
    </div>
  );
}

export default App;
