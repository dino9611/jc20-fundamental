let arrCategory = ["Fast Food", "Electronic", "Cloth", "Fruit"];
let obj = { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9}
// for of hanya bisa untuk array jika tidak membutuhkan index
// for (const iterator of arrCategory) {
//     console.log(iterator)
// }

// untuk looping object dan array
// tapi value dalam variable key adalah index untuk array , property untuk object
// for (const key in obj) {
//    console.log(obj[key])
// }

// for (const key in arrCategory) {
//     console.log(key)
// }

// console.log(Object.hasOwnProperty.call(obj,'id')) 
// console.log(obj.hasOwnProperty('id')) // true karena ada propertynya
// console.log(obj.hasOwnProperty('tes')) // false karena propertynya tidak ada

// rest parameter (...)
// const fungsiLain=(...rest)=>{
//     console.log(rest)
// }

// const fungsiku = (a,...rest)=>{
//     console.log(...rest)
//     fungsiLain(...rest)
//     return a
// }

// try/catch throw err
const fungsiku = ()=>{
    try {
        let value = 0
        if(value === 0){
            throw ('tidak boleh 0')
        }
    } catch (error) {
        console.log('masuk error')
        console.log(error)
    }
    console.log('tes')
}

// fungsiku()
