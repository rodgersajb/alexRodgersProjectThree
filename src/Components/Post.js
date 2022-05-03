import { useState } from "react"
import { useDrag } from '@use-gesture/react'

const Post = (props) => {

const [ boardPosition, setBoardPosition ] = useState({ x: 0, y: 0})
const trackPost = useDrag((moving) => {
    setBoardPosition({
        x: -moving.offset[0],
        y: moving.offset[1],
        
    })

    console.log(setBoardPosition)

})
// callback that is continously called while user is dragging 

// For any react element to be draggable, it needs to have a ref property which will be dragRef returned from the useDrag hook


    return (
    
        <div  className="Post"
        {...trackPost()}
        style={{
            position: 'relative',
            top: boardPosition.y,
            right: boardPosition.x,
        }}
        >
        
            <form action="">
            

            <textarea defaultValue="type something here"name="PostIt" cols="40" rows="10"></textarea>
            <button className="submitButton"
            
            >Post</button>

            </form>
            
        </div>
    
    )
}

export default Post