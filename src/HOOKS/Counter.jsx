import React, {useState} from "react";
import useDocumentTitle from "./useDocumentTitle";
const Counter = (props) => {
	const [counter, setCounter] = useState(0)
	const [title, setTitle] = useState('')

	useDocumentTitle(title)
	return(
		<>
			<input type="text" onChange={(e) => setTitle(e.currentTarget.value)}/>
			<div>{title} as clicked {counter} times</div>
			<button onClick={() => setCounter(counter + 1)}>Press me</button>
			</>
	)
}


export default Counter;
