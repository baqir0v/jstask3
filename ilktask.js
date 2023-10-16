let verilenler = [1,2,3,4,5]

function ortalama(callback, ...verilenler) {

    let cem = verilenler.reduce((number, deyer) => number + deyer, 0)
    let orta = cem / verilenler.length
    callback(orta)

}

function netice(orta) {
    console.log(orta);
}

ortalama(netice, ...verilenler)
