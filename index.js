const platLewat=(nopol)=>{
    nopol = nopol.split(' ')
    // ['B','1112','CGK']
    nopol = nopol[1]
    let tanggal = new Date().getDate()

    if(tanggal % 2 == nopol % 2 ){
        return 'BOLEH lEWAT'
    }
    return 'NGGAK boleh'

}

console.log(platLewat('B 1112 CGK')) //BOLEH LEWAT
console.log(platLewat('B 1113 CGK')) // NGGAK BOLEH


console.log(ditengah(['maju','kanan','kiri','mundur','kanan','kanan','kiri','kiri'])) // true

console.log(ditengah(['maju','kanan','kiri','mundur','kanan','kanan','kiri'])) // false

// if - 96 - be - 25 - go - 715 - up - 2116