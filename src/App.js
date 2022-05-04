import "./App.scss";
import Board from "./Components/Board";

function App() {
    return (
        <div className="App">
          <div className="OGPost">
            <p>Hi! I'm a post it. Feel like writing some things down? Go ahead! Click the button in the top left corner to add lots of me's all over the page. You can move the posts wherever you'd like. Happy Posting! 😎</p>
          </div>
          <div className="SmallOGPost">
            <p><span className="Juno">Created at Juno College of Technology</span></p>
          </div>
            <Board />

            
        </div>
    );
}

export default App;
