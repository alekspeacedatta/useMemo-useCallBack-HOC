const RemoveTask = ({ removeTask, taskId }: { removeTask: (id: number) => void; taskId: number }) => {
    return (
        <button onClick={() => {removeTask(taskId) }}> Remove Task</button>
    )
}
export default RemoveTask