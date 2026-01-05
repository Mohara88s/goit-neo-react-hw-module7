import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const contactsToShow = contacts
		.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		)
		.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<ul className={style.contacts_list}>
			{contactsToShow.map((contact) => {
				return (
					<li className={style.contacts_list_item} key={contact.id}>
						<Contact contact={contact} />
					</li>
				);
			})}
		</ul>
	);
}
