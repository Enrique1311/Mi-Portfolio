import React from "react";
import MyButton from "../utilities/Button/MyButton";
import "./MyForm.css";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

const initialForm = {
	name: "",
	email: "",
	message: "",
};

const MyForm = () => {
	const { texts } = useContext(LangContext);

	const validationsForm = (form) => {
		let errors = {};
		let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
		let regexMessage = /^.{1,250}$/;

		if (!form.name.trim()) {
			errors.name = `${texts.nameErrorMessage}`;
		} else if (!regexName.test(form.name.trim())) {
			errors.name = `${texts.nameErrorMessage2}`;
		}

		if (!form.email.trim()) {
			errors.email = `${texts.emailErrorMessage}`;
		} else if (!regexEmail.test(form.email.trim())) {
			errors.email = `${texts.emailErrorMessage2}`;
		}

		if (!form.message.trim()) {
			errors.message = `${texts.messageErrorMessage}`;
		} else if (!regexMessage.test(form.message.trim())) {
			errors.message = `${texts.messageErrorMessage2}`;
		}

		return errors;
	};
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validationsForm);

	return (
		<div className="form-container">
			<form
				className="form"
				onSubmit={handleSubmit}
			>
				<div className="form-name">
					<label htmlFor="name">{texts.formName}</label>
					<input
						type="text"
						name="name"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.name}
						required
					/>
					{errors.name && <p>{errors.name}</p>}
				</div>
				<div className="form-email">
					<label htmlFor="email">{texts.formEmail}</label>
					<input
						type="email"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.email}
						required
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-message">
					<label htmlFor="message">{texts.formMessage}</label>
					<textarea
						type="text"
						name="message"
						rows="4"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.message}
						required
					/>
					{errors.message && <p>{errors.message}</p>}
				</div>
				<div className="send-resp">
					<MyButton
						type="submit"
						name="Submit"
					>
						{texts.formButton}
					</MyButton>
				</div>
			</form>
			{loading && <Loader />}
			{response && (
				<Message
					msg={texts.emailMessage}
					bgColor="rgb(39, 31, 82)"
				/>
			)}
		</div>
	);
};

export default MyForm;
