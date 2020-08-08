import React, {useEffect, useState} from "react";
import axios from "axios";

const useFetchUsers = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		const fetchUsers = async () => {
			const users = await axios.get('https://jsonplaceholder.typicode.com/users')
			setUsers(users.data)
		}
		fetchUsers();
	}, [])
	return [users];
}

export default useFetchUsers;
