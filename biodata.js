let data = [
    {nama: 'Alex', usia: 22, pekerjaan:'Dev'}, 
    {nama: 'Alicia', usia: 32, pekerjaan:'Dev'}, 
    {nama: 'Alona', usia: 26, pekerjaan:'Dev'}, 
    {nama: 'Batios', usia: 33, pekerjaan:'CEO'}, 
    {nama: 'Bakhti', usia: 38, pekerjaan:'PM'}, 
    {nama: 'Charlee', usia: 27, pekerjaan:'CTO'}, 
]
let jobs = ['Dev','CEO','PM','CTO','DevOps']



const initialRender = () =>{
    let output1 = `<option value="">All</option>`
    let output2 = `<option value="" hidden selected>pilih Pekerjaan</option>`

    jobs.forEach((val)=>{
        output1+=`<option value="${val}">${val}</option>`
        output2+=`<option value="${val}">${val}</option>`
    })
    // setelah output jadi masukkan ke dalam element yang dituju

    document.getElementById('pekerjaanFilter').innerHTML = output1
    document.getElementById('inputPekerjaan').innerHTML = output2
} 

const renderData = (arr)=>{
    let el = document.getElementById('data')
    let output = arr.map((val,index)=>{
        return `
        <tr>
            <td>${index+1}</td>
            <td>${val.nama}</td>
            <td>${val.usia}</td>
            <td>${val.pekerjaan}</td>
        </tr>
        `
    })
    el.innerHTML = output.join('')
}

initialRender()
renderData(data)

const filterByName = ()=>{
    // console.log('tes')
    // jika tidak kosong maka lakukan filter data berdasarkan input diketik user
    // ambil apa yang diketik user dahulu
    let namaFilter = document.getElementById('namaFilter').value

    // let newFilterData = data.filter((val)=>{
    //     // kalo koosng string kosong /false value
    //     if(!namaFilter){ 
    //         // jika input kosong maka render semua data
    //         return true
    //         // jika return callback true maka valnya akan dimasukkan kedalam array baru
    //     } 
    //     return val.nama.toLowerCase().includes(namaFilter.toLowerCase())
    // })

    if(!namaFilter){
        renderData(data)
    }else{
        let newFilterData = data.filter((val)=>{
            // kalo koosng string kosong /false value
            return val.nama.toLowerCase().includes(namaFilter.toLowerCase())
        })
        renderData(newFilterData)
    }
}

const filterByUsia =()=>{
    let usiaMin = document.getElementById('usiaMinFilter').value
    let usiaMax = document.getElementById('usiaMaxFilter').value
    
    // if(!usiaMin){
    //     // kalo usia min string kosong
    //     usiaMin = 0
    // }
    let newFilterData = data.filter((val)=>{
        // kalo kosong string kosong /false value
        // return val.usia >= usiaMin && val.usia <= usiaMax
        let kondisiMin = !usiaMin ? true : val.usia >= usiaMin  
        // if(!usiaMin){
        //     kondisiMin =true
        // }else{
            // kondisiMin = val.usia >= usiaMin  
        // }
        let kondisiMax = !usiaMax && usiaMax == '' ? true : val.usia <= usiaMax
        // if(!usiaMax && usiaMax !=0){
        //     kondisiMax = true
        // }else{
        //     kondisiMax = val.usia <= usiaMax
        // }
        return kondisiMin && kondisiMax
        // return true && val.usia <= usiaMax
        // return val.usia >= usiaMin && true
    })
   
    renderData(newFilterData)
}

const filterByPekerjaan = () =>{
    let pekerjaanFilter = document.getElementById('pekerjaanFilter').value

    let newFilterData = data.filter((val)=>{
        // kalo koosng string kosong /false value
        if(!pekerjaanFilter){ 
            // jika input kosong maka render semua data
            return true
            // jika return callback true maka valnya akan dimasukkan kedalam array baru
        } 
        return val.pekerjaan === pekerjaanFilter
    })
    renderData(newFilterData)
}

const clearFilter =()=>{
    // hapus semua value yang ada diinput balikan seperti semula
    // renderdata seprti diawal
    document.getElementById('pekerjaanFilter').value = ''
    document.getElementById('usiaMinFilter').value = ''
    document.getElementById('usiaMaxFilter').value = ''
    document.getElementById('namaFilter').value =''
    renderData(data)
}