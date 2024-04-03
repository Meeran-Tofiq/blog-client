import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./components/Homepage.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App>
			<RouterProvider router={router}></RouterProvider>
		</App>
	</React.StrictMode>
);
