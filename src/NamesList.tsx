import { useMemo, useState } from "react";
const names = ['alexs ', 'luka ', 'mari ', 'nika ', 'nini ', 'merabi ', 'lasha ', 'liana ' ];

const NamesList = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(0);

    const filterNames = useMemo(() => {
        return names.filter(name => name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    }, [names, searchTerm])
    
    return (
        <>
            <button onClick={() => {setCount(prev => prev + 1)}}> one up {count}</button>
            <input type="text" value={searchTerm} onChange={(e)=> { setSearchTerm(e.target.value) }} />
            <h2>
                {filterNames}
            </h2>
        </>
    )
}
export default NamesList