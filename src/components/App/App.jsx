import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import Section from "../Section/Section";
import Container from "../Container/Container";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import style from "./App.module.css";

export default function App() {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	useEffect(() => {
		if (error) {
			toast.error(`Error: ${error}`);
		}
	}, [error]);

	return (
		<>
			<Section>
				<Container>
					<div className={style.box}>
						<h1 className={style.h1}>Phonebook</h1>
						{loading && !error && (
							<ClipLoader
								color="#1976d2"
								size={40}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						)}
					</div>
					<ContactForm />
					<SearchBox />
					<ContactList />
				</Container>
			</Section>
		</>
	);
}
