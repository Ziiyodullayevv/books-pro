import { createBrowserRouter } from "react-router";

import Layout from "../components/Layout";
import Books from "../components/Books";
import BookDetails from "../components/BookDetails";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Books /> },
			{ path: ":bookId", element: <BookDetails /> },
		],
	},
]);
