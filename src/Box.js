import React from "react";

// Box component definition
function Box({
    id,
    handleRemove,
    width = 5, // Default width if not provided
    height = 5, // Default height if not provided
    backgroundColor = "teal" // Default background color if not provided
}) {
    // Corrected function name from 'reomve' to 'remove'
    const remove = () => handleRemove(id); // Function to call handleRemove with the box's id

    // Return JSX for the Box component
    return (
        <div>
            {/* Inline style for the box div with dynamic width, height, and backgroundColor */}
            <div
                style={{
                    width: `${width}em`, // Set width in em units
                    height: `${height}em`, // Set height in em units
                    backgroundColor // Set background color
                }}
            />
            {/* Button to remove the box, calling the remove function when clicked */}
            <button onClick={remove}>Remove!</button>
        </div>
    );
}

// Export the Box component for use in other parts of the application
export default Box;
