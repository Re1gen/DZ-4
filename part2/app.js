const showJSON = () =>{
    const request = new XMLHttpRequest();
    request.open("GET", "./any.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () =>{
        const data = JSON.parse(request.response)
        console.log(data.massege);
        console.log(data.secondMassege);
    }
}
showJSON()