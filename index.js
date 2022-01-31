// console.log(myFunction())
function myFunction(param1,param2){
    
    return true
}
// myFunction()
// const myFunction3=function(){
//     console.log('jalan di 8')
//     return false
    
// }
// const myFunction2=()=>{
//     console.log('jalan di 11')
// }

// const myFunction3=function(){
//     console.log('jalan di 8')
//     // for (let i = 0; i < 10000000; i++) {
//     //     console.log('jalan di 19')
        
//     // }
//     return false
    
// }

// let tes= myFunction2()
// let tes2= myFunction3()
// console.log(tes)
// console.log(tes2)
// console.log(myFunction2())

// const tambahan = (angka1,angka2)=>{
//     if(!angka1||!angka2) {
//         return 'harus input angka 2-2nya'
//     }
//     // bikin proteksi harus number
//     let hasil= parseInt(angka1) +parseInt(angka2)
//     if(isNaN(hasil)){
//         return 'input harus number'
//     }
//     return hasil
// }

// const isWeekend = ()=>{
//     return [0,6].includes(new Date().getDay())
// }

// console.log(isWeekend())
// if(isWeekend()){
//     console.log('tidak bisa proses absennya')
// }else{
//     console.log('prosess')
// }

// angka1 = 100 adalah salah satu contoh defualt parameter
// jika argument tidak diberikan maka isi dari angka1 adalah 100
const tambahan = (angka1=100,angka2 =0)=>{

    if(angka1 === undefined||angka2 === undefined ) {
        return 'harus input angka 2-2nya'
    }
    // bikin proteksi harus number
    let hasil= parseInt(angka1) +parseInt(angka2)
    if(isNaN(hasil)){
        return 'input harus number'
    }
    return hasil
}

// const kurangan = (angka1,angka2)=>{
//     return angka1 - angka2
// }

// const kalian = (angka1,angka2)=>{
//     return angka1*angka2
// }

// const showResult = (angka1,angka2,angka3,angka4) =>{
//     return tambahan(angka1,angka2) + kurangan(angka3,angka4)
// }
// call back 
// cb1 dan cb2 expektasinya adalah function
// const showResult = (cb1,cb2,angka1,angka2) =>{

//     return cb1(angka1,angka2) + cb2(angka1,angka2)
// }

// console.log(tambahan(2))

// console.log(showResult(5,3,10,2))
// console.log(tambahan(5,"adas"))

// console.log(showResult(kalian,kurangan,2,10))
// console.log(showResult((angka1,angka2)=>{
//     return angka1*angka2
// },(angka1,angka2)=>{
//     return angka1 - angka2
// },2,10))

// recursive 
// function countDown(count){
//     console.log(count)

//     count --
//     if(count >= 0){
//         countDown(count)
//     }
// }

// countDown(8)

// const fibonacci = (urutan) =>{
//     if(urutan<=2){
//         return 1
//     }else{
//         return fibonacci(urutan -2) +fibonacci(urutan -1)
//     }
// }

// console.log(fibonacci(2))  //1
// console.log(fibonacci(1))  //1
// console.log(fibonacci(6))  //3

// foreach looping sepanjang array
// atas dan bawah sama saja
// nums 
let nums = [3,120,3,4,5]
// for(let i = 0 ;i<nums.length;i++){
//     console.log(`loop ${nums[i]}`)
// }

// console.log('==================')
// nums.forEach((val)=>{
//     console.log(index)
//     console.log(`loop ${val}`)
// })

// let angka = [1,2,3,4,5]

// const kali2 = (val)=>{
//     return 2*val
// }

// // let angkaKali2=angka.map(kali2)
// let angkaKali2=angka.map((val)=>{
//     return val *2
// })
// atas dan bawah sama saja 
// let newArr = new Array(angka.length)
// console.log(newArr)
// for (let i = 0; i < angka.length; i++) {
//     // newArr.push(angka[i]);
//     newArr[i] = angka[i] * 2
    
// }
// console.log(newArr)

// console.log(angka)
// console.log(angkaKali2)

let numb = [1,2,3,4,5]

// let newNumb = numb.map((val)=>{
//     return val /2
// })
// callback function di atas dan bawah sama saja 
// let newNumb = numb.map(val => val/2)
// console.log(newNumb)

let numb2 = [1,3,4,5]
// let oddOrEven = numb2.map((val)=>{
//     // if(val %2 == 0){
//     //     return 'even'
//     // }else{
//     //     return 'odd'
//     // }
//     return val%2 ==0 ? 'even' :'odd'
// })

// console.log(oddOrEven)

// const reverse = kata => kata.split('').reverse().join('')
// kodingan diatas sama dengan kodingan dibawah
// const reverse = (kata) => {

//     return kata.split('').reverse().join('')
// }

// filter
// filter pasti return array
// callback function di filter harus return  boolean
let deret = [1,2,3,4,5]

let newDeret = deret.filter((val)=>{
    return val % 2 === 1
})
// console.log(newDeret)

// sort (advanced with callback)

// let things = [102,31,16,50,316]

// things.sort((a,b)=>{
//     return b-a
// })

let things = ["dino","dika","fauzi","daniel","aqil"]

things.sort((a,b)=>{
    if(a<b){
        return -1
    }
    if(a>b){
        return 1
    }
    return 0
})

console.log(things)















