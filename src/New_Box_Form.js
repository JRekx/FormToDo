import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// NewBoxForm component definition, accepting createBox as a prop
function NewBoxForm({ createBox }) {
    // Setting up state for the form data using the useState hook
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    // Event handler for form input changes
    const handleChanges = evt => {
        const { name, value } = evt.target;
        // Updating the formData state with the new value for the input that changed
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const gatherInput = evt => {
        evt.preventDefault(); // Preventing the default form submit action
        createBox({ ...formData, id: uuid() }); // Calling createBox with the form data and a new uuid
        // Resetting the form data to initial empty values
        setFormData({ 
            height: "", 
            width: "", 
            backgroundColor: "" 
        });
    };

    // JSX for rendering the form
    return (
        <div> 
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        onChange={handleChanges} // Fixed: onChange instead of onChanges
                        type="text"
                        name="height"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input
                        onChange={handleChanges} // Fixed: onChange instead of onChanges
                        type="text"
                        name="width"
                        id="width"
                        value={formData.width}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        onChange={handleChanges} // Fixed: onChange instead of onChanges
                        type="text"
                        name="backgroundColor"
                        id="backgroundColor"
                        value={formData.backgroundColor}
                    />
                </div>
                <button type="submit" id="newButton">Add Box!</button> 
            </form>
        </div>
    );
}

// Exporting the NewBoxForm component for use in other parts of the application
export default NewBoxForm;
