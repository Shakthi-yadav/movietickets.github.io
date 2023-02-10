

function ShowLoginForm(){
	
	SetTitle("Login");
 ShowHideForm("LoginFrom","Show");
ShowHideForm("ForgotPasswordForm","Hide");	

	ShowHideForm("RegistrationFrom","Hide");

	ShowHideFromSwitchBtn("hide");
};

function ShowForgotPasswordForm(){
	
	SetTitle("Forgot Password");
 ShowHideForm("LoginFrom","Hide");
	
ShowHideForm("ForgotPasswordForm","Show");
	ShowHideForm("RegistrationFrom","Hide");

	ShowHideFromSwitchBtn("hide");
};


function ShowRegistrationForm(){
	debugger;
	SetTitle("Registration");

	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");

	ShowHideFromSwitchBtn("Show");
};



function SetTitle(Title){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = Title;
}

function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	debugger;
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

function ShowHideFromSwitchBtn(ShowOrHide) {
	var formSwitchBtn = document.getElementById('formSwitchBtn');
	if(ShowOrHide == 'Show'){
		formSwitchBtn.style.display = '';
	}else{
		formSwitchBtn.style.display = 'none';
	}
}

// end