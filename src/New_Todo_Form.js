import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState('');

    const handleChanges = evt => {
        setTask(evt.target.value);
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask('');
    };


    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="task">Task:</label>
                <input
                   id="task"
                   type="text"
                   name="task"
                   onChange={handleChanges}
                   value={task}
                />
                <button> ADD TODO!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;