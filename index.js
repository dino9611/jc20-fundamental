// sorting pr
let data = [
  {
    name: "selda",
    hobby: "tidur",
  },
  {
    name: "fauzi",
    hobby: "menonton",
  },
  {
    name: "arta",
    hobby: "tidur",
  },
];

console.log(data);

const renderData = () => {
  let element = document.getElementById("data");
  // innerHtml untuk memasukkan html ke dalam tag yang dituju
  let output = "";
  data.forEach((val, index) => {
    output += `<tr>
              <td>${index + 1}</td>
              <td>${val.name}</td>
              <td>${val.hobby}</td>
            </tr>`;
  });
  element.innerHTML = output;
};

renderData();

const klikAja = () => {
  console.log("klik aja");
  // get value by tagname
  // console.log(document.getElementsByTagName("input"));
  // let input = document.getElementsByTagName("input")[0].value;

  // get value by name
  // console.log(document.getElementsByName("kata")[0]);
  // let input = document.getElementsByName("kata")[0].value;

  // get value by id
  // let input = document.getElementById("kata").value;
  // console.log("ketikan:", input);

  // radio dan checkbox ada property yang namanya checked
  // let gender;
  // let radio1 = document.getElementsByName("gender")[0];
  // let radio2 = document.getElementsByName("gender")[1];
  // console.log("radio 1", radio1.checked);
  // console.log("radio 2", radio2.checked);
  // if (radio1.checked) {
  //   gender = radio1.value;
  // } else if (radio2.checked) {
  //   gender = radio2.value;
  // }
  // console.log(gender);
  // pake looping
  let gender;
  let radios = document.getElementsByName("gender");

  // looping forEach
  radios.forEach((val) => {
    if (val.checked) {
      gender = val.value;
    }
  });

  // LOOPING Biasa
  // for (let i = 0; i < radios.length; i++) {
  //   if (radios[i].checked) {
  //     gender = radios[i].value;
  //   }
  // }

  // console.log(gender);
  // mengambil value tag select 
  // let hari = document.getElementById('pilihan').value
  // console.log(hari)

  let items = []
  let checkEL = document.getElementsByName('item')
  console.log(checkEL)
  // jika ingin melakukan hal sepeti dibawah
  // koding yang berulang-ulang dan hampir mirip
  // lakukanlah looping
  // if(checkEL[0].checked){
  //   items.push(checkEL[0].value)
  // }
  // if(checkEL[1].checked){
  //   items.push(checkEL[1].value)
  // }
  checkEL.forEach((el)=>{
    if(el.checked){
      items.push(el.value)
    }
  })

  console.log(items)
  if(items.length < 3){
    document.getElementById('output').innerHTML= 'harus tiga dong '
    return
  }
  document.getElementById('output').innerHTML= 'ok'



};
