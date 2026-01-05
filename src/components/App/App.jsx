import Section from "../Section/Section";
import Container from "../Container/Container";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";

export default function App() {
	return (
		<>
			<Section>
				<Container>
					<h1 className={style.h1}>Phonebook</h1>
					<ContactForm />
					<SearchBox />
					<ContactList />
				</Container>
			</Section>
		</>
	);
}
