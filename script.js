function evCadena(){
    let x = document.getElementById("contra").value;
    let regExp = /^[A-Z]\d{3}\w{3}\W{3}$/;

    if(regExp.test(x))
        alert("Contraseña correcta.");
    else
        alert("Contraseña incorrecta");
}
