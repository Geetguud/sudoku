function generate() {
    while (true) {
        let tryout = gen();
        if (tryout !== "nah") { return tryout }
    }
}

function gen() {
    let arrs = [];
    let restart = false;
    for (let i = 0; i < 3; i++) {
        arrs.push([]);
        for (let j = 0; j < 3; j++) {
            arrs[i].push([]);
            let nums = gennums();
            for (let k = 0; k < 3; k++) {
                arrs[i][j].push([]);
                for (let l = 0; l < 3; l++) {
                    const toInsert = insert(nums, arrs, {i, j, k, l});
                    if (toInsert === "restart") {
                        restart = true;
                        break;
                    }
                    arrs[i][j][k].push(toInsert);
                    nums.splice(nums.indexOf(toInsert), 1);
                }
                if (restart) { break; }
            }
            if (restart) { break; }
        }
        if (restart) { break; }
    }
    if (restart) { return "nah" }
    return arrs
}

function insert(nums, arrs, ijkl) {
    const {i, j, k, l} = ijkl;
    const samerow = arrs[i].map(each => each[k]).flat().flat();
    const samecolumn = arrs.map(each => each[j].map(eachh => eachh[l])).flat().flat();
    for (let m = 0; m < nums.length; m++) {
        if (chek(nums.slice(m), {samecolumn, samerow})) {
            return nums[m]
        }
    }
    return "restart"
}

function chek(nums, sames) {
    const {samecolumn, samerow} = sames;
    if (samerow.includes(nums[0]) || samecolumn.includes(nums[0])) {
        return false
    } else { return true }
}

function gennums() {
    let tonums = [];
    function addnum() {
        let topush = randnum(1, 9);
        if (tonums.includes(topush)) { return addnum() }
        else { return topush }
    }
    for (let m = 0; m < 9; m++) {
        tonums.push(addnum());
    }
    return tonums
}


function randnum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default generate;