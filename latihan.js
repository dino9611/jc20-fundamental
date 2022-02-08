let data = [
    {kegiatan:'berenang',image:'https://d1bpj0tv6vfxyp.cloudfront.net/berenangdikolamrenangtingkatkanrisikopanuhalodoc.jpg',hari:'Senin'},
    {kegiatan:'kondangan',image:'https://milenialis.id/wp-content/uploads/2020/08/pentingnya-datang-kondangan.jpg',hari:'Selasa'},
]
let indexDel = -1
let indexEd = -1

let days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']

const renderDays =(selectedDays) =>{
    // returnnya type datanya string
    return days.map((val)=>{
        if(val === selectedDays){
            return ` <option value="${val}" selected>${val}</option>`
        }
        return `<option value="${val}" >${val}</option>`
    }).join('')
}


// CRUD 
// Create ,Read , Update, dan Delete

const renderData = () =>{
    let output = ''
    data.forEach((val,index)=>{
        if(index == indexDel){
            output += `
            <tr>
                <td>${index+1}</td>
                <td>${val.kegiatan}</td>
                <td><img height="100px" src="${val.image}" alt="${val.kegiatan}"></td>
                <td>${val.hari}</td>
                <td>
                    <button onclick="confDel()">Yes</button>
                    <button onclick="cancelDel()">No</button>
                </td>
            </tr>    `
        }else if(index == indexEd){
            output += `
            <tr>
                <td>${index+1}</td>
                <td><input value="${val.kegiatan}" type="text"  placeholder="kegiatan" id="aktivitasEd"></td>
                <td><input value="${val.image}" type="text" placeholder="link gambar" id="gambarEd"</td>
                <td>
                <select id="hariEd">
                    ${renderDays(val.hari)}
                </select>
                </td>
                <td>
                    <button onclick="saveEd()">Save</button>
                    <button onclick="cancelEd()">Cancel</button>
                </td>
            </tr>    `
        }else{
            output+=`
            <tr>
                <td>${index+1}</td>
                <td>${val.kegiatan}</td>
                <td><img height="100px" src="${val.image}" alt="${val.kegiatan}"></td>
                <td>${val.hari}</td>
                <td>
                    <button onclick="edData(${index})">Edit</button>
                    <button onclick="delData(${index})">Delete</button>
                </td>
            </tr>    `
        }
    })
    // console.log(output)
    document.getElementById('kegiatan').innerHTML = output
}

const addData = () =>{
    // get data from element
    let aktivitas = document.getElementById('aktivitas').value
    let gambar = document.getElementById('gambar').value
    let hari = document.getElementById('hari').value
    // push data to variable data
    data.push({kegiatan:aktivitas,image:gambar,hari})
    // re render untuk update tampilan baru
    renderData()
    document.getElementById('aktivitas').value = ''
    document.getElementById('gambar').value=''
    document.getElementById('hari').value=''
}

renderData()

const delData = (ind)=>{
    // indexDel diubah isinya menjadi ind yang di kklik
    indexDel = ind
    // re render tampilan
    renderData()
}

const cancelDel = ()=>{
    // indexDEl jadi -1 lagi
    indexDel = -1
    // re render tampilan
    renderData()
}

const edData = (i)=>{
    indexEd = i

    // re render tampilan
    renderData()
}

const cancelEd = ()=>{
    indexEd = -1

    // re render tampilan
    renderData()
}

const confDel=()=>{
    // index sudah ada di index del
    data.splice(indexDel,1)
    indexDel =-1
    renderData()
} 

const saveEd =()=>{
    // get value from element
    let aktivitasEd = document.getElementById('aktivitasEd').value
    let gambarEd = document.getElementById('gambarEd').value
    let hariEd = document.getElementById('hariEd').value
    // edit object
    data.splice(indexEd,1,{kegiatan:aktivitasEd,image:gambarEd,hari:hariEd})
   
    indexEd = -1
    renderData()
}