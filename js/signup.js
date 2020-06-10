/*jshint esversion: 6 */

let loginSignUp = document.getElementById('login-sugn-up');
let passwordSignUp = document.getElementById('password-sugn-up');
let emailSignUp = document.getElementById('email-sugn-up');
let confirmPasswordSignUp = document.getElementById('password-confirm');
let formLoginSu = document.getElementById('form-login');
let formSignUpSu = document.getElementById('form-sign-up');
let showHidePasswordSignUp = document.getElementById('password-eye-sign-up');
let showHidePasswordConfSignUp = document.getElementById('password-conf-eye-sign-up');


let flagLoginSignUp = false;
let flagPasswordSignUp = false;
let flagEmailSignUp = false;
let flagconfirmPasswordSignUp = false;
let flagShowPasswordSignUp = false;

ShowHidePass = () => {
	if(!flagShowPasswordSignUp) {
		passwordSignUp.removeAttribute('type');
		passwordSignUp.setAttribute('type', 'text');
		confirmPasswordSignUp.removeAttribute('type');
		confirmPasswordSignUp.setAttribute('type', 'text');
		flagShowPasswordSignUp = !flagShowPasswordSignUp;
	} else {
		passwordSignUp.removeAttribute('type');
		passwordSignUp.setAttribute('type', 'password');
		confirmPasswordSignUp.removeAttribute('type');
		confirmPasswordSignUp.setAttribute('type', 'password');
		flagShowPasswordSignUp = !flagShowPasswordSignUp;
	}
};

showHidePasswordSignUp.addEventListener( "click", ShowHidePass);
showHidePasswordConfSignUp.addEventListener('click', ShowHidePass);

loginSignUp.addEventListener( "keyup" , () => {
	let letters = /^([A-Za-z])+$/;
	if(loginSignUp.value.match(letters) && loginSignUp.value.length >= 5) {
		hintLoginSignUp.innerHTML = " ";
		flagLoginSignUp = true;
		return true;
	} else {
		hintLoginSignUp.innerHTML = 'Login must consist of letters Aa-Zz';
		return false;
	}
});

emailSignUp.addEventListener( "keyup", () => {
	let letters =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	if(emailSignUp.value.match(letters)) {
		hintEmailSignUp.innerHTML = " ";
		flagEmailSignUp = true;
		return true;
	} else {
		hintEmailSignUp.innerHTML = "'You must enter example@gmail.com'";
		return false;
	}
});

passwordSignUp.addEventListener( "keyup" , () => {
	let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{5,10}$/;

	if(passwordSignUp.value.match(patternPassword)) {
		hintPasswordSignUp.innerHTML = " ";
		flagPasswordSignUp = true;
	} else {
		hintPasswordSignUp.innerHTML = "Password must contain:<br>1 lowercase letter<br>1 capital letter<br>1 digit<br>password length 6-10 characters" ;
		return false;
	}
	return true;
});

confirmPasswordSignUp.addEventListener( "keyup" , () => {
	if(confirmPasswordSignUp.value !== passwordSignUp.value) {
		errorConfPasswordSignUp.innerHTML = "Password mismatch" ;
		hintConfPasswordSignUp.innerHTML = " ";
	} else {
		errorConfPasswordSignUp.innerHTML = " ";
		flagconfirmPasswordSignUp = true;
		return false;
	}
	return true;
});

unlockBtnSignUp = () => {
	if(!(flagLoginSignUp == true 
		&& flagPasswordSignUp == true
		&& flagEmailSignUp == true
		&& flagconfirmPasswordSignUp == true)) {
		document.getElementById('btn-sign-up').setAttribute('disabled', true);
		document.getElementById('btn-sign-up').classList.remove('btn-success');
	} else {
		document.getElementById('btn-sign-up').removeAttribute('disabled');
		document.getElementById('btn-sign-up').classList.add('btn-success');
	}
};

loginSignUp.addEventListener('keyup', unlockBtnSignUp);
passwordSignUp.addEventListener('keyup', unlockBtnSignUp);
emailSignUp.addEventListener('keyup', unlockBtnSignUp);
confirmPasswordSignUp.addEventListener('keyup', unlockBtnSignUp);


signUp = () => {
	window.location.assign('file:///D:/proj/regist/newUser.html');
	localStorage.setItem('login', loginSignUp.value);
};

changeFormOnLogin = () => {
	formSignUpSu.classList.add('hidden');
	formLoginSu.classList.remove('hidden');
};