let data =[
  {name:"felix",usia:12},
  {name:'dino',usia:20},
  {name:'arta',usia:15}
]

const sortby = (arr,props,urutan)=>{
  
  let newData = arr.sort((a,b)=>{

    if(a[props]>b[props]){
      return urutan ==='desc' ? -1:1
    }
    if(a[props]<b[props]){
      return urutan ==='desc' ? 1:-1
    }
    return 0
  })
  return newData
}

console.log(sortby(data,"name",'desc'))

