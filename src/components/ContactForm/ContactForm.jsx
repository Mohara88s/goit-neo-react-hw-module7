import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import Button from "@mui/material/Button";
import style from "./ContactForm.module.css";

import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/selectors";

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

// Зробив Id як в прикладі
const getNewId = (existingContacts) => {
	if (existingContacts.length === 0) {
		return "id-1";
	}
	const lastContact = existingContacts[existingContacts.length - 1];
	const newIdNumber = parseInt(lastContact.id.split("-")[1], 10) + 1;
	return `id-${newIdNumber}`;
};

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
	const contacts = useSelector(getContacts);

	const nameFieldId = useId();
	const numberFieldId = useId();

	const handleSubmit = (values, actions) => {
		const newContact = { id: getNewId(contacts), ...values };
		dispatch(addContact(newContact));
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
