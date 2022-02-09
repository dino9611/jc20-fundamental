// setTimeout dan setInterval


// for (let index = 0; index < 10e8; index++) {
    
// }
// console.log('jalan setelah 1 detik')
// const fungsiku = ()=>{
//     console.log('jalan setelah 1 detik')
// }

// setTimeout(fungsiku,1000)

// asyncrounous 
// const getData =(cb)=>{
//     setTimeout(cb,1000)
// }

// getData(()=>{
//     console.log('jalan setelah 1 d')
//     getData(()=>{
//         console.log('jalan 1cb')
        
//     })
// })


// promise

// const getData =(keberhasilan)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(keberhasilan){
//                 resolve({data:"data"})
//             }else{
//                 reject({message:'error'})
//             }
//         },1000)
//     })
// }

// getData(true)
// .then((res)=>{
//     console.log('dari res',res)
//     getData(false)
//     .then((res1)=>{

//     }).catch((err)=>{
//         console.log('dari err 49',err)
//     })
// }).catch((err)=>{
//     console.log('dari err',err)
// })

// promise yang atas dan bawah sama saja

// getData(true)
// .then((res)=>{
//     console.log('dari res',res)
//     return getData(false)
// })
// .then((res)=>{
//     console.log('dari res',res)
// })
// .catch((err)=>{
//     console.log('dari err',err)
// })

// async & await

// async function fetchData(){

// }

// const fetchData = async()=>{
    
//     try {
//         let data = await getData(false)
//         console.log('data line 64',data)
//         let data1 = await getData(false)
//         console.log('data line 66',data1)

//     } catch (error) {
//         console.log('error',error)

//     }


// }

// fetchData()

// console.log('setleah set timout')

// setInterval
// let detik = 0
// // let timer
// let timer= setInterval(()=>{
//     detik++
//     console.log('jalan ke '+detik)
//     if(detik == 5){
//         clearInterval(timer)
//     }
// },1000)


const ditengah =(arh)=>{
    let x = 0
    let y = 0
    for (let i = 0; i < arh.length; i++) {
        if(arh[i] === 'kanan'){
            x++
        }else if (arh[i] === 'kiri'){
            x--
        }else if (arh[i] === 'maju'){
            y++
        }else{
            y--
        }
    }
    if(x === 0 && y === 0){
        return true
    }
    return false
}

// console.log(ditengah(['maju','kanan','kiri','mundur','kanan','kanan','kiri','kiri'])) // true

// console.log(ditengah(['maju','kanan','kiri','mundur','kanan','kanan','kiri'])) // false


const coba = (kata) =>{
    let output = ''
    for(let i=0;i<kata.length;i++){
        for(let j=0;j<=i;j++){
            if(j === 0){
                output+=kata[i].toUpperCase()
            }else{
                output+=kata[i].toLowerCase()
            }
        }
        if(i<kata.length-1) output+='-'
    }
    return output
}


// console.log(coba('abcD'))// 'A-Bb-Ccc-Dddd'



// strong password 

// syarat password
//  harus 6 karakter atau lebih spasi tidak dihitung
// harus punya huruf dan angka

const tesPass = (pass)=>{
    // hilangin dulu spasinya
    // 'abcde f' => [a,b,c,d,e,' ',f] => [a,b,c,d,e,f]
    pass  = pass.split('').filter((val)=>{
        return val !== ' '
    })

    // cara lain untuk hilangin spasi
    // pass = pass.replace(' ','')
    
    // hitung lengthnya
    if(pass.length <6){
        return 'tidak strong karena kurang dari 6'
    }

    let adaHuruf = false
    let adaAngka = false

    let huruf = 'abcdefghijklmnopqrstuvwxyz'
    let angka = '0123456789'
    // cek tiap huruf yang ada di pass ke tiap var huruf
    for(let i = 0 ; i < pass.length;i++){
        if(huruf.includes(pass[i].toLowerCase())){
            adaHuruf = true
        }else if(angka.includes(pass[i])){
            adaAngka = true
        }
    }
    return adaHuruf && adaAngka ? 'strong':'tidak strong'
}

// console.log('1'.toLowerCase())
// // kalo tidak memenuhi salah satunya saja tidak storng
// console.log(tesPass('abcd f')) //tidak strong
// console.log(tesPass('abcdef')) //tidak strong
// console.log(tesPass('123456')) //tidak strong
// console.log(tesPass('1abcde')) // strong

// console.log('Hello world'.includes('elto'))

const includesImitate=(kata,char)=>{
    let output = false
    for(let i=0;i<kata.length;i++){
        if(kata[i] === char){
            output = true
            break
        }
    }
    return output
}


console.log(includesImitate('abcd','e'))// false
console.log(includesImitate('abcd','a'))// true
console.log(includesImitate('abcd','A'))// false







