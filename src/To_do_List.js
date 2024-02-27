import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./New_Todo_Form";


function TodoList() {
    const [todos, setTodos] = useState([]);

//adds new todo
    const add = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

// updates todo with updatedTask
    const update = (id, updatedTask) => { 
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, task: updatedTask }: todo
                )
            );
        };

// deletes todo with id
    const remove = id => {
        setTodos(todos =>
           todos.filter(todo =>
            todo.id !== id));
        };
    
    const todoComponents = todos.map(todo => (
        <Todo
          remove={remove}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          update={update}
        />
    ));

    return (
        <div>
            <NewTodoForm CreateToDo={create} />
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList;

    
