function tektoplam(callback, ...verilenler) {

    let cem = 0


    for (let i = 0; i < verilenler.length; i++) {

        if (verilenler[i] % 2 !== 0) {
            cem += verilenler[i];
        }
    }
    callback(cem);
}

function cuttoplam(callback, ...verilenler) {

    let cem = 0


    for (let i = 0; i < verilenler.length; i++) {

        if (verilenler[i] % 2 === 0) {
            cem += verilenler[i];
        }
    }
    callback(cem);
}

function hasil(tektoplam, cuttoplam) {
    return tektoplam * cuttoplam
}

function netice(deyer) {
    console.log(deyer);
}

let verilenler = [1, 2, 3, 4, 5]

tektoplam((tektoplamres) => {
    cuttoplam((cuttoplamres) => {

        let result = hasil(tektoplamres, cuttoplamres)

        netice(result)
    }, ...verilenler);
}, ...verilenler);
