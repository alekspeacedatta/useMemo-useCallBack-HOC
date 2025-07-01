import './App.css'
// import Parent from './useCallBack/Parent'
import TaskList from './useCallBack/TODO/TaskList'
// import NamesList from './useMemo/NamesList'
// import ProductList from './useMemo/ProductList'
import UserList from './HIgh Order Hooks/example1/UserList'
import WithLoading from './HIgh Order Hooks/example1/WithLoading'
import { useEffect, useState } from 'react';
import Hello from './HIgh Order Hooks/example2/Hello';
import WithLogger from './HIgh Order Hooks/example2/WithLogger';
import User from './HIgh Order Hooks/example3/User';
import WithAuthProtection from './HIgh Order Hooks/example3/WithAuthProtection';
import ShowDate from './HIgh Order Hooks/example4/ShowDate';
import WithDate from './HIgh Order Hooks/example4/WithDate';


const UserListWithLoading = WithLoading(UserList);
const HelloWithLogger = WithLogger(Hello);
const UserWithAuthProtection = WithAuthProtection(User);
const ShowDateWithDate = WithDate(ShowDate)

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
        {/* <h1>User List</h1> */}
        {/* <UserListWithLoading isLoading={isLoading} users={users}/> */}
        {/* <HelloWithLogger name='alice'/> */}
        {/* <UserWithAuthProtection name='Bob' isLoggedIn={true} /> */}
        <ShowDateWithDate />
      </div>
    </>
  )
}

export default App
