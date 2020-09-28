import React, { useEffect, useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import generate from "./generate";
import configure from "./configure";

function App() {
    const [boardset, setBoard] = useState(null);
    const [boardplay, setBoardPlay] = useState(null);

    function initialize(difficulty) {
        const newboard = generate();
        const newboardplay = configure(newboard.map(each => each), difficulty);
        setBoard(newboard);
        setBoardPlay(newboardplay);
    }
    
    useEffect(() => { initialize("easy") }, [])

    if (!boardset) { return null }

    return (
        <main id="main" className="flex-center">
            <Board
                boardset={boardset}
                boardplay={boardplay}
            />
            <Sidebar
            />
        </main>
    )
}

export default App;