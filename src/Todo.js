import React, { useState } from "react";

function Todo({ task= "default to ", id= "1", remove, update }) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const  toggleEdit = () => {
        setIsEditing(edit => !edit);
    
    };

    const handleChanges = evt => {
        setEditTask(evt.target.value);
    };

    const handleDelete = () => remove(id);

    const handleUpdate = evit => {
        evt.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

//Defualt view

    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );

// The view when the todo is being edited

    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type = "text" value={editTask} onChange={handleChanges} />
                    <button> Update! </button>
                </form>
            </div>
        );
    }

    return jsx;
}

    export default Todo;