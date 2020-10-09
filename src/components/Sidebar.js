import React, {useEffect, useState} from "react";
import "./sidebar.css";

function Sidebar(props) {
    const {setFillin, select, initialize, cheks, setCheks, setDeletin} = props;
    const [difficulty, setDifficulty] = useState("easy");
    const operators = {setFillin, select};

    function setDiff(event) { setDifficulty(event.target.value); }
    function todelete() { if (!select) { return } else { setDeletin(true); setFillin(null); }}

    return (
        <div id="sidebar" className="flex-center">
            <h1>sudoku</h1>
            <Fillbuttons operators={operators} />
            <button className="erase clickables" onClick={() => todelete()}>erase</button>
            <label className="chek">check for mistakes:
                <input type="checkbox" checked={cheks} onChange={() => setCheks(!cheks)}></input>
                <i className="chekmark"></i>
            </label>
            <div className="optnew">
                <label>difficulty:
                    <select className="select-diff clickables" value={difficulty} onChange={setDiff}>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                        <option value="expert">expert</option>
                    </select>
                </label>
                <button className="newgame clickables" onClick={() => initialize(difficulty)}>new game</button>
                <p>note: puzzle generation is completely random</p>
            </div>
        </div>
    )
}

function Fillbuttons(props) {
    const {operators} = props;
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(each => <Buton key={`${each}`} each={each} operators={operators} />)

    return (
        <div className="fillbuttons">
            {buttons}
        </div>
    )
}

function Buton(props) {
    const {setFillin, select} = props.operators;

    function tryfill() {
        if (select) { setFillin(props.each); }
    }

    useEffect(() => { setFillin(null); }, [select])

    return (
        <div className="fillbutton flex-center" onClick={() => tryfill()}>
            {props.each}
        </div>
    )
}

export default Sidebar;