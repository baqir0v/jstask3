let cem = 0

function tekcemi(callback , ...verilenler) {

    for (let i = 0; i < verilenler.length; i++) {

        if (verilenler[i] % 2 !== 0) {
            cem += verilenler[i];
        }
    }
    callback(cem);
}

function netice(cem) {
    console.log(cem);
}

let verilenler = [11, 23, 32, 40, 55]

tekcemi(netice, ...verilenler);






