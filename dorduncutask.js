function single(callback, ...variable) {

    let total = 0


    for (let i = 0; i < variable.length; i++) {

        if (variable[i] % 2 !== 0) {
            total += variable[i];
        }
    }
    callback(total);
}

function couple(callback, ...variable) {

    let total = 0


    for (let i = 0; i < variable.length; i++) {

        if (variable[i] % 2 === 0) {
            total += variable[i];
        }
    }
    callback(total);
}

function outcome(single, couple) {
    return single * couple
}

function result(value) {
    console.log(value);
}

let variable = [1, 2, 3, 4, 5]

single((singleres) => {
    couple((coupleres) => {

        let sum = outcome(singleres, coupleres)

        result(sum)
    }, ...variable);
}, ...variable);
