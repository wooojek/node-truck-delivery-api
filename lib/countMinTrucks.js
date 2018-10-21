module.exports = countMinTrucksToDeliver = (arr, maxLoad) => {
    let result = 0;
    let remainingArr = [];
    let resultArr = [];
    resultArr.length = arr.length;

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
            resultArr[result] = resultArr[result] ? [...resultArr[result], element] : [element];
            result++;
        } else {
            remainingArr[bi] -= element.weight;
            resultArr[bi] = resultArr[bi] ? [...resultArr[bi], element] : [element];
        }
    });

    return resultArr.filter(obj => obj);
};

