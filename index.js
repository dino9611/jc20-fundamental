// setTimeout dan setInterval


// for (let index = 0; index < 10e8; index++) {
    
// }
// console.log('jalan setelah 1 detik')
const fungsiku = ()=>{
    console.log('jalan setelah 1 detik')
}

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



console.log('setleah set timout')
