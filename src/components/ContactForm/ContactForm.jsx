import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import Button from "@mui/material/Button";
import style from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const ContactFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	number: Yup.string()
		.min(9, "Too Short!")
		.max(9, "Too Long!")
		.matches(phoneRegExp, "Phone number is not valid. It has to be XXX-XX-XX")
		.required("Required"),
});

const initialValues = {
	name: "",
	number: "",
};

export default function ContactForm() {
	const dispatch = useDispatch();

	const nameFieldId = useId();
	const numberFieldId = useId();

	const handleSubmit = (values, actions) => {
		dispatch(addContact({ ...values }));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={ContactFormSchema}
		>
			<Form className={style.contact_form}>
				<div className={style.contact_form_item}>
					<label htmlFor={nameFieldId} className={style.contact_form_label}>
						Username
					</label>
					<Field
						type="text"
						name="name"
						id={nameFieldId}
						className={style.contact_form_field}
					/>
					<ErrorMessage
						name="name"
						component="span"
						className={style.contact_form_error_message}
					/>
				</div>
				<div className={style.contact_form_item}>
					<label htmlFor={numberFieldId} className={style.contact_form_label}>
						Number
					</label>
					<Field
						type="text"
						name="number"
						id={numberFieldId}
						className={style.contact_form_field}
					/>
					<ErrorMessage
						name="number"
						component="span"
						className={style.contact_form_error_message}
					/>
				</div>

				<Button variant="outlined" color="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Formik>
	);
}
