function login(){        
    let uname = document.getElementById("mortID").value;
    let pwd = document.getElementById("password").value;
    //validations for inputs
    if (uname == null || uname === "") {
        alert("Please enter the Mortgage ID");
        // uname.focus();
        return false;
    }
    if (pwd == null || pwd === "") {
        alert("Please enter the password");
        // pwd.focus();
        return false;
    }
    let url = "https://projectclustermbrback.azurewebsites.net/loginmbr019?id=" + uname +"&password=" + pwd;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(this.response);
            
            if(result.mortgageStatus == "Id and Password Doesnt Match"){  
                alert("Login Failed");
            }
            if(result.mortgageStatus == "ID not found"){
                alert("User ID does not exist");
            }
            else if(result.success == "Login Successful"){
                sessionStorage.setItem('mortgageID',result.id)
                location.href = "/mbrstatus";
            }
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}

function ValidationsNum(txt, event) {
    let char = (event.which) ? event.which : event.keyCode;
    if (char == 46) {
        return txt.value.indexOf('.') === -1;
    } else {
        if (char > 31 && (char < 48 || char > 57))
            return false;
    }
    return true;
}

function ValidationsName(txt, event) {
    let char = (event.which) ? event.which : event.keyCode;
    if (char == 46) {
        return txt.value.indexOf('.') === -1;
    } else {
        if (char > 31 && (char < 48 || char > 57))
            return true;
    }
    return false;
}

function mbrform() {
    var name = document.getElementById("name").value;
    var mvalue = document.getElementById("mvalue").value;
    var mlsid = document.getElementById("mlsid").value;
    var empName = document.getElementById("empName").value;
    var pwd = document.getElementById("password").value;

    var submitBtn = document.getElementById("submitBtn")
    //validations for inputs
    if (name == null || name === "") {
        alert("Please enter the name");
        return false;   
     }

    if (mvalue == null || mvalue === "") {
        alert("Please enter the Mortgage value");
        return false;
    }
    if (mlsid == null || mlsid === "") {
        alert("Please enter the MLSID");
        return false;
    }
     if (empName == null || empName === "") {
        alert("Please enter your Employer name ");
        return false;
    }
    if (pwd == null || pwd === "") {
    
            alert("Please enter a valid password");
            return false;
    }
   
            let url = "https://projectclustermbrback.azurewebsites.net/personalinfo019?name=" + name + "&mortgage_value=" + mvalue + "&MISID=" + mlsid + "&Employer_name=" +empName +"&Password=" +pwd;
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log("got response");
                    let result = JSON.parse(this.response);
                    document.getElementById("applicationNum").innerHTML = "Your Mortgage id is: " + result.appid;
                    document.getElementById("brokerAddress").innerHTML = "Broker's webservice is: " + result.webservice;
                    console.log(result);
                }
            };
            xhttp.open("POST", url, true);
            xhttp.send();
        }
    

var passcheck = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Password mismatch';
    }
  }

