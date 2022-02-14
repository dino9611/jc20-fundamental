let a = 1
let b = 2

// console.log('a',a)
// console.log('b',b)

// coba dituker hasilnya
// let temp = a
// a = b
// b = temp

// console.log('a',a)
// console.log('b',b)

// bubble sort 

// let arrNumb = [2,3,56,89,12,1]

// 1. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 2. 3 > 56 -> false maka tidak dituker/tetap posisinya
// 3. 56 > 89 -> false maka tidak dituker/tetap posisinya
// 4. 89 > 12 -> true maka angka dituker
// contoh tukar
// let temp = arr[3]
// arr[3] = arr[3+1]
// arr[3+1] =temp
// 5. 89 > 1 -> true maka angka dituker
// [2,3,56,12,1,89]

// 6. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 7. 3 > 56 -> false maka tidak dituker/tetap posisinya
// 8. 56 > 12 -> true maka angka dituker
// [2,3,12,56,1,89]
// 9. 56 > 1 -> true maka angka dituker
// [2,3,12,1,56,89]
// 10. 56 > 89 maka tidak dituker/tetap posisinya

// 11. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 12. 3 > 12 -> false maka tidak dituker/tetap posisinya
// 13. 12 > 1 -> true maka angka dituker
// [2,3,1,12,56,89]
// 14. 12 > 56 -> false maka tidak dituker/tetap posisinya
// 15. 56 > 89 -> false maka tidak dituker/tetap posisinya

// 16. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 17. 3 > 1 -> true maka angka dituker
// [2,1,3,12,56,89]
// 18. 3 > 12 -> false maka tidak dituker/tetap posisinya
// 19. 12 > 56 -> false maka tidak dituker/tetap posisinya
// 20. 56 > 89 -> false maka tidak dituker/tetap posisinya

// 21. 2 > 1 -> true maka angka dituker
// [1,2,3,12,56,89]
// 22. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 23. 3 > 12 -> false maka tidak dituker/tetap posisinya
// 24. 12 > 56 -> false maka tidak dituker/tetap posisinya
// 25. 56 > 89 -> false maka tidak dituker/tetap posisinya

// 26. 1 > 2 -> false maka tidak dituker/tetap posisinya
// 27. 2 > 3 -> false maka tidak dituker/tetap posisinya
// 28. 3 > 12 -> false maka tidak dituker/tetap posisinya
// 29. 12 > 56 -> false maka tidak dituker/tetap posisinya
// 30. 56 > 89 -> false maka tidak dituker/tetap posisinya

function bubbleSort(arr=[]){
    let output = arr
    for(let i = 0;i<output.length;i++){
        let sorted = false
        for(let j=0;j<output.length-1;j++){
            if(output[j] > output[j+1]){
                let temp = output[j]
                output[j] = output[j+1]
                output[j+1] =temp
                sorted =true
            }
        }
        if(!sorted){
            break
        }
    }
    return output
}
let arrNumb = [2,3,56,89,12,1]


// console.log(bubbleSort(arrNumb))

let arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

function bubbleSortbyProperty(arr=[],prop,urutan){
    let output = arr
    for(let i = 0;i<output.length;i++){
        // optimation
        let isSwap = false
        for(let j=0;j<output.length-1;j++){
            let condition
            if(urutan === 'desc'){
               condition= output[j][prop] < output[j+1][prop]
            }else{
               condition= output[j][prop] > output[j+1][prop]
            }
            if(condition){
                let temp = output[j]
                output[j] = output[j+1]
                output[j+1] =temp
                isSwap = true
            }
        
        }
        if(!isSwap){
            break
        }
    }
    return output
}

// console.log(bubbleSortbyProperty(arrProduct,'category','asc'))
// console.log(bubbleSortbyProperty(arrProduct,'name','desc'))
// console.log(bubbleSortbyProperty(arrProduct,'price','desc'))

const cariIndex =(arr,keyword)=>{
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]=== keyword){
            return i
        }
    }
    return -1
}



// console.log(cariIndex([15,5,6,89,90,13],5)) // 1
// console.log(cariIndex([15,5,6,89,90,13],13)) // 5
// console.log(cariIndex([15,5,6,89,90,13],16)) // -1

// ada siput didalem sumur sumurnya sedalam 10m
// dalam sehari siput bisa naik 3 meter dan turun 2 meter
// hari keberaapa dia bisa keluar dari sumur 

const siputDiSumur = (sumur,naik,turun)=>{
    let awal = 0
    let hari = 0
    while (true) {
        awal += naik
        hari ++
        if(awal >=sumur){
            return hari 
        }
        awal -= turun
    }
    
}

// console.log(siputDiSumur(10,3,2))
// sebuah kota memiliki 10e4 penduduk setiap tahun bertambah 10%
// berapa jumlah penduduk setelah 5 tahun

const jumlahPenduduk = (awalPend,tahun,persen)=>{
    for(let i =0 ;i<tahun;i++){
        awalPend += (awalPend * (persen/100))
    }
    return awalPend
}

// console.log(jumlahPenduduk(10e4,5,10))

// let dhika = {
//     aqil:()=>{
//        return [
//             [,
//                 ()=>{
//                     return {arta:'daniel'}
//                 }
//             ]
//         ]
//     }
// }


// console.log(dhika.aqil()[0][1]().arta) // daniel

const ampuh = ()=>{
    return ()=>{
        return{
            dhika:{
                felix:[
                    ()=>{
                        return {
                            fauzi:'dika'
                        }
                    }
                ]
            }
        }
    }
}
// console.log(ampuh()()['dhika'].felix[0]().fauzi) // 'dika'

const dhika ={
    felix:[
        ,[
            {
                fauzi:()=>({
                    selda:'aqil'
                })
                
            }
        ]
    ]
}

// console.log(dhika['felix'][1][0].fauzi().selda)


let selda = [
    ,()=>{
        return {
            felix:{
                arta:()=>{
                    return ()=>{
                        return {
                            dika:'aqil'
                        }
                    }
                }
            }
        }
    }
]


console.log(selda[1]()['felix'].arta()().dika) // aqil

