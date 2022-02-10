const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//create method showErro and showSuccess

//show Error Message
function showError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';

	const small = formControl.querySelector('small');
	small.innerText = message;
}

// show success message
function showSuccess(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


//Email Validation
function checkEmail(input){
	const re = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
   if(re.test(input.value.trim())){
   	showSuccess(input);
   } else{
   	showError(input, "Your Email is not Valid")
   }
}


//Check Required
function checkRequired(inputArr){
	inputArr.forEach(function(input){
		if(input.value.trim() === ''){
			//showError(input, `${input.id} is required `);

			showError(input, `${getFileName(input)} is required `);
		}else{
			showSuccess(input);
		}
	});
}

// Check input length
function checkLength(input, min, max){
	if(input.value.length < min){
		showError(input, `${getFileName(input)} must be at least ${min} characters `)
	}else if(input.value.length > max){
		showError(input, `${getFileName(input)} must be less than  ${max} characters `)
	}else {
		showSuccess(input);
	}
}




// Get field Name
function getFileName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check password maching
function checkPasswordMatch(input1, input2){
	if(input1.value !== input2.value){
		showError(input2, "Password do not match");
	}
}


//Event Listeners

form.addEventListener('submit', function(e){
		e.preventDefault();


/*
		if(username.value === ''){
			showError(username, 'Username is required');
		}else{
			showSuccess(username);
		}
		if(password.value === ''){
			showError(password, 'Password is required');
		}else{
			showSuccess(password);
		}

		if(password2.value === ''){
			showError(password2, 'Password is required');
		}else{
			showSuccess(password2);
		}

		if(email.value === ''){
			showError(email, 'Email is required');
		}
		else if(!isValidator(email.value)){
			showError(email, 'Email is not Valid');
		}
		else{
			showSuccess(email);
		}*/


checkRequired([username, email, password, password2]);
checkLength(username, 4, 15);
checkLength(password, 4, 8);
checkLength(password2, 4, 8);
checkEmail(email);
checkPasswordMatch(password, password2);
})