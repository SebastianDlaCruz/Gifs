import React, { useState } from "react";
import Modal from "./modal";

export const GifItem = ({ title, url }) => {

    const [active, setActive] = useState(false);

    const handelModal = () => {
        setActive(!active);
    }

    return (
        <div className="card">
            <img src={url} alt={title} onClick={handelModal} />
            <p>{title}</p>
            {(active) ? <Modal img={url} name={title} clo={handelModal} /> : null}
        </div>
    )
}
