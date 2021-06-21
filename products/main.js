var index = 0;

var api = "../json/fakeProducts.json";
let json_object = {};

var cardCode;

// elemnts number
var titleNumber = 1;
var imgNumber = 1;
var priceNumber = 1;
var partNO_Number = 1;

fetch(api)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    json_object = data;
});

function load(){

    console.log(json_object);

    const count = Object.keys(json_object).length;
    console.log(count);

    for(index = 0; index < count; index++){
        addE();
    }

    putNames();
    putImages();
    putPrices();
    putPartNOs();
}

{
    /* 
    
    <div class="col p-4">
                <div class="card" style="width: 18rem;">
                    <img src="https://cdns.webareacontrol.com/prodimages/470-X-470/8/l/81220161733Latex-Free-Splinting-Material-P.png" class="card-img-top p-1"  width="" height="220">
                    <div class="card-body">
                      <h4 class="card-title">Neoloop Latex Free Splinting Material Sheet</h4>
                      <h5 class="card-title">$17.95</h5>
                      <p class="card-title"> Part No. NC15757</p>
                      <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
    </div>
    
    */
}

function addE(){

    cardCode = `<div class="col p-4">`;
    cardCode += `<div class="card" style="width: 18rem;">`;
    
    // image place (DONE)
    cardCode += `<img src="..." class="card-img-top p-1" id = "productImg` ;
    cardCode += imgNumber;
    cardCode += `" width="" height="220">`;

    cardCode += `<div class="card-body">`;
    
    // name place (title) (DONE)
    cardCode += `<h4 class="card-title" id = "title` + titleNumber;
    cardCode += `">`;
    cardCode += `</h4>`;
    
    // price place (DONE)
    cardCode += `<h5 class="card-title" id = "productPrice` + priceNumber;
    cardCode += `">`;
    cardCode += `</h5>`;

    // part number place (IN PROGRESS)
    cardCode += `<p class="card-title" id = "partNoProduct` + partNO_Number;
    cardCode += `">` + `Part No. `;
    cardCode += `</p>`;

    // product page button
    cardCode += `<a href="#" class="btn btn-primary">View Details</a>`;

    cardCode += ` </div> </div> </div>`

    document.getElementById("cardsPlace").innerHTML += cardCode;

    titleNumber++;
    imgNumber++;
    priceNumber++;
    partNO_Number++;

}

function putNames(){

    var titleID = 1;
    var titleHtml = "title";

    for(let key in json_object){
        
        document.getElementById(titleHtml + titleID.toString(10)).innerHTML += json_object[key]["Name"];
        titleID++;

    }
    
}

function putImages(){

    var imageID = 1;
    var imageHtml = "productImg";

    for(let key in json_object){
        
        document.getElementById(imageHtml + imageID.toString(10)).src = json_object[key]["ImageURL"];
        imageID++;

    }

}

function putPrices(){

    var priceID = 1;
    var priceHtml = "productPrice";

    for(let key in json_object){
        
        document.getElementById(priceHtml + priceID.toString(10)).innerHTML = "$" + json_object[key]["Price"];
        priceID++;

    }

}

function putPartNOs(){

    var noID = 1;
    var noHtml = "partNoProduct";

    for(let key in json_object){
        
        document.getElementById(noHtml + noID.toString(10)).innerHTML += json_object[key]["PartNo"];
        noID++;

    }
}




