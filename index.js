const jadiinString=(arr,page)=>{
    let output = arr
    let ind = output.indexOf(page)
    output[ind] = output[ind]+ ''
    return output
}

const pages = (currPage,maxPage)=>{
    let output
    if(currPage <= 5){
        output = [1,2,3,4,5,6,7]
        // let ind = output.indexOf(currPage)
        // output[ind] = output[ind]+ ''
        return jadiinString(output,currPage)
    }else{
        if(maxPage-2 < currPage){
            output = Array(5)
             console.log(output) // [,,,,,]
            // for(let i = maxPage-4;i<=maxPage;i++){
            //     output.push(i)
            // }
            for (let i = 0; i < output.length; i++) {
                output[i] = maxPage-4 +i
            }
        }else{
            output = []
            for(let i = currPage-2;i<=currPage+2;i++){
                output.push(i)
            }
        }

        // let ind = output.indexOf(currPage)
        // output[ind] = output[ind]+ ''
        return jadiinString(output,currPage)
    }
}

// console.log(pages(5,20))// [1,2,3,4,'5',6,7]
// console.log(pages(6,20))// [4,5,"6",7,8]console.log(pages(7))// [4,5,"6",7,8]
//  console.log(pages(20,21))
// 19 [16,17,18,19,'20']

const bangkuBioskop =(row,col)=>{
    let huruf='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let output = []
    for (let i = 0; i < row; i++) {
        let baris =[]
        for(let j=0;j<col;j++){
            baris.push(`${huruf[i]}${j+1}`)
        }
        output.push(baris)
    }
    return output
}

// console.log(bangkuBioskop(10,10)) // [[A1,A2,A3,A],[B1],...[J1]]

const booking = (listBook)=>{
    let bangku = bangkuBioskop(12,12)
    for(let i=0;i<listBook.length;i++){
        let {row,col} = listBook[i]
        bangku[row][col] = true
    }
    return bangku
}

console.log(booking([{row:0,col:4},{row:9,col:9}]))












