async function load(){

    var api = "json/products.json";
    

    let response = await fetch(api);
    let data = await response.json();

    console.log(data);
    

    document.getElementById("slider1img").src = data["NC15757"]["ImageURL"];
    // document.getElementById("bodyInfo").innerHTML += data + "";

    return data;
    
}