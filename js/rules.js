

		let allFields = document.querySelectorAll(".register_form");

		for (var i = 0; i < allFields.length; i++) {

			allFields[i].addEventListener("keyup", function(event) {

				if (event.keyCode === 13) {
					console.log('Enter clicked')
					event.preventDefault();
					if (this.parentElement.nextElementSibling.querySelector('input')) {
						this.parentElement.nextElementSibling.querySelector('input').focus();
					}
				}
			});
		}


        function handlerName (event) {
			let ok = document.querySelector('#name_ok');
            if (event.type == 'input') {
				ok.innerHTML='OK';
			}

        }
		
		function handlerPass (event) {
			let passw = document.querySelector('#name_pass');
			let pass = document.querySelector('input[name="pass"]');
            if (event.type== 'input' && pass.value.length > 7) {
				passw.innerHTML='OK';
			}
			
        }
		
		function checkName (event) {
			let pa = document.querySelector('#name_pass');
       if (event.key.match(/[a-zа-я0-9]/i) && event.key.toLowerCase() !='ё') {
		   pa.innerHTML='слишком слабый пароль';

}		   //наблюдаем за символами в пароле. если есть цифры то пароль хороший
    }
		
        function submitForm (){
            
            let name = document.querySelector('input[name="name"]');
			console.log(name);
			
			let pass = document.querySelector('input[name="pass"]');
			console.log(name);
			
			let error = document.querySelector('#name_error');
			
			let error_pass = document.querySelector('#pass_error');
			
			let error_check = document.querySelector('#check_error');
			
					
            if (name.value.length == 0) {
                name.focus();
				error.innerHTML='Вы не ввели имя пользователя';
				event.preventDefault();   
            }
			
			 
			if (pass.value.length < 8) {
                pass.focus();
				error_pass.innerHTML='Пароль должен содержать не менее 8 символов';
				event.preventDefault();   
            }
			
			if (!document.querySelector('input[name="data"]').checked){              
				error_check.innerHTML='Вы не согласились с правилами';			
				event.preventDefault(); 
            }		
        }

			document.addEventListener('DOMContentLoaded', function (event) {
			
			document.querySelector('form').addEventListener('submit', submitForm);
			document.querySelector('input[name="name"]').addEventListener('input', handlerName);
			document.querySelector('input[name="pass"]').addEventListener('input', handlerPass);
			document.querySelector('input[name="pass"]').addEventListener('keydown', checkName);

        });

		$(document).ready(function() {
		$("#phone").mask("+7 (999) 99-99-999");
		});
   


