import axios from "axios";

export const getCategories = async () => {
	const response = await axios.get("http://localhost:50000/categories");
	const data = await response.data;
	return data;
};
