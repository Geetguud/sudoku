import React, { useEffect, useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import generate from "./generate";

function App() {
    const [boardset, setBoard] = useState(null);

    useEffect(() => {
        setBoard(generate());
    }, [])

    if (!boardset) { return null }

    return (
        <main id="main" className="flex-center">
            <Board
                boardset={boardset}
            />
            <Sidebar
            />
        </main>
    )
}

export default App;