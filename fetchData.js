const fetchData =(callBack)=>{
return callBack("Hi Zeeshan")
}



//function for promise
const fetchDataPromis = ()=>{
return new Promise((resolve,reject)=>{
resolve("Hi Tanveer")
})
}

// function for async function
const fetchDataAscync =()=>{
return new Promise((resolve,reject)=>{
resolve("done")
})
}

module.exports ={fetchData ,fetchDataPromis, fetchDataAscync }
