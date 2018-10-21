module.exports = countMinTrucksToDeliver = (arr, maxLoad) => {
    let result = 0;
    let remainingArr = [];
    const resultObj = {};

    arr.forEach((element) => {

        let min = maxLoad + 1, bi = 0;

        for (let j = 0; j < result; j++) {
            if (remainingArr[j] >= element.weight && remainingArr[j] - element.weight < min) {
                bi = j;
                min = remainingArr[j] - element.weight;
            }
        }

        if (min == maxLoad + 1) {
            remainingArr[result] = maxLoad - element.weight;
            resultObj[result] = resultObj[result] ? [...resultObj[result], element] : [element];
            result++;
        } else {
            remainingArr[bi] -= element.weight;
            resultObj[bi] = resultObj[bi] ? [...resultObj[bi], element] : [element];
        }
    });

    return resultObj;
};

