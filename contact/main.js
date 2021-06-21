function sendQ(){

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;
    

    var sel = document.getElementById("contactMethod");
    var contactMethod = sel.options[sel.selectedIndex].text;


    var busType = document.getElementById("typeUserInput").value;
    var city = document.getElementById("cityInput").value;
    var subject = document.getElementById("subjectInput").value;
    var msg = document.getElementById("comment").value;


    // alert(name + "\n" + email + "\n" + phone + "\n" + contactMethod + "\n" + busType + "\n" + city + "\n" + subject + "\n" + msg);

    if( name == "" 
    || email == ""  
    || contactMethod == "Choose..." 
    || busType == "" 
    || city == "" 
    || subject == "" 
    || msg == "")
    {
        alert("Something is missing, you have to fill everything");
    }
    else{

        var content = "";
        content += "Name: " + name + "\n";
        content += "Email: " + email + "\n";
        content += "Phone: " + phone + "\n";
        content += "Prefered Contact Method: " + contactMethod + "\n";
        content += "Business Type: " + busType + "\n";
        content += "Shipping City: " + city + "\n\n";
        content += "Message Subject: " + subject + "\n\n";
        
        content += "The user's message is: " + "\n";
        content += msg;

        var tempParam = {

            from_name: "Mayeln Web Page",
            to_name: "Nas",
            message: content
    
        };
    
        emailjs.send("service_ycqlyv3", "template_cn2bojh", tempParam)
        .then(function(res){
            console.log("succes", res.status);
        })


    }

    

}