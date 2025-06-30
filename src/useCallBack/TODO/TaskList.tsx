import { useCallback, useState } from "react";
import AddTask from "./AddTask";
import RemoveTask from "./RemoveTask";
interface TaskType {
    id: number;
    title: string;
    completed: boolean;
}
const tasksArray : TaskType[] = [
    {id: 1, title: 'write code', completed: false},
    {id: 2, title: 'execute code', completed: false},
    {id: 3, title: 'drink code', completed: false},
]
const TaskList = () => {
    const [ tasks, setTasks ] = useState<TaskType[]>(tasksArray);
    const handleInputChange = (id: number) => {
        setTasks(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }
    const addTask = useCallback(() => {
        setTasks(prev => [
            ...prev,
            {
                id: prev.at(-1) ? prev.at(-1)!.id + 1 : 1,
                title: 'New Task',
                completed: false
            }
        ])
    }, [])
    const removeTask = useCallback((id: number) => {
        setTasks(prev =>  prev.filter(item => item.id !== id))
    }, [])
    return (
        <>      
            <AddTask addTask={addTask}/>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3> {task.title} </h3>
                    <input type="checkbox" checked={task.completed} onChange={ () => {handleInputChange(task.id)}} />
                    <RemoveTask removeTask={removeTask} taskId={task.id}/>
                </div>
            ))}
        </>
    )
}
export default TaskList