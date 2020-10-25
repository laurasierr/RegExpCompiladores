function evCadena(){
    let x = document.getElementById("contra").value;
    let regExp = /^[A-Z]\d{3}\w{3}\W{3}$/;

    if(regExp.test(x))
        Swal.fire({
            icon: 'success',
            title: 'Contraseña valida.',
            showConfirmButton: false,
            timer: 1500
          })
    else
        Swal.fire({
            icon: 'error',
            title: 'Contraseña invalida. Comprele silla de ruedas.',
            showConfirmButton: false,
            timer: 1500
          })
    
        
}
