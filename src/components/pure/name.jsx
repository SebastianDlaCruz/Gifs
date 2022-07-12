import React from 'react';

const Name = ({ name, eliminar }) => {
    return (
        <li className="container-name__li" >
            <p>{name}</p>
            <button onClick={eliminar}>X</button>
        </li>
    );
}

export default Name;
