document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then
function makerequest(e) {
    e.preventDefault()
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    console.log("Button Clicked")
    const config = {
        method: 'POST',
        url: 'https://crudcrud.com/api/bd9f17f30c804bf18ef462bcfba91ef6/newdata',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name: `${name}`, job: `${job}` })
    }
    axios(config).then((res) => {
        // console.log(res)
        console.log("Data:", res.data)
        let add = document.querySelector(".add");
        add.innerHTML+=` 
        <div> ID: ${ res.data._id }</div>
        <div>Title: ${res.data.name}</div>
        <div>Body: ${res.data.job}</div> <hr>
        `
    }).catch((error) => {
  console.log(error)
 })
}
