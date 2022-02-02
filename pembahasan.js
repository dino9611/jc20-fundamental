// // palindrome
// const palindrome = (input) => {
//   // input string dijadikan array
//   // perlu inputan lama jadinya array disimpan ke variable baru
//   let inputBaru = input.split("");
//   // array di reverse lalu di join
//   inputBaru = inputBaru.reverse().join("");

//   // jika inputBaru sama dengan input maka return
//   // true
//   if (inputBaru.toLowerCase() === input.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(palindrome("malam")); //true
// console.log(palindrome("katak")); //true
// console.log(palindrome("dino")); //false
// console.log(palindrome("Kasur rusak")); //false

// const reverseWord = (kalimat) => {
//   // kalimat di split berdasarkan spasi
//   // kalimat = 'Hai Aku Joan Miranda'
//   kalimat = kalimat.split(" ");
//   // kalimat = ['Hai','Aku','Joan','Miranda']

//   // mapping untuk membalik tiap kata
//   kalimat = kalimat.map((val) => {
//     // tiap kata di split lalu direverse dan dijoin kembali
//     return val.split("").reverse().join("");
//   });
//   // kalimat = ['iaH','ukA','naoJ','adnariM']
//   kalimat = kalimat.join(" ");
//   return kalimat;
// };

// // console.log(reverseWord('Hai aku Joan Miranda'))
// // console.log(reverseWord('Hai aku Joan Miranda'))

// const mapDuplicate = (arr, cb) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(cb(arr[i], i, arr));
//   }
//   return newArr;
// };

// const filterDuplicate = (arr, cb) => {
//   let newArr = [];
//   //  kerjain dari sini
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const kali2 = (val) => val * 2;

// const ganjil = (val) => {
//   return val % 2 === 1;
// };

// console.log(mapDuplicate([1, 2, 3, 4, 5], kali2)); // [2,4,6,8,10]
// console.log(filterDuplicate([1, 2, 3, 4, 5], ganjil)); // [1,3,5]

// let angka = [1, 2, 3, 2, 5, 2, 7, 2];
// mean
// ? rata2 = total/jumlahData
// make total
// let total = 0;
// angka.forEach((val) => {
//   total += val;
// });
// let mean = total / angka.length;

// console.log(mean);
// median
// alghorithm
// median adalah nilai tengah
// angka diurutkan terlebih dahulu baru dicari nilai tengahya, dari kecil ke besar
// jika jumlah angkanya genap maka 2 angka ditengah ditambah dan dibagi 2
// untuk mendapatkan index ditengah yang pertama arr.length/2 , kedua (arr.length/2) - 1
// kalo ganjil ambil tengahnya saja cara dapetin tengahnya di index Math.floor(arr.length /2)

const median = (arr) => {
  let angkaSorted = arr.sort((a, b) => a - b);
  if (angkaSorted.length % 2 === 0) {
    let angka1 = angkaSorted[angkaSorted.length / 2];
    let angka2 = angkaSorted[angkaSorted.length / 2 - 1];
    let hasil = (angka1 + angka2) / 2;
    return hasil;
    // console.log(hasil);
  } else {
    let hasil = angkaSorted[Math.floor(angkaSorted.length / 2)];
    return hasil;
    // console.log(hasil);
  }
};
// f(x) =2x+1
// f(8) = 17
let angka = [1, 2, 3, 2, 5, 2, 7, 2];

let hasil = median([1, 2, 3, 2, 5, 2, 7, 2]);

// console.log(median(angka));

// modus

// modus itu adalah angka yang sering keluar
// untuk mencari angka yang keluar kita harus urutkan terlebih dahulu dari angka kecil ke besar

// angka yang terbanyak dimodus hanya satu
// pertama pegang angka pertama, lihat berapa angka yang sama ada berapa
// karena belum ada angka terbanyak angak pertama disimpan dulu di kotak angka terbanyak
// n kali adalah berapa n ketemu angka yang sama
// terus ulangi dengan angka selanjutnya
// jika n kali lebih besar dengan n kali sebelumnya maka kotak angka terbanyak akan digantikan dengan
// angka yang memiliki n kali lebih besar

const mode = (arr) => {
  let output;
  //   jumlah sama terbanyak adalah jumlah berapa kali angka yang sama dan terbanyak
  let jumlahSamaTerbanyak = 0;
  for (let i = 0; i < arr.length; i++) {
    // jumlah sama adalah jumlah berapa kali angka pertama ketemu dengan angka yang sama
    let jumlahYangSama = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        //   jika ada angka yang sama maka jumlahyangsama kita tambahkan 1
        jumlahYangSama++;
      }
    }
    if (jumlahYangSama > jumlahSamaTerbanyak) {
      output = arr[i];
      jumlahSamaTerbanyak = jumlahYangSama;
    }
  }
  return output;
};

console.log("modusnya adalah", mode([1, 1, 3, 1, 5, 1, 7, 2]));
