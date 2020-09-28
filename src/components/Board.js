import React from "react";
import "./board.css";

function Board(props) {
    const {boardset, boardplay} = props;
    const buildTileGroups = boardplay.map((each_i, i) => each_i.map((each_j, j) => <TileGroup key={`${i}${j}`} tiles={each_j} origtiles={boardset[i][j]} ij={{i, j}} />));
    const tileGroups = buildTileGroups.flat();

    return (
        <div id="board">
            {tileGroups}
        </div>
    )
}

function TileGroup(props) {
    const {tiles, origtiles, ij} = props;
    const {i, j} = ij;
    const buildTiles = tiles.map((each_k, k) => each_k.map((each_l, l) => <Tile key={`${i}${j}${k}${l}`} tile={each_l} origtile={origtiles[k][l]} ijkl={{i, j, k, l}} />));
    const tilese = buildTiles.flat();

    return (
        <div className="tile-group">
            {tilese}
        </div>
    )
}

function Tile(props) {
    const {tile, origtile, ijkl} = props;
    const {i, j, k, l} = ijkl;
    const classes = tile ? "tile flex-center" : "tile open flex-center"

    return (
        <div className={classes}>
            {tile}
        </div>
    )
}

export default Board;