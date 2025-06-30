
const Child = ({ handleClick }: { handleClick: () => void; }) => {
    console.log('rendered');
    return (
        <button onClick={handleClick}>click me</button>
    )
}
export default Child