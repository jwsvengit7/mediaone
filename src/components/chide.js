

fetch("http://localhost:8080/api/v1/bank/getName?bankName=Access%20Bank&accountNumber=0794940296",{
    type:"GET"
})
.then(res =>res.json())
.then((data)=>{
    console.log(data[0].data.account_name)
})

fetch("http://localhost:8080/api/v1/bank/get_banks",{
    type:"GET"
})
.then(res =>res.json())
.then((data)=>{

for(let i of data){
    console.log(i.name)
}
})

// fetch("http://localhost:8080/api/v1/bank/create-account", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     bankName: "Access Bank",
//     accountNumber: "0794940296",
//     accountName: "string"
//   })
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });
