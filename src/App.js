import "./App.scss";
import Board from "./Components/Board";

function App() {
    return (
        <div className="App">
          <div className="OGPost">
            <p>Hi! I'm a post it. Feel like writing some things down? Go ahead! Click the button in the top left corner to add lots of me's all over the page. Happy Posting! 😎</p>
          </div>
            <Board />

            
        </div>
    );
}

export default App;
