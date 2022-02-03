// object

// const manusia1 = {
//   fullName: "martinelli",
//   nationality: "italy",
//   age: 20,
//   //   array
//   hobbies: ["fishing", "lying"],
//   sentence: () => {
//     console.log("running");
//   },
//   account: {
//     username: "martiNelli9",
//     password: "stronger",
//   },
//   //   sentence() {
//   //     console.log("running");
//   //   },
//   //   sentence: function () {
//   //     console.log("running");
//   //   },
// };

// console.log(String(20));

// nama function tes
// langsung return true
// const tes = () => true;

// console.log(typeof tes);

//? value dari object boleh type data apapun bahkan type data object pun boleh ,
//? dan function juga boleh
//? object

// //? ini namanya object lateral
// let person1 = {
//   fullName: "martinelli",
//   nationality: "italy",
//   age: 20,
//   //   array
//   hobbies: ["fishing", "lying"],
//   sentence: () => {
//     console.log("running");
//   },
//   account: {
//     username: "martiNelli9",
//     password: "stronger",
//   },
//   //   sentence() {
//   //     console.log("running");
//   //   },
//   //   sentence: function () {
//   //     console.log("running");
//   //   },
// };
// cara memanggil value dari sebuah obejct
// console.log(person1);
// console.log(person1.fullName); //cara pertama
// console.log("cara kedua", person1["fullName"]); // cara kedua
// console.log(person1.hobbies[0]);
// console.log(person1["hobbies"][0]);
// console.log(person1.account.username);
// person1.sentence();

// console.log(person1);

// let prop = "fullName";
// console.log(person1[prop]);
// console.log(person1.prop);

// cara pertama
// person1.fullName = "josh";
// //! dominantFoot akan menjadi props baru karena property dominantfoot belum ada
// person1.dominantFoot = "right";

// cara kedua dengan spread operator
// person1 = { ...person1, fullName: "josh", dominantFoot: "right" };

// console.log(person1);

// console.log(person1.fullName);

// let manusia2 = new Object();

// manusia2.fullName = "pele";
// manusia2.dominantFoot = "left";

// console.log(manusia2);
// this keyword
// console.log(this);

//? ini namanya object lateral
let person1 = {
  fullName: "martinelli",
  nationality: "italy",
  age: 30,
  retired() {
    return this.age * 2;
  },
  //   array
  hobbies: ["fishing", "lying"],
  sentence: () => {
    console.log("running");
  },
  account: {
    username: "martiNelli9",
    password: "stronger",
  },
  //   sentence() {
  //     console.log("running");
  //   },
  //   sentence: function () {
  //     console.log("running");
  //   },
};

// console.log(person1.retired());
// console.log(this);
// let categories = ["cepat saji", "pakaian", "elektronik", "buah"];
// let product ={
//   name: "noodle",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
// }
// let cepatSaji1 = {
//   name: "noodle",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
//   expired: 2020,
// };
// let pakaian1 = {
//   name: "baju",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
//   size: "xl",
// };

class Manusia {
  constructor(name, birthDate, nationality) {
    this.name = name;
    this.birthDate = birthDate;
    this.nationality = nationality;
  }

  suaraLahir = () => {
    console.log("nangis");
  };
}

let manusia1 = new Manusia("pele", "1950-07-31", "Brazil");
let manusia2 = new Manusia("romarion", "1951-07-01", "Brazil");

class FootBallPlayer extends Manusia {
  constructor(name, birthDate, nationality, dominantFoot) {
    super(name, birthDate, nationality);
    this.dominantFoot = dominantFoot;
  }

  shooting = () => {
    console.log("goalll");
  };
}

class Artist extends Manusia {
  constructor(name, birthDate, nationality, artistType) {
    super(name, birthDate, nationality);
    this.artistType = artistType;
  }

  work = () => {
    console.log("ada aja");
  };
}
let FootBallPlayer1 = new FootBallPlayer(
  "pele",
  "1950-07-31",
  "Brazil",
  "left"
);
let penyanyi = new Artist("Isyana", "1990-05-21", "Indonesia", "Singer");
console.log(FootBallPlayer1);
console.log(penyanyi);

// manusia1.suaraLahir();
// console.log(manusia1);

// console.log(manusia2);
