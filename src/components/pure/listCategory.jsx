import React from 'react';
import '../../css/gifApp.css';
import Name from './name';
const ListCategory = ({ name, dele }) => {


    return (



        <ul className="container-name">
            {name.length > 0
                ? (

                    name.map((i, index) => <Name key={index} name={i} eliminar={dele} />)
                )
                : (
                    <li>Sin Nombre</li>
                )
            }

        </ul>
    )

}

export default ListCategory;
