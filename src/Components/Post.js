import { useDrag } from "@use-gesture/react";
import "./Post.scss";


// Set max character length to 100
const MAX_LENGTH = 100;


// User Drag Hook
function Post(props) {
    const bind = useDrag((state) => {
    props.onDrag(state);
});

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
    // Bind function to allow user to continuously drag across the page
    {...bind()}
    >
    
        <textarea
            placeholder="Write something!"
            onChange={(event) => {
            event.preventDefault();
            props.onChange(event.target);
            }}
            maxLength={MAX_LENGTH}
        ></textarea>
        <span className="date">
            {props.date.toLocaleDateString()} 
            {props.date.toLocaleTimeString()}
        </span>
    </div>
  );
}

export default Post;
