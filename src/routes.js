// This file is used to define the routes of the application. It uses the createBrowserRouter function from react-router-dom to create a router that will be used in the App component.

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CategoryList } from "./components/categoryList/CategoryList";
import { QuestionsList } from "./components/questionsList/QuestionsList";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "categories",
		element: <CategoryList />,
	},
	{
		path: "categories/:id/questions",
		element: <QuestionsList />,
	},
]);
