import React, { useState, useRef, useEffect } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

const PlayGround = () => {
    return(
        <div>

<Draggable>
            <div className={"border border-[#000] w-200px h-200px border-[#000]"}>
                <div className="text-md">First Card</div>
                <div>Description</div>
            </div>

        </Draggable>
       {/*    <Note color={"#000"} title={"The first card"} description={"Here at rapid, we aim to help you change the world"}/>*/}
       </div> 
    )
}
export default PlayGround;