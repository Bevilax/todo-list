import React from "react";
import { getTodos, updateTodo } from "./api.js";

export const TodoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		const fn = async () => {
			const apiTodos = await getTodos();
			setTodos(apiTodos.map((x) => x.label));
		};
		fn();
	}, []);

	React.useEffect(() => {
		const fn = async () => {
			await updateTodo(todos.map((x) => ({ label: x, done: false })));
		};

		fn();
	}, [todos]);

	return (
		<div>
			<input
				value={task}
				onChange={(ev) => setTask(ev.currentTarget.value)}
				onKeyDown={(ev) => {
					if (ev.key === "Enter") {
						setTodos([...todos, task]);
						setTask("");
					}
				}}
			/>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};
