const primeNumb = (numb) =>{
    let output = [2,3]
    for(let i = 4; i<=numb;i++){
        let habisDiBagi = 1
        for(let j = 2;j<=i;j++){
            if(i % j === 0){
                habisDiBagi++
            }
            if(habisDiBagi > 2){
                break
            }
        }
        if(habisDiBagi ===2){
            output.push(i)
        }
        
    }
    return output
}

// console.log(primeNumb(50))
// console.log(primeNumb(100))

let database = [
    {id:1,username:'aqill77',password:'123abc'},
    {id:2,username:'rio007',password:'strong09'}
]


const signIn = (data)=>{
    let {username,password} = data
    let filterData = database.filter((val)=>{
        return val.username === username && val.password === password
    })

    // misalkan ada password dan username yang sama maka 
    // arr barunya ada isinya
    // kalo tidak ada yang sama arr barunya isinya kosong
    return Boolean(filterData.length)
    // return filterData.length > 0 ? true :false
}

// console.log(signIn({username:'aqill77',password:'123abc'}) ) //true
// console.log( signIn({username:'tes',password:'123abc'})) //false


const signUp = (data)=>{
    let {username,password} = data
    // cek username telah digunakan atau tidak
    let filterData = database.filter((val)=>{
        return val.username === username 
    })
    if(filterData.length > 0){
        return 'username telah digunakan'
    }else{
        let idNew = database.length+1
        // data = {...data,id:idNew}
        data.id = idNew
        database.push(data)
        return 'masuk'
    }
}


// console.log(signUp({username:'aqill77',password:'sembarang'}) ) //'username telah terdaftar'
// console.log(signUp({username:'tes',password:'123abc'})) //'masuk'

// console.log(database)