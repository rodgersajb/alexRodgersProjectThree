import { useState, useEffect } from "react"
import { useDrag } from '@use-gesture/react'
import axios from "axios"

const Post = (props) => {

const [ boardPosition, setBoardPosition ] = useState({ x: 0, y: 0})
const trackPost = useDrag((moving) => {
    setBoardPosition({
        x: -moving.offset[0],
        y: moving.offset[1],
        
    })



})
// callback that is continously called while user is dragging 

// For any react element to be draggable, it needs to have a ref property which will be dragRef returned from the useDrag hook
const [ time, setTime] = useState([])
const [ post, setPost ] = useState([])
const [ index, setIndex] = useState([0])

const addPost = () => {
    setPost([...post, [post]])
}

// const randomNumber = (index) => {
//     Math.floor(Math.random() * 1000)
//     return
// }

  useEffect(() => {
        axios({
            url: 'https://rb7paj3rwfgcelny6aaqqagxna0idefd.lambda-url.us-east-1.on.aws/'
        }).then((res) => {
            const timeStamp = res.data;
            const newTimeStamp = new Date(timeStamp * 100);
            console.log(newTimeStamp)

            setTime(newTimeStamp)
        })
    }, [])

    return (
        <div 
        
        className="Post"
        id= "Post"
        {...trackPost()}
        style={{
            position: 'relative',
            top: boardPosition.y,
            right: boardPosition.x,
        }}
        >
              {/* <form action="">
                

                <textarea defaultValue="type something here"name="PostIt" cols="40" rows="10"></textarea>
                <input type="text" placeholder={time} />
                <button className="submitButton"
                
                >Post</button> */}

                {/* </form> */}
            {post.map((post, index) => {
                return (
                    
                    
                    <form action=""
                    key={index}
                    >
                

                <textarea defaultValue="type something here"name="PostIt" cols="40" rows="10"></textarea>
                <input type="text" placeholder={time} />
                <button className="submitButton"
                
                >Post</button>

                </form>
                
                )
            })}
        
        <button className="postButton"
        onClick={addPost}
        >+</button>
        </div>
    
    )
    
}

export default Post