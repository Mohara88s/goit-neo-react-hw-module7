import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import style from "./SearchBox.module.css";

export default function SearchBox() {
	const dispatch = useDispatch();
	const filter = useSelector(selectNameFilter);
	const searchFieldId = useId();

	const handleFilterChange = (evt) => {
		dispatch(changeFilter(evt.target.value));
	};

	return (
		<form className={style.search_form} autoComplete="off">
			<label htmlFor={searchFieldId} className={style.search_form_label}>
				Find contacts by name
			</label>
			<input
				type="text"
				name="search"
				id={searchFieldId}
				onChange={handleFilterChange}
				value={filter}
				className={style.search_input}
			/>
		</form>
	);
}
