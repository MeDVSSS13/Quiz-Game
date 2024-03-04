// This file contains the functions that will make the requests to the server for the categories
import axios from "axios";

export const getCategories = async () => {
	const response = await axios.get("http://localhost:50000/categories");
	const data = await response.data;
	return data;
};
// This file contains the functions that will make the requests to the server for the category
export const getCategory = async (id) => {
	const response = await axios.get(`http://localhost:50000/categories/${id}`);
	const data = await response.data;
	return data;
};
