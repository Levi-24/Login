function Register(){
    let key = document.getElementById('name').value;
    let value = document.getElementById('password').value;
    localStorage.setItem(key,value);
}

function Login(){
    let name = document.getElementById('logname').value;
    let password = document.getElementById('logpassword').value;
    let test = JSON.stringify(localStorage.getItem(name)).replaceAll('"','');

    if(test == password){
        document.getElementById('alert').className = "succes";
        document.getElementById('alert').innerHTML = "Sikeres belepes!";
    }
    else{
        document.getElementById('alert').className = "fail";
        document.getElementById('alert').innerHTML = "Sikertelen belepes!";
    }
}