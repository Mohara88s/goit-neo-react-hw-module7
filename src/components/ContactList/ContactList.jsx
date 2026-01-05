import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
	const filteredContacts = useSelector(selectFilteredContacts);
	return (
		<ul className={style.contacts_list}>
			{filteredContacts.map((contact) => {
				return (
					<li className={style.contacts_list_item} key={contact.id}>
						<Contact contact={contact} />
					</li>
				);
			})}
		</ul>
	);
}
