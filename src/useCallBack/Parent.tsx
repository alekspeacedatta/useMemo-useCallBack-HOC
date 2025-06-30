import { useCallback, useEffect, useState } from 'react';
import Child from './Child';
const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
        console.log('clicked');
    }, [])
    useEffect(() => {
        handleClick();
    }, [handleClick]);
    return (
        <div>
            Parent
            <button onClick={handleClick}> click me { count } </button>
            <Child handleClick={handleClick}/>
        </div>
        
    )
}
export default Parent

// mount => count + 1 => function did update => mountagain - calling useEffect with handle Click => repeat