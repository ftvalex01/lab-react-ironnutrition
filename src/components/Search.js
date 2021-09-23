import { Input } from "antd";


function Search (props) {
	const handleSearchInput = (e) => {
	props.filterFoodList(e.target.value)}

	return (
		<>
		<h2>Search</h2>
		<Input type='text' onChange= {handleSearchInput}>
		</Input>
		</>
	)
}

export default Search