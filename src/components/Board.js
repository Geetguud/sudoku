import React, { useEffect, useState } from "react";
import "./board.css";

function Board(props) {
    const {boardset, boardplay, select, setSelect, fillin, cheks, deletin, setDeletin} = props;
    const operators = {select, setSelect, fillin, cheks, deletin, setDeletin};
    const buildTileGroups = boardplay.map((each_i, i) => each_i.map((each_j, j) => <TileGroup key={`${i}${j}`} tiles={each_j} origtiles={boardset[i][j]} ij={{i, j}} operators={operators} />));
    const tileGroups = buildTileGroups.flat();

    return (
        <div id="board">
            {tileGroups}
        </div>
    )
}

function TileGroup(props) {
    const {tiles, origtiles, ij, operators} = props;
    const {i, j} = ij;
    const buildTiles = tiles.map((each_k, k) => each_k.map((each_l, l) => <Tile key={`${i}${j}${k}${l}`} tile={each_l} origtile={origtiles[k][l]} ijkl={{i, j, k, l}} operators={operators} />));
    const tilese = buildTiles.flat();

    return (
        <div className="tile-group">
            {tilese}
        </div>
    )
}

function Tile(props) {
    const [fill, setFill] = useState(null);
    const [classes, setClasses] = useState("tile flex-center");
    const {tile, origtile, ijkl} = props;
    const {select, setSelect, fillin, cheks, deletin, setDeletin} = props.operators;

    useEffect(() => {
        let newclas = tile ? "tile flex-center" : "tile flex-center open"
        if (select) {
            const {i, j, k, l} = select;
            if (i === ijkl.i && k === ijkl.k) { newclas += " higlig"; }
            else if (i === ijkl.i && j === ijkl.j) { newclas += " higlig"; }
            else if (j === ijkl.j && l === ijkl.l) { newclas += " higlig"; }
            if (i === ijkl.i && j === ijkl.j && k === ijkl.k && l === ijkl.l) { newclas += " selected"; }
        }
        if (fill) { newclas += " filled"; }
        if (cheks && fill && fill !== origtile) { newclas += " wronk"; }
        setClasses(newclas);
    }, [select, fill, cheks])

    useEffect(() => {
        if (select && !tile) {
            const {i, j, k, l} = select;
            if (fillin && i === ijkl.i && j === ijkl.j && k === ijkl.k && l === ijkl.l) { setFill(fillin); }
        }
    }, [fillin])

    useEffect(() => {
        if (select && deletin) {
            const {i, j, k, l} = select;
            if (fill && i === ijkl.i && j === ijkl.j && k === ijkl.k && l === ijkl.l) { setFill(null); }
            setDeletin(false);
        }
    }, [deletin])

    useEffect(() => { setFill(null) }, [tile, origtile])

    return (
        <div className={classes} onClick={() => setSelect(ijkl)}>
            {tile ? tile : fill}
        </div>
    )
}

export default Board;