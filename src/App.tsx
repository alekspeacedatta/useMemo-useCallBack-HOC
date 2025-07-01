import './App.css'
// import Parent from './useCallBack/Parent'
import TaskList from './useCallBack/TODO/TaskList'
// import NamesList from './useMemo/NamesList'
// import ProductList from './useMemo/ProductList'
import UserList from './HIgh Order Hooks/UserList'
import WithLoading from './HIgh Order Hooks/WithLoading'
import { use, useEffect, useState } from 'react';

const UserListWithLoading = WithLoading(UserList);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(['alice', 'bob', 'alex']);
      setIsLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {/* <NamesList/> */}
      {/* <ProductList/> */}
      {/* <Parent/> */}
      {/* <TaskList/> */}
      <div>
        <h1>User List</h1>
        <UserListWithLoading isLoading={isLoading} users={users}/>
      </div>
    </>
  )
}

export default App
