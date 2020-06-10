/*jshint esversion: 6 */

let login = document.getElementById('login');
let password = document.getElementById('password');
let showHidePassword = document.getElementById('password-eye');
let formLogin = document.getElementById('form-login');
let formSignUp = document.getElementById('form-sign-up');

let flagLogin = false;
let flagPassword = false;
let flagShowPassword = false;

showHidePassword.addEventListener( "click", () => {
	if(!flagShowPassword) {
		password.removeAttribute('type');
		password.setAttribute('type', 'text');
		flagShowPassword = !flagShowPassword;
	} else {
		password.removeAttribute('type');
		password.setAttribute('type', 'password');
		flagShowPassword = !flagShowPassword;
	}
});

login.addEventListener( "keyup" , () => {
	let letters = /^([A-Za-z])+$/;
	if(login.value.match(letters) && login.value.length >= 5) {
		hintLogin.innerHTML = " ";
		flagLogin = true;
		return true;
	} else {
		hintLogin.innerHTML = 'Login must consist of letters Aa-Zz';
		flagLogin = false;
		return false;
	}
});

password.addEventListener( "keyup" , () => {
	let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{5,10}$/;
	if(password.value.match(patternPassword)) {
		hintPassword.innerHTML = " ";
		flagPassword = true;
	} else {
		hintPassword.innerHTML = "Password must contain:<br>1 lowercase letter<br>1 capital letter<br>1 digit<br>password length 6-10 characters" ;
		return false;
	}
	return true;
});

unlockBtn = () => {
	if(!(flagLogin == true && flagPassword == true)) {
		document.getElementById('btn').setAttribute('disabled', true);
		document.getElementById('btn').classList.remove('btn-success');
	} else {
		document.getElementById('btn').removeAttribute('disabled');
		document.getElementById('btn').classList.add('btn-success');
	}
};

login.addEventListener('keyup', unlockBtn);
password.addEventListener('keyup', unlockBtn);


logIn = () => {
	if(login.value === 'admin' && password.value === 'admiN7') {
		window.location.assign('file:///D:/proj/regist/adminPage.html');
		login.innerHTML = '';
	} else {
		// document.getElementById('btn').classList.remove('hidden');
		alert('try again');
	}
};

changeForm = () => {
	formLogin.classList.add('hidden');
	formSignUp.classList.remove('hidden');
};
