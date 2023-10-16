const findLargeNum=(array)=>{
    let large=array[0]
    for(let i=0;i<array.length;i++){
      
      if(large<array[i]){large=array[i]}
    } return document.getElementById("demo").innerHTML=large
  }
  