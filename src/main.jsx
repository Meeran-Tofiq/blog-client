import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./components/Homepage.jsx";
import "./index.css";

async function customFetch(url) {
	const res = fetch(import.meta.env.VITE_API_URL + url);
	return res;
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage fetch={customFetch} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App>
			<RouterProvider router={router}></RouterProvider>
		</App>
	</React.StrictMode>
);
