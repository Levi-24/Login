let key;

function Register(){
    do {
        key = document.getElementById('name').value
      } while (key == null);
    let value = document.getElementById('password').value;
    localStorage.setItem(key,value);
}

function Login(){
    let name = document.getElementById('logname').value;
    let password = document.getElementById('logpassword').value;
    let test = JSON.stringify(localStorage.getItem(name)).replaceAll('"','');

    if(test == password && name != ""){
        document.getElementById('alert').className = "succes";
        document.getElementById('alert').innerHTML = "Sikeres belépés!";
    }
    else{
        document.getElementById('alert').className = "fail";
        document.getElementById('alert').innerHTML = "Sikertelen belépés!";
    }
}