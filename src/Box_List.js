import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./New_Box_Form";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const add = boxObj => {
        setBoxes(Boxes => [...Boxes, boxObj]);
    };
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id!== id));
    };
    
    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    );
}

export default BoxList;