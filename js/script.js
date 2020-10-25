document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("form");
	form.onsubmit = function (event) {
		event.preventDefault();
		const contra = document.getElementById('contra').value;
		const regExp = /^[A-Z]\d{3}\w{3}\W{3}$/;
		if (contra != "") {
			if (regExp.test(contra)) {
				Swal.fire(
					'¡Correcto!',
					'La contraseña es válida',
					'success'
				);
			} else {
				Swal.fire(
					'¡Error!',
					'La contraseña no es válida. Verifique los requerimientos e intente nuevamente.',
					'error'
				);
			}
		} else {
			Swal.fire(
				'¡Error!',
				'La contraseña no puede estar vacía.',
				'error'
			);
		}

	}
});
