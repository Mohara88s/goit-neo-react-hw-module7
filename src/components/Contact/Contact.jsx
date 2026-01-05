import { FaPhone, FaUserLarge } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import Button from "@mui/material/Button";
import style from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
	const dispatch = useDispatch();

	return (
		<div className={style.contact_card}>
			<ul className={style.contact_card_info}>
				<li className={style.contact_card_info_item}>
					<FaUserLarge />
					<p>{name}</p>
				</li>
				<li className={style.contact_card_info_item}>
					<FaPhone />
					<p>{number}</p>
				</li>
			</ul>
			<Button
				variant="outlined"
				color="primary"
				onClick={() => {
					dispatch(deleteContact(id));
				}}
			>
				Delete
			</Button>
		</div>
	);
}
