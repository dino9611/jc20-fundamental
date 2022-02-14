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
    // console.log(kata)
    kata = kata.filter((val)=>val!=='')
    // console.log(kata)
    document.getElementById('kata').innerHTML = `kata: ${kata.length}`
}