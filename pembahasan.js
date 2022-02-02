const converOneDigitWithZero = (angka) => {
  angka = String(angka);
  if (angka.length < 2) {
    return "0" + angka;
  }
  return angka;
};

let today = new Date();
let indexBulan = today.getMonth();
let tahun = today.getFullYear();

let indexHari = today.getDay();
let tanggal = today.getDate();
let jam = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();

let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let bulans = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "December",
];

console.log(
  `Hari ini hari ${days[indexHari]}, ${converOneDigitWithZero(tanggal)} ${
    bulans[indexBulan]
  } ${tahun}, Pukul ${converOneDigitWithZero(jam)}:${converOneDigitWithZero(
    minute
  )}:${converOneDigitWithZero(seconds)}`
);
