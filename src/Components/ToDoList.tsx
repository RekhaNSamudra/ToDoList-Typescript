import { ITask } from '../Interfaces'

type ToDoListProps = {
    todo: ITask;
    deleteTask: (taskNameToDelete: string) => void
    updateTask: () => void;
}

const ToDoList = ({ todo, deleteTask, updateTask }: ToDoListProps) => {
    return (
        <>
            <div>{todo.taskName}
                <span><button onClick={() => deleteTask(todo.taskName)}>X</button></span>
                <button onClick={updateTask}>Update</button> 
            </div>
        </>
    )
}

export default ToDoList