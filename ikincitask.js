let total = 0

function couple(callback , ...variable) {

    for (let i = 0; i < variable.length; i++) {

        if (variable[i] % 2 === 0) {
            total += variable[i];
        }
    }
    callback(total);
}

function result(total) {
    console.log(total);
}

let variable = [31, 13, 36, 44, 25]

couple(result, ...variable);






