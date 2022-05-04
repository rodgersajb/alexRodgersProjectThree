import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Board.scss";
import Post from "./Post";
import AddPostButton from "./AddPostButton";

const POST_WIDTH = 300;
const POST_HEIGHT = 300;

function Board() {
    const [posts, setPosts] = useState([]);

    const onAddPost = () => {
    const newPosts = [...posts];

    axios
        .get(
        "https://rb7paj3rwfgcelny6aaqqagxna0idefd.lambda-url.us-east-1.on.aws/"
        )
        .then((response) => {
        const timestamp = response.data;
        const date = new Date(timestamp * 1000);

        const post = {
            id: uuidv4(),
            x: Math.floor(Math.random() * (window.innerWidth - POST_WIDTH)),
            y: Math.floor(Math.random() * (window.innerHeight - POST_HEIGHT)),
            body: "",
            date: date,
        };
        newPosts.push(post);
        setPosts(newPosts);
    });
};

    const onPostDrag = (index, state) => {
    const newPosts = [...posts];
    newPosts[index].x += Math.round(state.delta[0]);
    newPosts[index].y += Math.round(state.delta[1]);
    setPosts(newPosts);
    };

    const onPostChange = (index, target) => {
    const newPosts = [...posts];
    newPosts[index].body = target.value;
    setPosts(newPosts);
    };

    return (
    <div className="Board">
        <AddPostButton onClick={onAddPost} />
        {posts.map((post, index) => {
        return (
            <Post
            {...{
                key: post.id,
                id: post.id,
                x: post.x,
                y: post.y,
                body: post.body,
                date: post.date,
                width: POST_WIDTH,
                height: POST_HEIGHT,
                onDrag: (state) => {
                    onPostDrag(index, state);
                },
                onChange: (target) => {
                    onPostChange(index, target);
            },
            }}
        />
        );
      })}
    </div>
  );
}

export default Board;
