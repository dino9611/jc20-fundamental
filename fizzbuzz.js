let angka=20

for(let i=1;i<=angka;i++){
    if((i %5 ===0) && (i%3 === 0)){
        console.log('fizzbuzz')
    }else if(i % 3 === 0 ){
        console.log('fizz')
    }else if(i %5 === 0){
        console.log('buzz')
    }else{
        console.log(i)
    }
}