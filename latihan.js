const hitungKomen = ()=>{
    let komentar =document.getElementById('komentar').value
    // banyak kata bisa didapetin dari length
    document.getElementById('batas').innerHTML = `char :${komentar.length}/200`
    if(komentar.length > 200 || komentar.length == 0){
        document.getElementsByTagName('button')[0].disabled = true
    }else{
        document.getElementsByTagName('button')[0].disabled = false
    }
    let kata = komentar.split(' ')
    let kalimat = komentar.split('.')
    // console.log(kata)
    kata = kata.filter((val)=>val!=='')
    kalimat= kalimat.filter((val)=>val!=='')
    console.log(kalimat)
    // console.log(kata)
    document.getElementById('kata').innerHTML = `kata: ${kata.length}`
    document.getElementById('kalimat').innerHTML = `kalimat: ${kalimat.length}`
}

function addKomen(){
    let komentar =document.getElementById('komentar').value
    let output = document.getElementById('output')
    if(komentar.length >20){
        output.innerHTML = `${komentar.slice(0,20)}...<span onclick="tes()">readmore</span>` 
    }else{
        output.innerHTML = `${komentar}`
    }
}

function tes(){
    console.log('tes')
}