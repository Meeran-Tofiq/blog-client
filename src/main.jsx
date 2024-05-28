import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./components/Homepage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import BlogPage from "./components/BlogPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

async function customFetch(url) {
	const res = fetch(import.meta.env.VITE_API_URL + url);
	return res;
}

async function postFormData(data, event, url) {
	event.preventDefault();

	const res = await fetch(import.meta.env.VITE_API_URL + url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return res;
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage fetch={customFetch} />,
	},
	{
		path: "/login",
		element: <LoginForm postFormData={postFormData} />,
	},
	{
		path: "/sign-up",
		element: <SignUpForm postFormData={postFormData} />,
	},
	{
		path: "/blog-post/:blogPostId",
		element: <BlogPage fetch={customFetch} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<App>
				<RouterProvider router={router}></RouterProvider>
			</App>
		</AuthProvider>
	</React.StrictMode>
);
