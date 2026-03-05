import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import { Layout } from "@/layouts";

// -------------------------------------------------

const HomePage = lazy(() => import("@/pages/home-page"));
const BookDetails = lazy(() => import("@/pages/book-details"));

export const routes = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<p>Loading...</p>}>
				<Layout />
			</Suspense>
		),
		children: [
			{ index: true, element: <HomePage /> },
			{ path: ":bookId", element: <BookDetails /> },
		],
	},
]);
