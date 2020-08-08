import React from "react";
import useFetchUsers from "./useFetchUsers";
const Users = () => {
	const users = useFetchUsers();
	const renderUsers = () => {
		if(users.length === 0)
			return <h3>Loading users...</h3>
		else {
			return <>
					<ul>
						{users.map(user => <li key={user.name}>{user.name}</li>)}
					</ul>
				</>
		}
	}
	return (
		<>
			<h1>Users</h1>
			{renderUsers()}
		</>
	)
}


export default Users;
