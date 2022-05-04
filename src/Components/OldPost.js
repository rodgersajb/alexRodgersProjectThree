// import { useState, useEffect } from "react"
// import { useDrag } from '@use-gesture/react'
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';


// const Post = (props) => {




// const [ boardPosition, setBoardPosition ] = useState({ x: 0, y: 0})
// const trackPost = useDrag((moving) => {
//     setBoardPosition({
//         x: -moving.offset[0],
//         y: moving.offset[1],
        
//     })



// })
// // callback that is continously called while user is dragging 

// // For any react element to be draggable, it needs to have a ref property which will be dragRef returned from the useDrag hook
// const [ time, setTime] = useState([])
// const [ post, setPost ] = useState([])

// // const addPost = (event) => {
// //     event.preventDefault()
// //     setPost([...post, [post]])
// }


// //   useEffect(() => {
// //         axios({
// //             url: 'https://rb7paj3rwfgcelny6aaqqagxna0idefd.lambda-url.us-east-1.on.aws/'
// //         }).then((res) => {
// //             const timeStamp = res.data;
// //             const newTimeStamp = new Date(timeStamp * 1000);
            

// //             setTime(newTimeStamp)
// //         })
// //     }, [])

//     const Submit = (event) => {
//         event.preventDefault()
//     }
    

    
//     return (
        
        
//         <div 

//         id={props.randomNumber}
        
//         className="Post"
        
//         // {...trackPost()}
//         >
            
//             {post.map((post, index) => {
                
//                 return (
                    
//                 <div
//                 key={uuidv4()}
                
                
//                 style={{
//                     position: 'relative',
//                     top: boardPosition.y,
//                     right: boardPosition.x,
//                 }}
//                 >

                    
//                     <form action=""
                    
                    
//                     onSubmit={() => Submit}
//                     {...trackPost()}
                    
                    
//                     >
                

//                 <textarea defaultValue="type something here"name="PostIt" cols="40"  rows="10"></textarea>
//                 <input type="text" placeholder={time} />
//                 <button className="submitButton"
                
                
//                 >Post</button>

//                 </form>
//                 </div>

                
//                 )
//             })}
        
    
//             <button className="postButton"
//             onClick={addPost}
//             >+</button>
//             </div>
            
//     )
    
// }

// export default Post