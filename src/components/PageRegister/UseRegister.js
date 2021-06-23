import axios from "axios";
import { useState } from "react";

const UseRegister = validate => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		password2: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values))
		const listErrors = validate(values)

		if (!listErrors.email && !listErrors.password && !listErrors.password2) {
			axios.post('https://gift-api-v1.herokuapp.com/customer/register', {
				ten: values.name,
				sdt: values.phone,
				email: values.email,
				mat_khau: values.password
			})
				.then((res) => {
					if (res.data === "Success") {
						alert('Đăng ký thành công !')
						window.location.replace('/login')
					}
				})
				.catch(err => console.log(err))
		}
	};
	return { handleChange, values, handleSubmit, errors };
};
export default UseRegister;
