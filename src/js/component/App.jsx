import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
            {todo.text}
            <div>
                <button className="complete" onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

  
  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder='Add todo'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function App() {
    const [todos, setTodos] = React.useState([
      {
        text: "Feed the baby",
        isCompleted: false,
      },
      {
        text: "Walk the dog",
        isCompleted: false,
      },
      {
        text: "Go to the grocery store",
        isCompleted: false,
      },
    ]);
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    // Calculate the number of tasks left
    const tasksLeft = todos.filter(todo => !todo.isCompleted).length;
  
    return (
      <div className="todoList my-5 ms-5 me-5 py-5 ps-5 pe-5">
        <h1>Todo List</h1>
        <div className="d-flex">
          <TodoForm addTodo={addTodo} />
        </div>
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
        {/* Footer showing the number of tasks left */}
        <div className="tasks-left">
          {tasksLeft} {tasksLeft === 1 ? "task" : "tasks"} left
        </div>
      </div>
    );
  }
  
  export default App;