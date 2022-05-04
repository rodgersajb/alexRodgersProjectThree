import { useDrag } from "@use-gesture/react";
import "./Post.scss";
import axios from "axios";
import { useEffect, useState} from 'react'

function Post(props) {
    const bind = useDrag((state) => {
        props.onDrag(state);
    });

     const [ time, setTime] = useState([])

    // useEffect(() => {
    //     axios({
    //         url: 'https://rb7paj3rwfgcelny6aaqqagxna0idefd.lambda-url.us-east-1.on.aws/'
    //     }).then((res) => {
    //         const timeStamp = res.data;
    //         const newTimeStamp = new Date(timeStamp * 1000);
    //         console.log(newTimeStamp)
            

    //         setTime(newTimeStamp)
    //     })
    // }, [])
    return (
        <div
            id={props.id}
            className="Post"
            style={{
                left: `${props.x}px`,
                top: `${props.y}px`,
                width: `${props.width}px`,
                height: `${props.height}px`,
            }}
            {...bind()}
        >   
            <span className="time">{props.datetime}</span>
            <textarea
                placeholder="Write something!"
                onChange={(event) => {
                    event.preventDefault();
                    props.onChange(event.target);
                }}
                maxLength={140}
            ></textarea>
            
            
            
        </div>
    );
}

export default Post;
