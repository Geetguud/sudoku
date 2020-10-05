function configure(board, difficulty) {
    const shownumbers = difficulty === "easy" ? 38 
        : difficulty === "medium" ? 30 
        : difficulty === "hard" ? 25
        : difficulty === "expert" ? 23
        : null;
    if (!shownumbers) { return board }
    let configboard = board.flat().flat().flat().flat();
    let configset = filler();
    let shown = 0;
    while (shown < shownumbers) {
        for (let i = 0; i < configset.length && shown < shownumbers; i++) {
            if (configset[i]) { continue; }
            const constant = randnum(-1000, 1000);
            if (constant > -200 && constant < 200) {
                configset[i] = configboard[i];
                shown++;
            }
        }
    }
    let configured = [];
    for (let i = 0; i < 3; i++) {
        configured.push([]);
        for (let j = 0; j < 3; j++) {
            configured[i].push([]);
            for (let k = 0; k < 3; k++) {
                configured[i][j].push([]);
                for (let l = 0; l < 3; l++) {
                    configured[i][j][k].push(configset.shift());
                }
            }
        }
    }
    return configured
}

function filler() {
    let a = [];
    for (let i = 0; i < 81; i++) a.push(null)
    return a
}

function randnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default configure;