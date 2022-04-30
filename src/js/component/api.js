export async function getTodos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bevilax"
	);
	const payload = await response.json();
	return payload;
}

export async function createTodo() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/bevilax", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify([]),
	});
}

export async function updateTodo(todos) {
	const update = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bevilax",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todos),
		}
	);
	return update;
}

export async function deleteTodo() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/bevilax", {
		method: "DELETE",
	});
}
