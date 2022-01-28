// array digunakan untuk menyimpan data satu atau lebih
// didalam sebuah variable
// syntax array 
// tiap data didalam array di kasih label sesuatu yang disebut index
// index pasti dimulai dari 0,1,2,.. dst
//  tiap value dibatasin dengan "koma" (",")
// let things = ['buku','pena','pensil',]

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])


// let things = ['buku',"pena",'pensil']

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// // ingin mengganti salah satu isi dari array
// things[0] = "laptop"
// // things[5] = 'napkin'
// console.log(things)

// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// console.log(things.length)
// console.log(things[1].length)


// let things = ['buku',"pena",'pensil','baju']
// console.log(things)
// things.push('jacket')
// push dan codingan dibawah sama saja
// things[things.length]= 'jacket'
// console.log(things)

// let data =things.pop()
// console.log(data)
// console.log(things)



// let things = ['buku',"pena",'pensil','baju']
// splice bisa buat edit, nambahin, atau hapus , di index mana saja
// splice(startIndex,berapaYangMauDihapus,dataYang)
// ini contoh untuk menambahkan ditengah

// things.splice(2,0,"kacamata","penggaris")
// contoh hapus ditengah
// things.splice(1,2)
// console.log(things)

// let things = ['buku',"pena",'pensil','baju']

// slice(startINdex, endIndex) endINdex tidak dimasukkan

// let newThings=things.slice(1,3)
// let newThings=things.slice(1)

// console.log('things :',things)
// console.log('newthings',newThings)

// let things = ['buku',"Pena",'pensil','baju']

// things.sort()
// things.reverse()

// console.log(things)
// join menggabungkan array of strings menjadi string
// jika type data didalam tidak ada strign maka akan tetap diubah 
// menjadi string 
let days = ['sunday',"monday",'tuesday','wednesday']
// let days = ['sunday',1,'tuesday','wednesday']
// let days = [1,1,1,1]

// let newDays=days.join(' ')
// console.log(newDays)

// let things = ['baju','celana']
// let fruits = ['pisang','jeruk']
// let animals = ['kucing','anjing']

// let two = things.concat(fruits)
// let three = things.concat(fruits,animals)
// pake cara spread operator
// things = [...things,'tes']
// let three = [...things,...animals,...fruits]
// console.log(three)

// let kata = 'laptop'
// let tes=kata.split('')

// console.log(tes)
// tes = tes.join('')
// console.log(tes)

// let angka =23567
// angka = angka + ''
// angka = angka.split('').reverse().join('')
// angka = Number(angka)

// console.log(angka) //76532

// let things = [
//     ['red pen', 'blue pen'],
//     ['analog clock','digi clock'],
//     ['futsal shoes','badminton shoes']
// ]

// console.log(things[1][1])


// let angka = [[1,2],[1,[56,90],[100,123]],1,[57,23]]

// console.log(angka[1][2][1])


let categories = ['horror','romcom','action','drama', 'thriller']

let output = 'list category film :\n'

for (let i = 0; i < categories.length; i++) {
    output+=`${i+1}. ${categories[i]}\n` ;
}
console.log(output)