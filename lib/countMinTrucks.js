module.exports = countMinTrucksToDeliver = (arr, maxTrucks, max) => {
    let result = 0;
    let remainingArr = [];
    const resultObj = {};

    arr.forEach((element) => {

        let min = maxTrucks + 1, bi = 0;

        for (let j = 0; j < result; j++) {
            if (remainingArr[j] >= element.weight && remainingArr[j] - element.weight < min) {
                bi = j;
                min = remainingArr[j] - element.weight;
            }
        }

        if (min == maxTrucks + 1) {
            remainingArr[result] = maxTrucks - element.weight;
            resultObj[result] = resultObj[result] ? [...resultObj[result], element] : [element];
            result++;
        } else {
            remainingArr[bi] -= element.weight;
            resultObj[bi] = resultObj[bi] ? [...resultObj[bi], element] : [element];
        }
    });

    return resultObj;
};

