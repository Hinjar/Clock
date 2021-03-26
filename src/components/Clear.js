import React from "react";

export const Clear = (props) => {
    return(
        <button onClick={props.onClick} className='btn btn-danger clear'>Сбросить таймер</button>
    )
}