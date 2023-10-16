let total = 0

function single(callback , ...variable) {

    for (let i = 0; i < variable.length; i++) {

        if (variable[i] % 2 !== 0) {
            total += variable[i];
        }
    }
    callback(total);
}

function result(total) {
    console.log(total);
}

let variable = [11, 23, 32, 40, 55]

single(result, ...variable);






