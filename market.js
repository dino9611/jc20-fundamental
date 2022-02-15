// Init value
let arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

let indexDel = -1
let indexEd = -1
let carts = [ ]
  
// init value
let arrCategory = ["Fast Food", "Electronic", "Cloth", "Fruit"];

// Reset form filter
const fnResetFilter = () => {
    let arrInputTag = document.getElementsByName("txtFilter")
    for (const input of arrInputTag) {
      input.value = ""
    }
    document.getElementById("catFilter").value=''
    fnRenderList(arrProduct)
}   

const convertCurrency = (numb)=>{
    const formatter = new Intl.NumberFormat('id-ID',{
        style:'currency',
        currency:'IDR',

    })
    return formatter.format(numb) 
}

  
  // render list
const initRender = () => {  
    let output1 = `<option value="">All</option>`
    let output2 = `<option value="" hidden selected>pilih Pekerjaan</option>`

    arrCategory.forEach((val)=>{
        output1+=`<option value="${val}">${val}</option>`
        output2+=`<option value="${val}">${val}</option>`
    })
    // setelah output jadi masukkan ke dalam element yang dituju

    document.getElementById("catFilter").innerHTML = output1;
    document.getElementById("catInput").innerHTML = output2;
};

function generateDefaultCat (category){
    let output = arrCategory.map((val)=>{
        if(val === category){
            return `<option value="${val}" selected>${val}</option>`
        }
        return `<option value="${val}" >${val}</option>`
    })

    return output.join('')
}

const fnRenderList = (data) => {
    // mapping array of product
    let listProduct = data.map((val,index) => {
      // val = {name, price, stock}
      if(index === indexDel){
        return (
            `
            <tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${convertCurrency(val.price) }</td>
                <td>${val.stock}</td>
                <td>  
                    <button onclick="productsBuy(${index})" disabled>buy</button>
                </td>
                <td>
                  <button onclick="yesDelete()">Yes</button>
                  <button onclick="cancelDelete()">NO</button>
                </td>
            </tr>
            `
        )
      }else if(index === indexEd){
        return (
            `
            <tr>
                <td>${val.id}</td>
                <td>
                    <select id="categoryEdit">
                        ${generateDefaultCat(val.category)}
                    </select>
                </td>
                <td><input type="text" value="${val.name}"  id="nameEdit"> </td>
                <td><input type="number" value="${val.price}"  id="priceEdit"></td>
                <td><input type="number" value="${val.stock}"  id="stockEdit"> </td>
                <td>  
                    <button onclick="productsBuy(${index})" disabled>buy</button>
                </td>
                <td>
                  <button>Save</button>
                  <button onclick="cancelEdit()">Cancel</button>
                </td>
            </tr>
            `
        )
      }
      return (
          `
          <tr>
              <td>${val.id}</td>
              <td>${val.category}</td>
              <td>${val.name}</td>
              <td>${convertCurrency(val.price)}</td>
              <td>${val.stock}</td>
              <td> 
                <button onclick="productsBuy(${index})" >buy</button>
              </td>
              <td>
                <button onclick="confEdit(${index})" >Edit</button>
                <button onclick="confDelete(${index})">Delete</button>
              </td>
          </tr>
          `
      )
    });
  
    // Render list
    document.getElementById("render").innerHTML = listProduct.join("");
}

const renderCarts = ()=>{
    let cartsEl = document.getElementById('carts')
    let output = carts.map((val,index)=>{
        return `<tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${convertCurrency(val.price)}</td>
                    <td>
                        <button onclick="onDeleteCart(${index})">Delete</button>
                    </td>
                </tr>`
    })

    cartsEl.innerHTML = output.join('')
    let paysEl = document.getElementById('pay-container')
    if(carts.length){
        paysEl.innerHTML = `<button onclick="payment()">Pay</button>`
    }else{
        paysEl.innerHTML = ``
    }
}

initRender()
fnRenderList(arrProduct)
renderCarts()
  
  // input data
