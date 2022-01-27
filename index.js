// while 
// ini infinite looping karena tidak ada jalan keluar
// while (true) {
//     console.log('line 4')
// }
// let angka = 1

// while (angka<0) {
//     console.log('count- '+angka)
//     angka++
// }

// console.log('terakhir',angka)


// do while , kerjakan dulu baru di cek kondisi
// let angka = 1

// do {
//     console.log(angka)
//     angka++
// } while (angka<5);


// console.log('line 23')
// alur initialisasi variable let numb , jika kondisi numb kurang dari sama dengan 5 menghasilkan
// true maka koding yang ada didalam kurawal pasti dijalankan, setelah selasai dijalankan 
// maka variable numb akan ditambah 1 (karena ++) , lalu di cek kembali apakah kondisinya true/false,
// jika ulangi lagi
// for (let numb = -5; numb < 0; numb++) {
//     console.log('count- '+Math.abs(numb)) 
//     if(Math.abs(numb) === 3){
//         break
//     }
// }
// let angka = 0
// while(angka<5){
//     angka++
//     if(angka === 3){
//         continue
//     }
//     console.log(angka)
// }

// for (let i = 0; i < 5; i++) {
//     if(i == 3){
//         continue
//     }
//     console.log(i)
// }
// bintang horizontal
// console.log('*****')

// console.log('===================')

// let output=''

// for(let i = 5;i>0;i--){
//     output+='*'
// }

// tanpa looping

// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'

// console.log(output)

// bintang vertikal

// console.log('*\n*\n*\n*\n*\n')

// console.log('===================')

// let output=''

// for(let i = 5;i>0;i--){
//     output+='*\n'
// }

// // tanpa looping

// output+='*\n'
// output+='*\n'
// output+='*\n'
// output+='*\n'
// output+='*\n'

// console.log(output)


// bintang persegi

// console.log('*****\n*****\n*****\n*****\n*****\n')

// console.log('===================')

// let output=''

// for(let i = 0;i<5;i++){
//     for (let j = 0; j < 5; j++) {
//         output+='*'
//     }
//     output+='\n'
// }

// tanpa looping
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'



// console.log(output)


// bintang persegi

console.log('*\n**\n***\n****\n*****\n')

console.log('===================')

let output=''

for(let i = 0;i<5;i++){
    for (let j = 0; j <= i; j++) {
        output+='*'
    }
    output+='\n'
}

// tanpa looping
// output+='*' i =0 j=0
// output+='\n'i=0
// output+='*' i=1 j=0
// output+='*' i =1 j=1
// output+='\n'
// output+='*' i= 2 j=0
// output+='*'      j=1
// output+='*'  i=2   j=2
// output+='\n'
// output+='*' i=3
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*' i=4
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'



console.log(output)
