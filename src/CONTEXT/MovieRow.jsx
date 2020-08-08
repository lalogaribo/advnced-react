import React, {useContext} from 'react';
import UserContext from "./userContext";

function MovieRow(props) {
	const currentUser = useContext(UserContext)
	return (
		<div><p>{currentUser.name}</p></div>
	);
}

export default MovieRow;
