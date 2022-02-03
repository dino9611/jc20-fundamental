let props = "andhika";
const selda = (param) => {
  if (param === "bob") {
    return () => {
      return {
        ampuh: {
          andhika: [
            {
              arta: "berhasil",
            },
          ],
        },
      };
    };
  } else {
    return "error";
  }
};

// console.log(selda("bob")().ampuh[props][0].arta); // berhasil

let docs = {
  getNilai() {
    return [
      ,
      {
        value: "berhasil",
      },
    ];
  },
};
console.log(docs.getNilai()[1].value); //berhasil

let ampuh = [
  [
    ,
    {
      andika: {
        arta: () => {
          return () => {
            return "fauzi";
          };
        },
      },
    },
  ],
];

console.log(ampuh[0][1]["andika"].arta()()); // fauzi
