// palindrome
const palindrome = (input)=>{
    // input string dijadikan array 
    // perlu inputan lama jadinya array disimpan ke variable baru
    let inputBaru = input.split('')
    // array di reverse lalu di join
    inputBaru = inputBaru.reverse().join('')

    // jika inputBaru sama dengan input maka return 
    // true
    if(inputBaru.toLowerCase() === input.toLowerCase()){
        return true
    }else{
        return false
    }
}



console.log(palindrome('malam'))//true
console.log(palindrome('katak'))//true
console.log(palindrome('dino'))//false
console.log(palindrome('Kasur rusak'))//false


const reverseWord =(kalimat)=>{
    // kalimat di split berdasarkan spasi
    // kalimat = 'Hai Aku Joan Miranda'
    kalimat = kalimat.split(' ')
    // kalimat = ['Hai','Aku','Joan','Miranda']
    
    // mapping untuk membalik tiap kata
    kalimat = kalimat.map((val)=>{
        // tiap kata di split lalu direverse dan dijoin kembali
        return val.split('').reverse().join('')
    })
    // kalimat = ['iaH','ukA','naoJ','adnariM']
    kalimat = kalimat.join(' ')
    return kalimat
}

// console.log(reverseWord('Hai aku Joan Miranda'))
// console.log(reverseWord('Hai aku Joan Miranda'))


const mapDuplicate =(arr,cb)=>{
 let newArr = []

 for (let i = 0; i < arr.length; i++) {
     newArr.push(cb(arr[i],i,arr))
 }
 return newArr  
}

const filterDuplicate=(arr,cb)=>{
    let newArr = []
    //  kerjain dari sini
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
    }
    
    return newArr
}



const kali2 = (val)=>val*2

const ganjil = (val)=>{
    return val % 2 === 1
}

console.log(mapDuplicate([1,2,3,4,5],kali2)) // [2,4,6,8,10]
console.log(filterDuplicate([1,2,3,4,5],ganjil)) // [1,3,5]