let x =4 ,y= 3, z=2
// pake cara yang atas dan bawah sama saja
// let x =4
// let y =3
// let z=2

let w = ((x+y*z)/(x*y))**z

console.log(w)
// akar3 dari 8
console.log(Math.cbrt(8))

let hari =485

let tahun = Math.floor(hari/360)
hari %=360
let bulan = Math.floor(hari/30)
hari %=30

console.log(`${tahun} tahun, ${bulan} bulan, ${hari} hari`)
// atas bawah sama saja
console.log(tahun+" tahun, "+ bulan+ ' bulan, '+ hari+ " hari")