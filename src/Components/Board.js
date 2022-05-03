import Post from './Post'
import Button from './Button'
import { useState } from 'react'


// install react-dnd and react-dnd-html5-backend


// Wrap the container component with dnd Provider


const Board = () => {
    



const boardPixel = (number) => {
    Math.floor(Math.random() * 1500)
    console.log(number)
}



    return (
    
        <div className="Board">
            {/* {Board.map((boardPost) => {
                return (
                    < Post x={boardPixel} y={boardPixel} body='Hello, there'/>
                )
            })} */}
            < Post x={100} y={400} body='Hey John Again' />
            < Post x={400} y={200} body='Hey Jin Again'/>

            < Button />
            
        </div>

    
    )
}

export default Board