import React, { useEffect, useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import generate from "./generate";
import configure from "./configure";

function App() {
    const [boardset, setBoard] = useState(null);
    const [boardplay, setBoardPlay] = useState(null);
    const [select, setSelect] = useState(null);
    const [fillin, setFillin] = useState(null);
    const [cheks, setCheks] = useState(true);
    const [deletin, setDeletin] = useState(false);

    function initialize(difficulty) {
        const newboard = generate();
        const newboardplay = configure(newboard.map(each => each), difficulty);
        setBoard(newboard);
        setBoardPlay(newboardplay);
        setSelect(null);
        setFillin(null);
    }
    
    useEffect(() => { initialize("easy") }, [])

    if (!boardset) { return null }

    return (
        <main id="main" className="flex-center">
            <Board
                boardset={boardset}
                boardplay={boardplay}
                select={select}
                setSelect={setSelect}
                fillin={fillin}
                cheks={cheks}
                deletin={deletin}
                setDeletin={setDeletin}
            />
            <Sidebar
                select={select}
                setFillin={setFillin}
                initialize={initialize}
                cheks={cheks}
                setCheks={setCheks}
                setDeletin={setDeletin}
            />
        </main>
    )
}

export default App;