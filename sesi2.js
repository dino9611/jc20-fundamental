// let data=[
//     {nama:'aqil',usia:15}
// ]
// let obj = {}
// let nama = 'dino'
// let usia = 12

// obj = {nama,usia}

// console.log(obj)

let obj = {nama:'dino',usia:12}

// let nama = obj.nama
// let usia = obj.usia
// kode diatas sama dengan dibawah

// destruckturing object
// let {nama,usia} = obj

// console.log(nama,usia)

// desctructuring array
let arr= ['gg','wp','coba']

// tanpa destructuring
// let bebas = arr[0] //gg
// let bebas1 = arr[1] //wp

// desctructuring array
// urutan di distructuring array itu penting
// let [bebas,bebas1]=arr


// destucturing function (object terlibat)
// const tes = (param)=>{
//     let {nama,usia} = param
//     return nama+usia
// }
// atas dan bawah codenya sama saja
const tes = ({nama,usia})=>{
    return nama+usia
}

console.log(tes({nama:'aqil',usia:15}))







