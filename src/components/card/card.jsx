import React from "react";



export const Card = (props) => {
    return (
        <div>
            <button onClick={()=>props.history.goBack()}>BACK</button>
            card repo
        </div>
    )
}
