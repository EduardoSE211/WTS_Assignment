function onButtonClick() {
    document.getElementById("ClickMe").style.display = "none";
    document.getElementById("Links").style.display = "none";
    document.getElementById('instructionstext').innerHTML = "Console &#x1F3C3;";
    console.log("Run!123 is our pasword maybe");
    alert("We love Running!");
    var NewBox = document.createElement("div");
    NewBox.id = "Password";
    NewBox.innerHTML = "<p>Enter Password:</p> <input id='pass' type='password'/> <button onclick='done()'>Done</button> ";
    document.body.appendChild(NewBox);

    document.getElementById("Password").style.display = "block";
    
    
    
}

function done() { 
    document.getElementById("Password").style.display = "none";
    var password = document.getElementById("pass").value;

    if (password == "Run!123"){
        var successBox = document.createElement("div");
        successBox.id = "success";
        successBox.innerHTML = "<p>Success!!!</p><button onclick='ok()'>OK</button> ";
        document.body.appendChild(successBox);
        document.getElementById("success").style.display = "block";
        document.getElementById("Links").style.display = "block";
    }
    else {
        document.getElementById("Password").style.display = "block";
    }

};

function ok() {
    document.getElementById("success").style.display = "none";
}

