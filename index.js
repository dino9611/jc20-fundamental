// type data dan variable 
// type data string, number , boolean
// number dibagi 2 ada integer dan float,  
// cara buat variable
// var, let ,const
// const tidak bisa diganti isinya (constant)/ immutable
// var, let itu mutable, let tidak bisa diinitialisasi lebih dari 1 kali
// aritmatika , ada +,-,*,/,%

// contoh initialisasi 
var namaku 
let namamu 
namaku = 'aqil'
namamu = 'radit'
let angka= String(10) // 10.toString() 10+''
angka = Number(angka) // parseInt(angka)
angka = Boolean(angka)
// console.log(typeof(angka))
// console.log(angka)

// [],{} truthy value
// [].length falsy karena [].length hasilnya 0, dan 0 adalah falsy
// falsy value : 0,'',null,undifined

// conditional statement
// kondisinya harus diisi boolean , true atau false

// if(kondisi){
//     task
// }

// jika kondisinya true maka kodingan atau task yang didalam kurawal akan 
// dijalankan

// if(false){

// }else{

// }


if(true){
    // task1
}
if(true){
    // task2
}

if(true){
    // taks3
}
else if(true){
    // task4
}

//  else akan jalan jika kondisi di ifnya yang diatasnya false

// ||,&&,>,<,>=,<=,==,===,!=,!==

// looping statement
// for, while,dowhile

// selamat kondisi true akan terus mengulang task
// jika selamanya salah juga , harus ada jalan keluarnya ,
// for (let i = 0; i < 10; i++) {
//     // task
// }
// let kataDicari = ''
// while(kataDicari == ''){
    
// }

// task di dowhile at least jalan satu kali
// do {
//     // task
// } while (condition);

// let n = 10
// for (let i = 0; i < 10; i++) {
//     let k=2
//     for (let j = 0; j < 5; j++) {
//         k++
//     }
//     console.log(k)
// }

// array 
// array dimulai dari 0, adalah type data yang bisa menyimpan value 
// lebih dari satu tiap value diberi label index yang dimulai dari 0

// banyak method , push , pop, splice, map,includes, indexof, findindex, filter, reduce
// array 
// let arr =['a','b']
// arr[0]

// function 
// function declaration
// function fungsimu(){

// }
// // function expression
// const fungsiku = function(){

// }
// const fungsiku = ()=>{

// }
// function punya parameter, pada saat menjalankan fungtion value yang dimasukkan adalam parameter disebut
// argument , contoh :
// const fungsiku=(parameter)=>{
    // task
// }

// waktu function dijalankan 
// fungsiku('tes') // 'tes' adalah argument

// function juga ada return dan function tidak return(void)
// yang direturn function bisaanya adalah type data termasuk function juga

// bigInt
// smallInt
// tinyInt

// callBack // argument yang isinya function
// let a = [1,2,3,4,5].map((val)=>{
//     return `<option>${val}</option>`
// })
let a = [1,2,3,4,5]
// let output= []
// for(let i = 0;i<a.length;i++){
//     let data = a[i] *2
//     output.push(data)
// }
let output = a.map((val)=>val*2)
// console.log(output)
// console.log(a)

// object
// object , semua yang ada di javascript adalah object. objct
// bisa nyimpen data lebih dari 1 sama seperti array, tapi tiap valuenya 
// dilabely dengan nama properrty, nama propertynya bebas, syaratnya dalam satu object
// tidak boleh sama nama property
// let manusia1 = {
//     nama:'andika',
//     tl:'22-09-1996',
// }

// dom (Document Object Model)

// uang dibagi angka paling gede 
// di array angka paling gede itu diujung
// variable coins dibiarkan

let hitungKoin = (uang)=>{
    let coins =[1,5,10,25]
    let jumlahCoin = 0
    for(let i = coins.length-1;i>=0;i--){
        let koin = Math.floor(uang/coins[i])
        jumlahCoin+=koin
        uang = uang % coins[i]
        // optimasi performa
        if(uang === 0){
            break
        }
    }
    return jumlahCoin
}



// console.log(hitungKoin(51)) // 3
// console.log(hitungKoin(70)) // 4


let users =[
    {
        username:'user1',
        carts:[
            {nama:'tes1',diskon:0},
            {nama:'tes2',diskon:10},
            {nama:'tes3',diskon:0},
            {nama:'tes4',diskon:0},
        ]
    },
    {
        username:'user2',
        carts:[
            {nama:'tes1',diskon:0},
            {nama:'tes2',diskon:0},
            {nama:'tes3',diskon:0},
            {nama:'tes4',diskon:0},
        ]
    },
]

const cariUserDiskon =(username)=>{
    // cara pake filter
    // cari objectnya dulu
    // let data = users.filter((val)=>val.username === username)
    // console.log(data[0])
    // cara pake find
    // return valuenya sendiri, yang ditemukan pertama kali
    let data =users.find((val)=>val.username === username)
    // let output = false
    // cara foreach
    // data.carts.forEach((val)=>{
    //     if(val.diskon>0){
    //         output = true
    //     }
    // })
    // return output

    // cara filter
    // let hasil=data.carts.filter((val)=>{
    //     return val.diskon >0
    // })
    // return hasil.length ? true : false

    output = data.carts.some((val)=> val.diskon >0)
    return output

}

console.log(cariUserDiskon('user1')) // true
console.log(cariUserDiskon('user2')) // false

const hitung = (numb)=>{
    // let hasil = numb % 10 //1
    let hitungan = 1
    let output = 0
    do {
        let ujung = numb % 10
        if(hitungan % 2 == 1){
            output+=ujung
        }
        hitungan++
        numb = Math.floor((numb - ujung)/10) // (2341-1)/10= 234
    } while (numb > 0);
    return output
}

const hitungDigit = (numb)=>{
    let hitungan =0 
    do {
        let ujung = numb % 10
        numb = Math.floor((numb - ujung)/10) 
        hitungan++
    } while (numb>0);
    return hitungan
}

console.log(hitung(234135)) // 3+1= 4
console.log(hitungDigit(21393)) // 5
// pagination
// [1,2,3,4,5,6,7] page 1-5
// [4,5,6,7,8] 6 dst

const pages = (currPage)=>{

}

console.log(pages(5))// [1,2,3,4,'5',6,7]
console.log(pages(6))// [4,5,"6",7,8]












