let variable = [1,2,3,4,5]

function numbave(callback, ...variable) {

    let total = variable.reduce((number, value) => number + value, 0)
    callback((total / variable.length))

}

function result(mid) {
    console.log(mid);
}

numbave(result, ...variable)
