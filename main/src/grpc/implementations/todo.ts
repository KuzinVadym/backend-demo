
const todos = [];

function createTodo (call, callback) {
    console.log('Create Todo');

    todos.push(call.request);
    callback(null, call.request);
}

function readTodosStream(call, _callback) {

    todos.forEach(t => call.write(t));
    call.end();
}


function readTodos(call, callback) {
    callback(null, {"items": todos})
}

export default {
    createTodo,
    readTodos,
    readTodosStream
}