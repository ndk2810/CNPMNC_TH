export default function ValidateInfo(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Username required";
	}

	//email
	if (!values.email) {
		errors.email = "Email required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	//pasword
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password need to be 6 character or more";
	}

	//confirm password
	if (!values.password2) {
		errors.password2 = "Password is required";
	} else if (values.password2 !== values.password) {
		errors.password2 = "Password do not match";
	}
	return errors;
}
