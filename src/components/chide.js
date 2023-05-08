fetch("http://localhost:8080/api/v1/users/allUsers")
.then(res =>res.json())
.then((data)=>{
    console.log(data)
})