const fnInputData = () => {
    // Get data from html
    let name = document.getElementById("nameInput").value;
    let price = document.getElementById("priceInput").value;
    let category = document.getElementById("catInput").value;
    let stock = document.getElementById("stockInput").value;
    // create date instance
    let time = new Date()
  
    // Push new object data
    arrProduct.push({
      id: time.getTime(),
      name: name,
      price: price,
      category: category,
      stock : stock
    });
  
    // Clean all text box
    document.getElementById("nameInput").value = '';
    document.getElementById("priceInput").value = '';
    document.getElementById("catInput").value = '';
    document.getElementById("stockInput").value = '';
  
    // show the list
    fnRenderList(arrProduct);
};
  
// filter name
const fnFilterName = () => {
    // Get data from user
    let keyword = document.getElementById("nameFilter").value;
  
    // Filtering
    let filterResult = arrProduct.filter((val)=>{
        // kalo koosng string kosong /false value
        if(!keyword){ 
            // jika input kosong maka render semua data
            return true
            // jika return callback true maka valnya akan dimasukkan kedalam array baru
        } 
        return val.name.toLowerCase().includes(keyword.toLowerCase())
    })
    
    fnRenderList(filterResult)
};

const filter = ()=>{
  let keyword = document.getElementById("nameFilter").value;
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let selectedCategory = document.getElementById("catFilter").value;
  
  let filterResult = arrProduct.filter((val)=>{
    let kondisiName = !keyword ? true: val.name.toLowerCase().includes(keyword.toLowerCase())
    let kondisiMin = !min ? true : val.price >= min  
    let kondisiMax = !max && max == '' ? true : val.price <= max
    let kondisiCat = !selectedCategory ? true : val.category === selectedCategory
      return kondisiName && kondisiMin && kondisiMax && kondisiCat
  })

  fnRenderList(filterResult)
}
  
// filter price
const fnFilterPrice = () => {
    // get min value
    let min = document.getElementById("min").value;
    // get max value
    let max = document.getElementById("max").value;
  
    let filterResult = arrProduct.filter((val)=>{
       
        let kondisiMin = !min ? true : val.price >= min  
       
        let kondisiMax = !max && max == '' ? true : val.price <= max
       
        return kondisiMin && kondisiMax

    })
  
    fnRenderList(filterResult)
  
};
  
  // filter category
const fnFilterCategory = () => {
    // get value from category list
    let selectedCategory = document.getElementById("catFilter").value;
 
    let filterResult = arrProduct.filter((val)=>{
        // kalo koosng string kosong /false value
        if(!selectedCategory){ 
            // jika input kosong maka render semua data
            return true
            // jika return callback true maka valnya akan dimasukkan kedalam array baru
        } 
        return val.category === selectedCategory
    })
  
    fnRenderList(filterResult)
};

const confDelete = (index)=>{
    indexDel = index
    fnRenderList(arrProduct)
}

const cancelDelete = ()=>{
    indexDel = -1
    fnRenderList(arrProduct)
}

const confEdit = (index)=>{
    indexEd = index
    fnRenderList(arrProduct)
}

const cancelEdit = ()=>{
    indexEd = -1
    fnRenderList(arrProduct)
}

const yesDelete=()=>{
    arrProduct.splice(indexDel,1)
    indexDel = -1
    fnRenderList(arrProduct)
}

// buy feature 
const productsBuy = (index)=>{
 
    carts.push(arrProduct[index])
    renderCarts()
}


const onDeleteCart=(index)=>{
    carts.splice(index,1)
    renderCarts()
}

const payment =()=>{
    let strukEl = document.getElementById('struk')
    let subTotalEl = document.getElementById('subtotal')
    let ppnEL = document.getElementById('ppn')
    let totalEL = document.getElementById('total')

    let strukOutput = carts.map((val)=>{
        return `${val.id} | ${val.category} | ${val.name} | ${convertCurrency(val.price)}<br/><br/>`
    })
    strukEl.innerHTML = strukOutput.join('')

    // let total = 0
    // carts.forEach((val)=>{
    //     total+=val.price
    // })
    // cara lain menggunakan reduce
    let subTotal = carts.reduce((prevVal,currval)=>{
        return prevVal +currval.price
    },0)
    
    let ppn = subTotal*0.1
    let grandTotal = subTotal+ppn

    subTotalEl.innerHTML = `SubTotal ${convertCurrency(subTotal)}` 
    ppnEL.innerHTML = `PPN ${convertCurrency(ppn)}`
    totalEL.innerHTML=`Grand Total ${convertCurrency(grandTotal)}`
}
