import React from 'react';
import axios from "axios"

export const Users = () => {
	const [users, setUsers] = React.useState<string[]>([]);
	const [error, setError] = React.useState<string | null>(null);
	React.useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(({data}) => setUsers(data.map((user: {name: string}) => user.name)))
			.catch(() => setError('Error fetching users'));
	}, []);
	return (
		<div>
			<h1>Users</h1>
			{error && <p>{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user}>{user}</li>
				))}
			</ul>
		</div>
	);
};
