function generate() {
    let arrs = [];
    for (let i = 0; i < 3; i++) {
        arrs.push([]);
        for (let j = 0; j < 3; j++) {
            arrs[i].push([]);
            let nums = gennums();
            for (let k = 0; k < 3; k++) {
                arrs[i][j].push([]);
                for (let l = 0; l < 3; l++) {
                    const toInsert = insert(nums, arrs, {i, j, k, l});
                    arrs[i][j][k].push(toInsert);
                    nums.splice(nums.indexOf(toInsert), 1);
                }
            }
        }
    }
    if (arrs.flat().flat().flat().flat().includes("not found")) { return generate() }
    return arrs
}

function insert(nums, arrs, ijkl) {
    const {i, j, k, l} = ijkl;
    const samebox = arrs[i][j].flat().flat();
    const samerow = arrs[i].map(each => each[k]).flat().flat();
    const samecolumn = arrs.map(each => each[j].map(eachh => eachh[l])).flat().flat();
    for (let m = 0; m < nums.length; m++) {
        if (chek(nums.slice(m), {samebox, samecolumn, samerow})) {
            return nums[m]
        }
    }
    return "not found"
}

function chek(nums, sames) {
    const {samebox, samecolumn, samerow} = sames;
    if (samebox.includes(nums[0]) || samerow.includes(nums[0]) || samecolumn.includes(nums[0])) {
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
    return Math.floor(Math.random() * (max - min + 1)) + 1
}

export default generate;