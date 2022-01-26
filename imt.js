let berat = 67

let tinggi = 1.78

let imt = berat/(tinggi**2)
let kondisi
if(imt<18.5){
    kondisi = 'berat badan kurang'
}else if(imt>=18.5 && imt < 25){
    kondisi = 'ideal'
}else if(imt >=25 && imt <30){
    kondisi = 'berlebih'
}else if(imt >=30 && imt < 40){
    kondisi = 'sangat berlebih'
}else{
    kondisi = 'obesitas'
}

console.log(`berat badan ${berat} kg, dan tinggi ${tinggi} m,
kondisinya adalah ${kondisi}`)