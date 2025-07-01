interface UserListProps {
    users: string[]
}
const UserList = ( {users} : UserListProps ) => {
    return (
        <>
            {users.map((user, id) => (
                <div key={id}>
                    {user}
                </div>
            ))}
        </>
    )
}
export default UserList