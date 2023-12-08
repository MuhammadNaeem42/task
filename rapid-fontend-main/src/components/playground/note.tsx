import React, { useState, useRef, useEffect } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

type Props={
    color: string,
    title: string,
    description: string
}

const Note = (props: Props) => {


    return(
        <Draggable>
            <div className={"border border-[#000] w-200px h-200px border-["+props.color+"]"}>
                <div className="text-md">{props.title}</div>
                <div>{props.description}</div>
            </div>

        </Draggable>

    )

}
export default Note