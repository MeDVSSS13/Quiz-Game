import axios from "axios";

export const getQuestions = async (id) => {
	const response = await axios.get(
		`http://localhost:50000/questions?categoryId=${id}`
	);
	const data = await response.data;
	return data;
};
