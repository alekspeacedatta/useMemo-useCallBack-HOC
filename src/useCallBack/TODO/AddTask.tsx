const AddTask = ({ addTask }: { addTask: () => void }) => {
    return (
        <button onClick={addTask}>add Task</button>
    )
}
export default AddTask