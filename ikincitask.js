let cem = 0

function cutcemi(callback , ...verilenler) {

    for (let i = 0; i < verilenler.length; i++) {

        if (verilenler[i] % 2 === 0) {
            cem += verilenler[i];
        }
    }
    callback(cem);
}

function netice(cem) {
    console.log(cem);
}

let verilenler = [31, 13, 36, 44, 25]

cutcemi(netice, ...verilenler);






