function evCadena(){
    let x = document.getElementById('contra').value;
    let regExp = /^[A-Z]\d{3}\w{3}\W{3}$/;

    if(regExp.test(x)){
        console.log("Correcta")
        document.getElementById('alr2').style.display = 'block';
        } else {
            console.log("Incorrecta")
            document.getElementById('alr1').style.display = 'block';
        }
    
        
}
