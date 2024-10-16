import { ITask } from '../Interfaces'

type ToDoListProps = {
    todo: ITask;
    deleteTask: (taskNameToDelete: string) => void

}

const ToDoList = ({ todo, deleteTask }: ToDoListProps) => {
    return (
        <>
            <div>{todo.taskName}
                <span><button onClick={() => deleteTask(todo.taskName)}>X</button></span>
            </div>
        </>
    )
}

export default ToDoList